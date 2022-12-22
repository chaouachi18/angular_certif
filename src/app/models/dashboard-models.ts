export class Stock{    
    symbol!: string;
    description!: String;
    data!:{
      c: number;
      d: number;
      dp: number;
      h: number;
      l: number;
      o: number;
      pc: number;
      t:number;
      
    };
    

}
export interface Description_Stock {
    count: number;
    result:[ {
      description: string;
      displaySymbol: string;
      symbol: string;
      type: string;
    }];
  
  }

  export interface data_Stock {
   
    c: number;
    d: number;
    dp: number;
    h: number;
    l: number;
    o: number;
    pc: number;
    t:number;
  
  }