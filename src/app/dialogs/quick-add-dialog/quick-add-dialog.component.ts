import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-quick-add-dialog',
  templateUrl: './quick-add-dialog.component.html',
  styleUrls: ['./quick-add-dialog.component.css']
})
export class QuickAddDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
