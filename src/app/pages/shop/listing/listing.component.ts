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
  @Input() name = 'Chubby Stick';
  @Input() price = 19.99;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openQuickAdd() {
    const dialog = this.dialog.open(QuickAddDialogComponent, {
      height: '500px',
      width: '600px',
      data: {
        name: this.name,
        price: this.price
      }
    });
  }

  getBackgroundColor() {
    if (this.type === 'sale') {
      return '#9c275b';
    }
    return 'white';
  }

  getTextColor() {
    if (this.type === 'sale') {
      return 'white';
    }
    return 'black';
  }
}
