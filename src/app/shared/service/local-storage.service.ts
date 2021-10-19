import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  STORAGE_KEY = 'NOTES';
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(): any {
    return JSON.parse(this.localStorage.getItem(this.STORAGE_KEY));
  }

  set(value: any): any {
    this.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }

  remove(key: string): any {
    this.localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

}
