import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent {
  @Input() type: string;

  constructor() { }

  getBackgroundColor() {
    if (this.type === 'sale') {
      return 'none';
    }
    return 'white';
  }

  listingSize() {
    const n = 10;
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
}
