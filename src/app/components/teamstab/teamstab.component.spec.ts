import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstabComponent } from './teamstab.component';

describe('TeamstabComponent', () => {
  let component: TeamstabComponent;
  let fixture: ComponentFixture<TeamstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamstabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
