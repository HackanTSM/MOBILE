import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  styleUrls: ['./atelier.page.scss'],
})
export class AtelierPage implements OnInit {

  event : any={};

  constructor( private router: Router, private activatedRoute: ActivatedRoute)  { 
    this.activatedRoute.queryParams.subscribe(params =>{
      let navigation:any = this.router.getCurrentNavigation()?.extras.state;
      this.event = navigation.param1;

    })
  }

  ngOnInit() {
  }

}
