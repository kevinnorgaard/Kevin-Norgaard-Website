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

  incrementor(n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    console.log(JSON.parse(JSON.stringify(arr)));
    return arr;
  }
}
