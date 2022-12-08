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
    if(redirect=='boloes'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element.scrollY = 0;
        // element = document.getElementById("boloes");
        // element.scrollIntoView({behavior: "smooth"}) - window.innerHeight/2;
        // let y = window.scrollY - window.innerHeight/2;
        // window.scroll(0, y);
      }, 500);
    }else if(redirect=='resultados'){
      this.route.navigate(['resultados']);
    }else if(redirect=='sobre'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element = document.getElementById("about");
        element.scrollIntoView({behavior: "smooth"});
      }, 500);
      let y = window.scrollY - window.innerHeight/2;
      window.scroll(0, y);
    }else if(redirect=='contato'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element = document.getElementById("contact");
        element.scrollIntoView({behavior: "smooth"})
      }, 500);
    }else if(redirect=='footer'){
      setTimeout(()=>{
        element = document.getElementById("footer");
        element.scrollIntoView({behavior: "smooth"})
      }, 500);
    }
  }
}
