type Person = {
 
    id:string,
    name:string,
    city:string
}
 
let data3 :Person[]=
[{id:"E201",name:"mitali",city:"Hyderabad"},
 {id:"E202",name:"Vishal",city:"Pune"},
 {id:"E203",name:"Sachin",city:"Mumbai"}]
 
 data.forEach(item=>console.log(`${item.id} ${item.name} ${item.city} `))