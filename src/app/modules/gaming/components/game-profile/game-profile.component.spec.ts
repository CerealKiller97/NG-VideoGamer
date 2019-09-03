import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileComponent } from './game-profile.component';

describe('GameProfileComponent', () => {
  let component: GameProfileComponent;
  let fixture: ComponentFixture<GameProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
