import { CanActivateFn, Route, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const localStorageServices = new LocalStorageService();
  const router = new Router();

  console.log('login status --->' , localStorageServices.getItem('logedIn'))

  if(localStorageServices.getItem('logedIn')){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }

};
