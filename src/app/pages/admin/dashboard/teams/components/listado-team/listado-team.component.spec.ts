import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTeamComponent } from './listado-team.component';

describe('ListadoTeamComponent', () => {
  let component: ListadoTeamComponent;
  let fixture: ComponentFixture<ListadoTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
