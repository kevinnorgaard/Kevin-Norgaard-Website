import {Component, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {QuickAddDialogComponent} from '../../../dialogs/quick-add-dialog/quick-add-dialog.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() type: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openQuickAdd() {
    const dialog = this.dialog.open(QuickAddDialogComponent, {
      height: '400px',
      width: '600px'
    });
  }

  getBackgroundColor() {
    if (this.type === 'sale') {
      return '#ffe6e6';
    }
    return 'white';
  }
}
