import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Description_Stock  } from 'src/app/models/dashboard-models';
import { data_Stock } from 'src/app/models/dashboard-models';
import { data_Sentiment } from '../models/sentiment-models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  constructor(
    private readonly http: HttpClient) { }

    dernier = formatDate( new Date(new Date().getFullYear(), new Date().getMonth(), 1),'YYYY-MM-dd','en-US' ); 
    premier = formatDate( new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1),'YYYY-MM-dd','en-US' );

  getStockDescription(id: string): Observable<Description_Stock > {
    return this.http.get<Description_Stock >("https://finnhub.io/api/v1/search?q=" + id + "&token=bu4f8kn48v6uehqi3cqg")
      .pipe(map(description => {
        return description
      }))
  }
  getStock(id: string): Observable<data_Stock> {
    return this.http.get<data_Stock>("https://finnhub.io/api/v1/quote?symbol=" + id + "&token=bu4f8kn48v6uehqi3cqg")
      .pipe(map(data => {
        return data

      }))
  }  

  getSentiment(stock: string): Observable<data_Sentiment> {
    return this.http.get<data_Sentiment>("https://finnhub.io/api/v1/stock/insider-sentiment?symbol=" + stock + "&from=" + this.premier + "&to=" + this.dernier + "&token=bu4f8kn48v6uehqi3cqg")
      .pipe(map(data => {
        return data
      }))

  }
}
