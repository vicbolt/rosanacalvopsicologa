import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeshortComponent } from './aboutmeshort.component';

describe('AboutmeshortComponent', () => {
  let component: AboutmeshortComponent;
  let fixture: ComponentFixture<AboutmeshortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutmeshortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutmeshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
