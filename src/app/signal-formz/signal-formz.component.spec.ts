import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFormzComponent } from './signal-formz.component';

describe('SignalFormzComponent', () => {
  let component: SignalFormzComponent;
  let fixture: ComponentFixture<SignalFormzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalFormzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalFormzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
