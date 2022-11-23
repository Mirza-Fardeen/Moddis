import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  insightLogo: string = `./assets/images/insight_log.jpg`;
  constructor() { }

  ngOnInit(): void {
  }

}
