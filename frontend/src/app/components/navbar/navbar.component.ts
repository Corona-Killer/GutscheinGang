import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/NavLink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: NavLink[] = [
    {
      text: 'Home',
      link: '/home'
    },
    {
      text: 'About',
      link: '/about'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
