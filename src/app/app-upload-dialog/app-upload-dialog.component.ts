import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-upload-dialog',
  templateUrl: './app-upload-dialog.component.html',
  styleUrls: ['./app-upload-dialog.component.scss']
})
export class AppUploadDialogComponent implements OnInit {
  file: File;
  imageSrc: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {file: File}) {
    this.file = data.file;
  }

  ngOnInit(): void {
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.file);
    }, 2000)
  }

}
