import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-bo-announcement',
  templateUrl: './bo-announcement.component.html',
  styleUrls: ['./bo-announcement.component.css']
})
export class BoAnnouncementComponent implements OnInit{
  items: MenuItem[] = [];
  showCreateModal: boolean = false
  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {label: 'Voir', icon: 'pi pi-fw pi-eye'},
          {label: 'Modfier', icon: 'pi pi-fw pi-file-edit'},
          {label: 'Supprimer', icon: 'pi pi-fw pi-trash'}
        ]
      }];
  }
}
