
//This will be used in all for loops
const myJSON = '{"name":"John", "age":30, "car":"Nano"}';
const myObj = JSON.parse(myJSON);

//1. For ...in loop for iterating over json object


  for (const key in myObj) {
    console.log(key);     //output : name, age, car 
  }


//2. simple for loop  for iterating over json object   

var length = Object.keys(myObj).length;    
for(var i = 0; i < length; i++){
     console.log(`Key is  ${Object.keys(myObj)[i]} and  is ${myObj[Object.keys(myObj)[i]]}`)
}
    // Key is  name and  is John
    // Key is  age and  is 30
    // Key is  car and  is null



//3. for... of for iterating over json object  
    
let entries = Object.entries(myObj);

console.log(entries); // [["name", "John"], ["age", 30], ["car", "nano"]]
console.log(entries.length); // 3

 for(var [key, value] of Object.entries(entries)){
  console.log(key + " - " +  value); //"0 - name,John", "1 - age,30", "2 - car,nano"            
  }

//4. forEach for iterating over json object


Object.keys(myObj).forEach(key => {
  console.log(key, myObj[key]); // prints key and its value
});









