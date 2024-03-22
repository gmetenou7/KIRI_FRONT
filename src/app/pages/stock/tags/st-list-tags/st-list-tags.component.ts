import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { TagsModelInterface } from 'src/app/core/models/tags.model.interface';
import { TagsService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-st-list-tags',
  templateUrl: './st-list-tags.component.html',
  styleUrls: ['./st-list-tags.component.css']
})
export class StListTagsComponent implements OnInit {
  loadingTags: boolean = true;
  tags: TagsModelInterface[] = [];
  displayedTags: TagsModelInterface[] = [];
  selectedTag?: TagsModelInterface;
  showTagViewDrawer: boolean = false;
  showTagViewDrawerAs?: 'update' | 'create' | 'detail'
  first: number = 0;
  rows: number = 15;

  constructor(
    private familyService: TagsService
  ) {
  }
  ngOnInit() {
    this.familyService.getAllTags().then(data => {
      this.loadingTags = false;
      this.tags = data;
      this.updateDisplayedTags();
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
    this.updateDisplayedTags();
  }

  updateDisplayedTags() {
    this.displayedTags = this.tags.slice(this.first, this.first + this.rows);
  }

  onShowTagVieDrawer() {
    this.showTagViewDrawer = !this.showTagViewDrawer
  }
}
