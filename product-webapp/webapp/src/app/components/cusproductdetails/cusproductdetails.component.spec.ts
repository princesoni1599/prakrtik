import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusproductdetailsComponent } from './cusproductdetails.component';

describe('CusproductdetailsComponent', () => {
  let component: CusproductdetailsComponent;
  let fixture: ComponentFixture<CusproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusproductdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
