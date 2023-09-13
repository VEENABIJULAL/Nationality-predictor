import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictNationalityComponent } from './predict-nationality.component';

describe('PredictNationalityComponent', () => {
  let component: PredictNationalityComponent;
  let fixture: ComponentFixture<PredictNationalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictNationalityComponent]
    });
    fixture = TestBed.createComponent(PredictNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
