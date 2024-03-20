import {Component, OnInit} from '@angular/core';
import {FamilyService} from "../../../../core/services/stock/family.service";
import {FamilyModelInterface} from "../../../../core/models/family.model.interface";
import {PaginatorState} from "primeng/paginator";

@Component({
  selector: 'app-st-list-families',
  templateUrl: './st-list-families.component.html',
  styleUrls: ['./st-list-families.component.css']
})
export class StListFamiliesComponent implements OnInit {

  loadingFamilies: boolean = true;
  families: FamilyModelInterface[] = [];
  displayedFamilies: FamilyModelInterface[] = [];
  selectFamily?:FamilyModelInterface;
  showFamilyViewDrawer: boolean = false;
  showFamilyViewDrawerAs?:'update' | 'create' | 'detail'
  first: number = 0;
  rows: number = 15;

  constructor(
    private familyService: FamilyService
  ) {
  }
  ngOnInit() {
    this.familyService.getAllFamilies().then(data => {
      this.loadingFamilies = false;
      this.families = data;
      this.updateDisplayedFamilies();
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
    this.updateDisplayedFamilies();
  }

  updateDisplayedFamilies() {
    this.displayedFamilies = this.families.slice(this.first, this.first + this.rows);
  }

  onShowFamilyVieDrawer() {
    this.showFamilyViewDrawer = !this.showFamilyViewDrawer
  }
}
