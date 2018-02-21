import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  color:string = "green";
  constructor(public route:ActivatedRoute) {
    this.route.params.subscribe( p => {
      this.color = p.color;
    });
  }

  ngOnInit() {
  }

}
