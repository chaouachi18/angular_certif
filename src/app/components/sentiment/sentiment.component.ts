import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sentiment } from 'src/app/models/sentiment-models';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent {

  sentiments!: Sentiment[];
  id = "";
  description = "";
  constructor(private router: Router,
    private route: ActivatedRoute,
    public readonly trackService: TrackService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.trackService.getStockDescription(this.id).subscribe({
      next: (data) => {
        this.description = data.result.filter(item => item.displaySymbol === this.id)[0].description;
        this.trackService.getSentiment(this.id).subscribe({
          next: (data) => {
            this.sentiments = data.data;
            console.log(this.sentiments);
            this.filterSentiment();

          }
        })
      }
    })
  }

  List_mois = [(new Date().getMonth() - 2),
               (new Date().getMonth() - 1),
               (new Date().getMonth())];
  filterSentiment() {
    this.sentiments = this.sentiments.filter(x => this.List_mois.indexOf(x.month) > -1);
  }

  goBack() {
    this.router.navigate(['Dashboard']);
  }

}
