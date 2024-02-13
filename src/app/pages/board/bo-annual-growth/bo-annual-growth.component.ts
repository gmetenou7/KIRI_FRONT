import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-bo-annual-growth',
  templateUrl: './bo-annual-growth.component.html',
  styleUrls: ['./bo-annual-growth.component.css']
})
export class BoAnnualGrowthComponent implements OnInit{
  years: Array<number> = [];
  agencies:Array<{name: string, id:number, ca: number}> = []
  selectedYear: number = 2024;
  selectedAgency: {name:string, id: number, ca:number} = {
    id: 1,
    name: "Agence de Yaoundé",
    ca: 100000000
  };

  circleChartData: any;
  circleChartOption: any;

  lineChartData: any;
  lineChartOption: any;
  constructor() {
  }

  ngOnInit() {
    this.years = this.getYearsUntil(2000);
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
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.circleChartData = {
      labels: this.agencies.map((agency) => {return agency.name}),
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.circleChartOption = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };

    const lineDocumentStyle = getComputedStyle(document.documentElement);
    const lineTextColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: this.agencies[0].name,
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--blue-500')
        },
        {
          label: this.agencies[1].name,
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--teal-500')
        },
        {
          label: this.agencies[2].name,
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)'
        }
      ]
    };

    this.lineChartOption = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }

  getYearsUntil(year:number) {
    let currentYear = new Date().getFullYear();
    let yearsArray = [];
    for (let i = currentYear; i >= year; i--) {
      yearsArray.push(i);
    }
    return yearsArray;
  }
}
