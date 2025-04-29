import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

interface Mensaje {
  name: string;
  email: string;
  comPreference: string;
  time: string;
  phone: string;
  msg: string;
  date: string;
}

@Component({  // Ensure the decorator is applied to the class
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'] // Correct typo: styleUrl -> styleUrls
})
export class MessagesComponent implements OnInit {
  messages: Mensaje[] = []; // Correctly declare the messages array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages(): void {
    this.http.get<{ status: string; mensajes: Mensaje[] }>(`${environment.apiUrl}/api/getMsg`).subscribe({
      next: (data) => {
        if (data && Array.isArray(data.mensajes)) {
          this.messages = data.mensajes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          console.log('Fetched messages:', this.messages);
        } else {
          console.error('Unexpected response format:', data);
        }
      },
      error: (error) => {
        console.error('Error fetching messages:', error);
      }
    });
  }
}