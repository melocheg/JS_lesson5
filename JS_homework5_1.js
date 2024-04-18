var property = "";
var value = "";
var myObj = {mark: "BMW",
model: "320d",
engine: "2.0 diesel", 
getInfo(){
    for (const key in this) {
        console.log(key,':',this[key]);
        }
},
newProperty(){
    myObj.type = "sedan";
}
}


myObj.getInfo();
myObj.newProperty();
console.log("After adding new property");
myObj.getInfo();
