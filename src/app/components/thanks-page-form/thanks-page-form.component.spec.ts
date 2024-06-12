import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksPageFormComponent } from './thanks-page-form.component';

describe('ThanksPageFormComponent', () => {
  let component: ThanksPageFormComponent;
  let fixture: ComponentFixture<ThanksPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThanksPageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThanksPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
