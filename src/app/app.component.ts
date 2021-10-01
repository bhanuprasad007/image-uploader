import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppUploadDialogComponent } from './app-upload-dialog/app-upload-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  onSelect(event: any) {
    this.dialog.open(AppUploadDialogComponent, {
      data: {file: event.addedFiles[0]},
      width: '600px'
    });
  }
}
