import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrackService } from 'src/app/services/track.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MoisPipe } from './pipe/mois/mois.pipe';
import { PositifPipe } from './pipe/positif/positif.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentimentComponent,
    DashboardComponent,
    PositifPipe,
    MoisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,MatButtonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
