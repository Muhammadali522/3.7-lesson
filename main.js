let fruits = ["Apple", " Banana ", " Gilos", " Shaftoli"];

let fruitsCount = fruits.length;

alert(`Длина array ${fruitsCount}`);

let userAnswer = confirm("Хотите ли вы убрать инфармацию в Array")

console.log(fruits);

if(userAnswer == true){
    fruits.pop();
    alert(`Arrayning uzunligi: ${fruits.length}`);
    alert(fruits);
    console.log(fruits);
}else{
    alert(`Arrayning uzunligi: ${fruits.length}`);
    alert(fruits);
    console.log(fruits);
}