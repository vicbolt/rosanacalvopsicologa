import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdrinfoComponent } from './emdrinfo.component';

describe('EmdrinfoComponent', () => {
  let component: EmdrinfoComponent;
  let fixture: ComponentFixture<EmdrinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmdrinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmdrinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
