import { Component, OnInit } from '@angular/core';
import { Carousel } from '../models/models.model';

@Component({
  selector: 'app-au-auth-layout',
  templateUrl: './au-auth-layout.component.html',
  styleUrls: ['./au-auth-layout.component.css']
})
export class AuAuthLayoutComponent implements OnInit {

  corousels: Carousel[] = [];
  responsiveOptions: any[] | undefined;


  constructor() { }

  ngOnInit(): void {


    this.corousels = [
      {
        src: 'https://source.unsplash.com/random/800x600',
        alt: 'Random first slide',
        header: 'First slide label',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        src: 'https://source.unsplash.com/random/800x600',
        alt: 'Random second slide',
        header: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        src: 'https://source.unsplash.com/random/800x600',
        alt: 'Random third slide',
        header: 'Third slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      },
      {
        src: 'https://source.unsplash.com/random/800x600',
        alt: 'Random fourth slide',
        header: 'Fourth slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      },
      {
        src: 'https://source.unsplash.com/random/800x600',
        alt: 'Random fifth slide',
        header: 'Fifth slide label',
        text:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }
}
