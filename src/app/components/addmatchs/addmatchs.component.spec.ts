import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatchsComponent } from './addmatchs.component';

describe('AddmatchsComponent', () => {
  let component: AddmatchsComponent;
  let fixture: ComponentFixture<AddmatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmatchsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
