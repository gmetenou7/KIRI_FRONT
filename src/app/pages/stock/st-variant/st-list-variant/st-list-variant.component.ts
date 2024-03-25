import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { VariantModalInterface } from 'src/app/core/models/variant.model.interface';
import { VariantService } from 'src/app/core/services/stock/variant.service';

@Component({
  selector: 'app-st-list-variant',
  templateUrl: './st-list-variant.component.html',
  styleUrls: ['./st-list-variant.component.css']
})
export class StListVariantComponent implements OnInit {
  loadingVariants: boolean = true;
  variants: VariantModalInterface[] = [];
  displayedVariants: VariantModalInterface[] = [];
  selectedVariant?: VariantModalInterface;
  showVariantViewDrawer: boolean = false;
  showVariantViewDrawerAs?: 'update' | 'create' | 'detail'
  first: number = 0;
  rows: number = 15;

  constructor(
    private variantService: VariantService
  ) { }

  ngOnInit(): void {
    this.variantService.getAllVariants().then(data => {
      this.loadingVariants = false;
      this.variants = data;
      this.updateDisplayedVariants();
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
    this.updateDisplayedVariants();
  }

  updateDisplayedVariants() {
    this.displayedVariants = this.variants.slice(this.first, this.first + this.rows);
  }

  onShowVariantVieDrawer() {
    this.showVariantViewDrawer = !this.showVariantViewDrawer
  }


}
