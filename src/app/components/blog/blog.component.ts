import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  articlsTab: any = [
    {
      id: 1,
      description: 'rmd',
      title: 'pirez',
      date: 1902,
      img: 'assets/image2/img1.jpg',
    },
    {
      id: 2,
      description: 'fcb',
      title: 'laporta',
      date: 1905,
      img: 'assets/image2/img 2.jpg',
    },
    {
      id: 3,
      description: 'mil',
      title: 'italy',
      date: 1910,
      img: 'assets/image2/img3.jpg',
    },
    {
      id: 3,
      description: 'psg',
      title: 'france',
      date: 1910,
      img: 'assets/image2/img3.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
