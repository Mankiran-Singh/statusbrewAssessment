import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPicker1Component } from './color-picker1.component';

describe('ColorPicker1Component', () => {
  let component: ColorPicker1Component;
  let fixture: ComponentFixture<ColorPicker1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPicker1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPicker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
