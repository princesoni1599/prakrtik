import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerorderlistComponent } from './customerorderlist.component';

describe('CustomerorderlistComponent', () => {
  let component: CustomerorderlistComponent;
  let fixture: ComponentFixture<CustomerorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerorderlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
