import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-bo-announcement',
  templateUrl: './bo-announcement.component.html',
  styleUrls: ['./bo-announcement.component.css']
})
export class BoAnnouncementComponent implements OnInit {
  items: MenuItem[] = [];
  showDetailsDrawer: boolean = false
  showUpdateDrawer: boolean = false
  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Voir',
            icon: 'pi pi-fw pi-eye',
            command: () => {
              this.openViewMoreDrawer();
            }
          },
          {
            label: 'Modfier',
            icon: 'pi pi-fw pi-file-edit',
            command: () => {
              this.openUpdateDrawer()
            }
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-trash',
            command: () => {
              this.deleteAnnouncement()
            }
          }
        ]
      }];
  }

  openViewMoreDrawer() {
    this.showDetailsDrawer = !this.showDetailsDrawer
  }

  openUpdateDrawer() {
    this.showUpdateDrawer = !this.showUpdateDrawer
  }

  deleteAnnouncement() {
    console.log("deleteAnnouncement")
  }
}
