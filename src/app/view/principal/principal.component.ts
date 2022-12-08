import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectTo(redirect: string){
    let element: any;
    if(redirect=='boloes'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element = document.getElementById("linhaTopo");
        element.scrollIntoView({behavior: "smooth"});
      }, 500);
    }else if(redirect=='resultados'){
      this.route.navigate(['resultados']);
    }else if(redirect=='sobre'){
      this.route.navigate(['home']);
      setTimeout(()=>{
        element = document.getElementById("about");
        element.scrollIntoView({behavior: "smooth"});
      }, 500);
    }
  }

}
