import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductlistComponent } from './updateproductlist.component';

describe('UpdateproductlistComponent', () => {
  let component: UpdateproductlistComponent;
  let fixture: ComponentFixture<UpdateproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
