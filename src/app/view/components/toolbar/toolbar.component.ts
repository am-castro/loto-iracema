import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectTo(redirect: string){
    let element: any;
    if(redirect=='about'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element = document.getElementById("about");
        element.scrollIntoView({behavior: "smooth"})
      }, 500);
    }
    if(redirect=='contact'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element = document.getElementById("contact");
        element.scrollIntoView({behavior: "smooth"})
      }, 500);
    }
  }
}
