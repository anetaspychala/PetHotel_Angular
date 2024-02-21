import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContainerComponentComponent } from './admin-container-component.component';

describe('AdminContainerComponentComponent', () => {
  let component: AdminContainerComponentComponent;
  let fixture: ComponentFixture<AdminContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContainerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
