import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { FamilyModelInterface } from 'src/app/core/models/family.model.interface';
import { FamilyService } from 'src/app/core/services/stock/family.service';

@Component({
  selector: 'app-lo-list',
  templateUrl: './lo-list.component.html',
  styleUrls: ['./lo-list.component.css']
})
export class LoListComponent {
  loadingFamilies: boolean = true;
  families: FamilyModelInterface[] = [];
  displayedFamilies: FamilyModelInterface[] = [];
  selectSubFamily?: FamilyModelInterface;
  showSubFamilyViewDrawer: boolean = false;
  showSubFamilyViewDrawerAs?: 'update' | 'create' | 'detail'
  first: number = 0;
  rows: number = 12;

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

  onShowSubFamilyVieDrawer() {
    this.showSubFamilyViewDrawer = !this.showSubFamilyViewDrawer
  }
}
