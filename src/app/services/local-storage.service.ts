import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any{
    let item =  localStorage.getItem(key);
    item = item ? JSON.parse(item) : null;
    return item;
  }

}
