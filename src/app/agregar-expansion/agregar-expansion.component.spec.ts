import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExpansionComponent } from './agregar-expansion.component';

describe('AgregarExpansionComponent', () => {
  let component: AgregarExpansionComponent;
  let fixture: ComponentFixture<AgregarExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
