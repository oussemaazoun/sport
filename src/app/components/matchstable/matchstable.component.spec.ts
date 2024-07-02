import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchstableComponent } from './matchstable.component';

describe('MatchstableComponent', () => {
  let component: MatchstableComponent;
  let fixture: ComponentFixture<MatchstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchstableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
