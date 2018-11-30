import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddDialogComponent } from './quick-add-dialog.component';

describe('QuickAddDialogComponent', () => {
  let component: QuickAddDialogComponent;
  let fixture: ComponentFixture<QuickAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
