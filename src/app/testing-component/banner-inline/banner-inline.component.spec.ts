import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerInlineComponent } from './banner-inline.component';

describe('BannerInlineComponent', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

  });

   
 it('no title in the DOM until manually call `detectChanges`', () => {
  expect(el.textContent).toEqual('');
});

it('should display original title', () => {
  fixture.detectChanges();
  expect(el.textContent).toContain(component.title);
});

it('should display a different test title', () => {
  component.title = 'Test Title';
  fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});


});
