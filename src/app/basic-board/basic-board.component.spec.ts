/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicBoardComponent } from './basic-board.component';

describe('BasicBoardComponent', () => {
  let component: BasicBoardComponent;
  let fixture: ComponentFixture<BasicBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
