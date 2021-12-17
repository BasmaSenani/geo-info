import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterFormComponent } from './inter-form.component';

describe('InterFormComponent', () => {
  let component: InterFormComponent;
  let fixture: ComponentFixture<InterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
