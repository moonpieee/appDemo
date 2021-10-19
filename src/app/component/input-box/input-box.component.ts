import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/service/common.service';
import { ERRORS } from 'src/app/shared/constant/constants';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  notesForm: FormGroup;
  errorMessages = { 
    'required': ERRORS.MESSAGE_REQUIRED ,
    'minlength': ERRORS.MESSAGE_MIN_LENGTH ,
    'maxlength': ERRORS.MESSAGE_MAX_LENGTH 
  }
  constructor(
    private commonSVC: CommonService,
    private localStorageSVC:LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.notesForm = new FormGroup({
      noteTag: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(140),
        ]))
    });
  }

  get formControlNoteTag() {
    return this.notesForm.get('noteTag');
  }

  submitNote() {
    const note = {
      message: this.notesForm.controls.noteTag.value,
      createdOn: new Date().toLocaleDateString()
    }
    const lsData = this.localStorageSVC.get();
    lsData.push(note)
    this.localStorageSVC.set(lsData)
    this.commonSVC.sendData(lsData)
    this.notesForm.reset();
  }

}
