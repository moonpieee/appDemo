import { ChangeDetectionStrategy,Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class TagListComponent implements OnInit {

  @Input() listOfNotes: any;
  isNotEmpty;

  constructor(
    private commonSVC: CommonService,
  ) { }

  ngOnChanges(){
    this.checkIfTagListIsNotEmpty();
  }

  ngOnInit(): void {}

  checkIfTagListIsNotEmpty() {
    this.isNotEmpty = (this.listOfNotes.length > 0);
  }

  deleteNote(index) {
    this.commonSVC.deleteNote(index)
  }

}
