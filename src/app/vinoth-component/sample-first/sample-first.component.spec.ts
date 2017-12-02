import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SampleFirstComponent } from './sample-first.component';

describe('SampleFirstComponent', () => {
  let component: SampleFirstComponent;
  let fixture: ComponentFixture<SampleFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should call func',() => {
    component.flag=false;
    expect(component.testFunc).toHaveBeenCalled;
    expect(component.flag).not.toBeNull
    


  })
});
