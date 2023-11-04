import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicinesComponent } from './updatemedicines.component';

describe('UpdatemedicinesComponent', () => {
  let component: UpdatemedicinesComponent;
  let fixture: ComponentFixture<UpdatemedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
