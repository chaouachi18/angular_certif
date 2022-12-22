import { Component } from '@angular/core';
import { Description_Stock, Stock } from 'src/app/models/dashboard-models';
import { Router } from '@angular/router';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  stocks: Array<Stock> = [];
  List_stock: Array<string> = [];
  Input = '';
  
  constructor(
    public readonly trackService: TrackService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.List_stock = JSON.parse(localStorage.getItem("List_stock")!);
    
    if (this.List_stock) {
      this.List_stock.forEach((stock) => this.getStock(stock));
    }
  
  }

  getStock(stock: string) {
    let trac : Description_Stock ;
    this.trackService.getStockDescription(stock).subscribe({
      next: (data) => {
        
        stock_trac.description = data.result.filter(obj => obj.displaySymbol === stock)[0]?.description;
        stock_trac.symbol = data.result.filter(obj => obj.symbol === stock)[0]?.symbol;
        }
        //console.log(stock_trac.description);
      
    })
    let stock_trac =new Stock ;
    this.trackService.getStock(stock).subscribe({
      next: (data) => {
        stock_trac.data = data;
        if(stock_trac.data.c == 0){
          this.List_stock = this.List_stock.filter(i => i !== stock_trac.symbol);       
    
        }else{
          this.stocks.push(stock_trac);            
        }            
      }
    });
  }

  goStock(stock: string) {
    this.List_stock = this.List_stock || [];    
    this.getStock(stock);
    this.List_stock.push(stock);
    localStorage.setItem("List_stock", JSON.stringify(this.List_stock));    
    this.Input = '';
  }

  RemoveStock(stock: Stock) {
 
    this.List_stock = this.List_stock.filter(i => i !== stock.symbol);  
    localStorage.setItem("List_stock", JSON.stringify(this.List_stock));
    this.stocks = this.stocks.filter(i => i !== stock);
    //console.log(this.List_stock)
  }

  SentimentStock(id: string) {
    this.router.navigate(['/sentiment', id]);
  }
}


