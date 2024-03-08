import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-sh-notfount',
  templateUrl: './sh-notfount.component.html',
  styleUrls: ['./sh-notfount.component.css']
})
export class ShNotFountComponent {

  private history: string[] = [];

  constructor(
    private router: Router,
    private location: Location
  ) {
  }

  onRouterBack() {
    this.location.back()
  }

}
