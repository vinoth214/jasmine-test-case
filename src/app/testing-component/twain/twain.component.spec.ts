import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { TwainComponent } from './twain.component';
import {Observable} from 'rxjs/Rx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TwainService }  from '../test-service/twain-service';

class MockQuoteService {
  public quote: string = 'Test quote';

   getQuote() {
    return new Promise<string>((resolve, reject) => {
      resolve(this.quote);
    });
  }
}



describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
   let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       declarations: [ TwainComponent ],
       providers:    [  { provide: TwainService, useClass: MockQuoteService } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('Should get quote', fakeAsync(() => {
    fixture.componentInstance.getQuote();
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').innerText).toEqual('Test quote');
  }));


});
