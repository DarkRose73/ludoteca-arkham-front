import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarJuegoComponent } from './actualizar-juego.component';

describe('ActualizarJuegoComponent', () => {
  let component: ActualizarJuegoComponent;
  let fixture: ComponentFixture<ActualizarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
