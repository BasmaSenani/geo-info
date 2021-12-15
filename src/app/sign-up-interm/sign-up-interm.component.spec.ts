import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpIntermComponent } from './sign-up-interm.component';

describe('SignUpIntermComponent', () => {
  let component: SignUpIntermComponent;
  let fixture: ComponentFixture<SignUpIntermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpIntermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpIntermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
