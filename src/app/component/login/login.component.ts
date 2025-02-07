import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent  implements OnInit {

  constructor(
    private router: Router,
    private localStorageServices: LocalStorageService
  ) {

   }

  public user = new FormControl('');

  public password = new FormControl('');

  ngOnInit() {
    this.localStorageServices.setItem('logedIn', false);
  }

  login(){
    console.log('User: ', this.user.value);
    console.log('Password: ', this.password.value);
    if(this.user.value === 'admin' && this.password.value === 'Admin123'){
      this.localStorageServices.setItem('logedIn', true);
      this.router.navigate(['/home']);
    }else{
      alert('User or Password incorrect');
    }
    // return;
  }

}
