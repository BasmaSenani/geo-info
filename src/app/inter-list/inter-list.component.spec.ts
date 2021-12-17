import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterListComponent } from './inter-list.component';

describe('InterListComponent', () => {
  let component: InterListComponent;
  let fixture: ComponentFixture<InterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
