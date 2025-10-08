import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaposicionesComponent } from './tablaposiciones.component';

describe('TablaposicionesComponent', () => {
  let component: TablaposicionesComponent;
  let fixture: ComponentFixture<TablaposicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaposicionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaposicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
