import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoExpansionesComponent } from './juego-expansiones.component';

describe('JuegoExpansionesComponent', () => {
  let component: JuegoExpansionesComponent;
  let fixture: ComponentFixture<JuegoExpansionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoExpansionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoExpansionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
