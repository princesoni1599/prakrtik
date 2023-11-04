import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerhomepageComponent } from './sellerhomepage.component';

describe('SellerhomepageComponent', () => {
  let component: SellerhomepageComponent;
  let fixture: ComponentFixture<SellerhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
