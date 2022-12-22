export class Sentiment{
    symbol!: string;
    month!: number;
    change!: number;
    mspr!: number;
  }

  export interface data_Sentiment {
    data: [{
      change: number;
      month: number;
      mspr: number;
      symbol: string;
      year: number;
    }];
    symbol: string;
  
  }