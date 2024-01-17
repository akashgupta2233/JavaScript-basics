// --1 For Loop
let a = 97;
for(let i=0; i<6; i++){
  a=a+i;
  console.log(String.fromCharCode(a), " ");
}

// --2 For In Loop
const object ={property: ".length" , method: ".toUpperCase" , operator: "delete"}
for(key in object){
  console.log(key +" ");  // property method operator
}

//  --3 For Of Loop
const dictionary=[20, 30, 40 ,50, 60]
for(key of dictionary){
  console.log(key);  // 20 30 40 50 60
}
