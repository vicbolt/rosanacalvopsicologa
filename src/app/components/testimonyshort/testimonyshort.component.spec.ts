import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyshortComponent } from './testimonyshort.component';

describe('TestimonyshortComponent', () => {
  let component: TestimonyshortComponent;
  let fixture: ComponentFixture<TestimonyshortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonyshortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonyshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
