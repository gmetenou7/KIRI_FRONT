import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bo-cash-situation',
  templateUrl: './bo-cash-situation.component.html',
  styleUrls: ['./bo-cash-situation.component.css']
})
export class BoCashSituationComponent implements OnInit{
  dates: Date[] | undefined;
  agencies:Array<{name: string, id:number, ca: number}> = [];
  selectedAgency: {name:string, id: number, ca:number} = {
    id: 1,
    name: "Agence de Yaoundé",
    ca: 100000000
  };

  showCloseCashSituationDrawer: boolean = false;
  showDateEventDrawer: boolean = false;
  ngOnInit() {
    this.agencies = [
      {
        id: 1,
        name: "Agence de Yaoundé",
        ca: 100000000
      },
      {
        id: 2,
        name: "Agence de Douala",
        ca: 200000000
      },
      {
        id: 3,
        name: "Agence de Dshang",
        ca: 300000000
      }
    ];
  }

  onShowCloseCashSituationDrawer() {
    this.showCloseCashSituationDrawer = !this.showCloseCashSituationDrawer
  }

  onShowDateEventDrawer() {
    this.showDateEventDrawer = !this.showDateEventDrawer
  }
}
