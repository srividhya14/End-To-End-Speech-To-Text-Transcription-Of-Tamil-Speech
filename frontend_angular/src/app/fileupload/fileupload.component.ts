import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  @ViewChild('fileUpload')
  set fileUploadRef(val: ElementRef) {
    if (val) {
      console.log(val);
    }
  }
  showLoadingSymbol : boolean = false;
  ct = -1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLoading() {
    this.ct++;
    console.log('ct: ' + this.ct);
    if (this.ct % 2) {
      this.showLoadingSymbol = !this.showLoadingSymbol;
      this.ct = 0;
    }
  }
}
