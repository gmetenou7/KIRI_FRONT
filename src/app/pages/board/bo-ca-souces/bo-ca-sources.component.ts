import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bo-ca-souces',
  templateUrl: './bo-ca-sources.component.html',
  styleUrls: ['./bo-ca-sources.component.css']
})
export class BoCaSourcesComponent implements OnInit{
  dates: Date[] | undefined;
  showSourceDetailDrawer: boolean = false
  ngOnInit() {

  }

  onShowDetailDrawer() {
    this.showSourceDetailDrawer = !this.showSourceDetailDrawer
  }
}
