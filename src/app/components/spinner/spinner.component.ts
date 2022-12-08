import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="pre" *ngIf="isSpinnerVisible">
        <div class="spin">
          <div class=loto-spinner></div>
        </div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible: boolean = false;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.isSpinnerVisible = true;
        } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
            this.isSpinnerVisible = false;
        }
    }, () => {
        this.isSpinnerVisible = false;
    });
}

ngOnDestroy(): void {
    this.isSpinnerVisible = false;
}

}
