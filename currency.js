class Currency{
   
   static async doMath(value,from,to){
       const mainUrl="https://api.exchangeratesapi.io/latest?base=";
       

        let rate= await fetch(mainUrl+from)
        .then((response)=>{return response.json();})
        .then((data)=>{ return (data.rates)[to] });

        UI.changeIt(value*rate);

        
   } 
  
   
}

