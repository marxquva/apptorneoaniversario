import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMatchesModalComponent } from './detalle-matches-modal.component';

describe('DetalleMatchesModalComponent', () => {
  let component: DetalleMatchesModalComponent;
  let fixture: ComponentFixture<DetalleMatchesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMatchesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMatchesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
