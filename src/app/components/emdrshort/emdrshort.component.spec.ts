import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdrshortComponent } from './emdrshort.component';

describe('EmdrshortComponent', () => {
  let component: EmdrshortComponent;
  let fixture: ComponentFixture<EmdrshortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmdrshortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmdrshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
