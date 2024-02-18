import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoCaSourcesComponent } from './bo-ca-sources.component';

describe('BoCaSoucesComponent', () => {
  let component: BoCaSourcesComponent;
  let fixture: ComponentFixture<BoCaSourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoCaSourcesComponent]
    });
    fixture = TestBed.createComponent(BoCaSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
