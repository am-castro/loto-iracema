import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from 'src/app/shared/components/general.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './results/results.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultLoteryComponent } from './shared/components/result-lotery/result-lotery.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralModule,
    FlexLayoutModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    ContactComponent,
    ResultComponent,
    ResultsComponent,
    ResultLoteryComponent,
    ToolbarComponent,
    FloatButtonComponent,
    ResultLoteryComponent,
  ]
})
export class ClientModule { }
