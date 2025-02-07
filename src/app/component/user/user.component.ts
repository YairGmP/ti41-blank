import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent  implements OnInit {

  public title: string = 'User Component';
  public calcTitle: string = 'Calc Component 👌👌👌👌';
  public isAdmin: boolean = false;
  public isAlertOpen: boolean = false;
  public alertButtons: string[] = ['Yes', 'No'];
  public alertMessage: string = '';
  public amount: number = 1345.24;
  public todayIs: Date = new Date();


  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {}

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  handleEvent(event: string){
    this.alertMessage = event;
    this.isAlertOpen = !this.isAlertOpen;
  }

  loginOut(){
    this.localStorageService.setItem('logedIn', false);
    this.router.navigate(['/login']);
  }

}
