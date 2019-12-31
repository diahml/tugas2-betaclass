var myObj, x, y, z;
myObj = {
  "name":["Diah", "Martina", "Lestari"],
  "age":["15","16","17"],
  "hobby" : ["Singing","Reading Book","Watching Movie"]
};
x= myObj.name[0];
y= myObj.age[1];
z= myObj.hobby[2];

console.log ("Name = "+x);
console.log("Age = "+y + " Years Old");
console.log("Hobby = "+z)

var a ="*"
for (let i = 1; i <= 5; i++) {
    let data =[]
    for (let j = 1; j <= i; j++){
        data.push(a)
  }console.log(data.join(" "))
}

function kali (max){
for(i=1; i<=max;i++){
   
    console.log("1 x "+i+" ="+ 1*i)
    
}
}kali (10)

  
