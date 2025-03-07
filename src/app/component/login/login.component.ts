import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageServices: LocalStorageService,
    private httpService: HttpService
  ) { }

  public user = new FormControl('');
  public password = new FormControl('');

  ngOnInit() {
    this.localStorageServices.setItem('logedIn', false);
  }

  login() {

    const payload = {
      condition: {
        name: this.user.value,
        password: this.password.value,
      }
    }

    this.httpService.post('get-user', payload).subscribe((response: any) => {
      console.log('Response from server', response);

      if (response && response.data && response.data.length > 0) {
        this.localStorageServices.setItem('logedIn', true);
        this.router.navigate(['/home']);
      } else {
        alert(response.message);
      }
    })


    // console.log('User: ', this.user.value);
    // console.log('Password: ', this.password.value);
    // if(this.user.value === 'tortis' && this.password.value === '21210901'){
    //   this.localStorageServices.setItem('logedIn', true);
    //   this.router.navigate(['/home']);
    // }else{
    //   alert('User or Password incorrect');
    // }
    // return;
  }

}
