import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonService } from './shared/service/common.service';
import { LocalStorageService } from './shared/service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent {
  notes = [];

  constructor(
    private commonSVC: CommonService,
    private localStorageSVC:LocalStorageService
  ) { }

  ngOnInit(): void {
    this.safeCheckForKeyIsPresentInLocalStorageOrNot();
    this.getDataFromLocalStorage();
    this.getAllNotes();
  }

  getAllNotes() {
    this.commonSVC.getData().subscribe((data) => {
      this.notes = data;
    }, (error) => {
      this.notes = [];
    })
  }

  getDataFromLocalStorage(){
     const lsData = this.localStorageSVC.get();
     if(lsData){
       this.notes = lsData;
     }
     this.commonSVC.sendData(lsData);
  }

  safeCheckForKeyIsPresentInLocalStorageOrNot(){
    const lsData = this.localStorageSVC.get();
    if(lsData === null){
      this.localStorageSVC.set([]);
    }
  }

}
