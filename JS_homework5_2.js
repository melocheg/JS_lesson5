var priceSum = 1;
var priceMin = 1;
var priceMax = 1;

var services = {

	"стрижка": "60 грн",

	"гоління": "80 грн",

	"Миття голови": "100 грн",

    price(){
        var prices = Object.values(this);
        for(let i = 0; i , i < prices.length; i++){
            if(typeof(prices[i]) === "string"){
            let tempp = prices[i].replace(" грн", "");
            priceSum += Number.parseInt(tempp);
            }
        }
        return (priceSum + " грн");
    },
    minPrice(){
        var objArray = Object.values(this);
        var prices= [];
        for(let i = 0; i < objArray.length - 1; i++){
            if(typeof(objArray[i]) === "string"){
                prices.push(objArray[i]);
                do{
                    let temp = prices[i].replace(" грн", "");
                    priceMin = Number.parseInt(temp);
                }while(prices[i] < priceMin)
            }
        return priceMin;
    }
},
    maxPrice(){
        var objArray = Object.values(this);
        var prices= [];
        for(let i = 0; i < objArray.length - 1; i++){
            if(typeof(objArray[i]) === "string"){
                prices.push(objArray[i]);
            }
        }
        for(let j = 0; j < prices.length - 1; j++){
                    let temp = prices[j].replace(" грн", "");
                    if(priceMax < Number.parseInt(temp))
                    priceMax = Number.parseInt(temp);
            }
        return priceMax;
    },
};
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());

services['Розбите скло'] = "200 грн";


console.log(services.maxPrice());