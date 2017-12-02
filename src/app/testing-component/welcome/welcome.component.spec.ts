import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { UserService }  from '../test-service/test-service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
   let userServiceStub: UserService;
  let userService:UserService;


 beforeEach(() => {
  // stub UserService for test purposes
  let userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
  };

  TestBed.configureTestingModule({
     declarations: [ WelcomeComponent ],
     providers:    [ {provide: UserService, useValue: userServiceStub } ]
  });

  fixture = TestBed.createComponent(WelcomeComponent);
  component    = fixture.componentInstance;

  // UserService from the root injector
     userService = TestBed.get(UserService);
     // use anyone service method
    //userService = fixture.debugElement.injector.get(UserService);



  //  get the "welcome" element by CSS selector (e.g., by class name)
  de = fixture.debugElement.query(By.css('.welcome'));
  el = de.nativeElement;
});

it('should welcome the user', () => {
  fixture.detectChanges();
  const content = el.textContent;
  expect(content).toContain('Welcome', '"Welcome ..."');
  expect(content).toContain('Test User', 'expected name');
});

//  //if service works

// it('stub object and injected UserService should not be the same', () => {
//   expect(userServiceStub === userService).toBe(false);

//   // Changing the stub object has no effect on the injected service
//   userServiceStub.isLoggedIn = false;
//   expect(userService.isLoggedIn).toBe(true);
// });


it('should welcome "Bubba"', () => {
  userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
  fixture.detectChanges();
  expect(el.textContent).toContain('Bubba');
});

it('should request login if not logged in', () => {
    userService.isLoggedIn = false; 
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });


});
