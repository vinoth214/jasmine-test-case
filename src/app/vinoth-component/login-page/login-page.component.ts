  import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent,InitParams } from 'ngx-facebook';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FacebookService,public router: Router) {
    console.log('Initializing Facebook');

    fb.init({
      appId: '1927971220769787',
      version: 'v2.9'
    });


 
  //   fb.init(initParams);
  //     this.fb.api('somepath')
  // .then(res => console.log(res))
  // .catch(e => console.log(e));
  

   }

  ngOnInit() {
  }


// login() {
//     this.fb.login()
//       .then((res: LoginResponse) => {
//         this.router.navigate(['dashBoard']);
//         console.log('Logged in', res);

//       })
//       .catch(this.handleError);
//   }



// loginWithOptions() {
    login() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        this.router.navigate(['dashBoard']);
        console.log('Logged in', res);
      })
      .catch(this.handleError);

  }


  private handleError(error) {
    console.error('Error processing action', error);
  }
  

}
