import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { ProviderModelInterface } from 'src/app/core/models/provider.model.interface';
import { ProvidersService } from 'src/app/core/services/providers.service';

@Component({
  selector: 'app-st-list-providers',
  templateUrl: './st-list-providers.component.html',
  styleUrls: ['./st-list-providers.component.css']
})
export class StListProvidersComponent implements OnInit {
  loadingProviders: boolean = true;
  providers: ProviderModelInterface[] = [];
  displayedProviders: ProviderModelInterface[] = [];
  selectedProvider?: ProviderModelInterface;
  showProviderViewDrawer: boolean = false;
  showProviderViewDrawerAs?: 'update' | 'create' | 'detail'
  first: number = 0;
  rows: number = 15;

  constructor(
    private providerService: ProvidersService
  ) {
  }
  ngOnInit() {
    this.providerService.getAllProviders().then(data => {
      this.loadingProviders = false;
      this.providers = data;
      this.updateDisplayedProviders();
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
    this.updateDisplayedProviders();
  }

  updateDisplayedProviders() {
    this.displayedProviders = this.providers.slice(this.first, this.first + this.rows);
  }

  onShowProviderVieDrawer() {
    this.showProviderViewDrawer = !this.showProviderViewDrawer
  }
}
