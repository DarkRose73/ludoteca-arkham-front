import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetallesComponent } from './juego-detalles.component';

describe('JuegoDetallesComponent', () => {
  let component: JuegoDetallesComponent;
  let fixture: ComponentFixture<JuegoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
