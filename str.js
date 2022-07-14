const arr =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
/*
step1:insert a-z in arr
step2:create a random number range 0-25
step3:round value
step4:use rounded value us array index
*/ 
var randomnumber = Math.floor(Math.random() * 25);
var flag =Math.floor(Math.random()*2)
console.log(flag);
if(flag==1){
    console.log(arr[randomnumber].toUpperCase());

}
else{
    console.log(arr[randomnumber]);
}