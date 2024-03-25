import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { VariantModalInterface } from 'src/app/core/models/variant.model.interface';

@Component({
  selector: 'app-st-variant-view',
  templateUrl: './st-variant-view.component.html',
  styleUrls: ['./st-variant-view.component.css']
})
export class StVariantViewComponent implements OnInit, OnDestroy {

  @Input("drawerVisible") variantViewStateDrawer: boolean = false;
  @Output("onDrawerClose") drawerClose: EventEmitter<any> = new EventEmitter<any>();
  @Input("useAs") useDrawerAs?: 'update' | 'create' | 'detail';
  @Input("variant") selectedVariant?: VariantModalInterface;

  variants?: string[]


  ngOnInit(): void {
    this.variants = this.selectedVariant?.variants
  }
  ngOnDestroy(): void {

  }

  onDrawerHide() {
    this.drawerClose.emit()
  }
}
