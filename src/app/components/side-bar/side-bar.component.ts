import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @ViewChild('side') sideBar!: ElementRef;
  @ViewChild('show') show!: ElementRef;
  @ViewChild('hide') hide!: ElementRef;
  constructor() {}
  showSide() {
    this.sideBar.nativeElement.style.width = '250px';
    this.show.nativeElement.style.display = 'none';
    this.hide.nativeElement.style.display = 'block';
  }
  hideSide() {
    this.sideBar.nativeElement.style.width = '0px';
    this.hide.nativeElement.style.display = 'none';
    this.show.nativeElement.style.display = 'block';
  }
}
