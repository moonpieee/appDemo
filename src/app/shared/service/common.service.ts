import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private data = new BehaviorSubject([]);

  constructor(
    private localStorageSVC:LocalStorageService
  ) {}

  sendData(data) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }

  deleteNote(index: number) {
    const lsData = this.localStorageSVC.get()
    lsData.splice(index, 1);
    this.sendData(lsData);
    this.localStorageSVC.set(lsData)
  }

}
