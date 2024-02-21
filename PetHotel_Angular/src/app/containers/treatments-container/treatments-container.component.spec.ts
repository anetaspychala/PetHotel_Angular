import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsContainerComponent } from './treatments-container.component';

describe('TreatmentsContainerComponent', () => {
  let component: TreatmentsContainerComponent;
  let fixture: ComponentFixture<TreatmentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
