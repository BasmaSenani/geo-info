import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterPageComponent } from './inter-page.component';

describe('InterPageComponent', () => {
  let component: InterPageComponent;
  let fixture: ComponentFixture<InterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
