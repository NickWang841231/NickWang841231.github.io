




//圖片陣列
let phoneimgarray =[
    'iphone12normal.jpg',
    'iphone12mini.jpg',
    'white12.png',
    'black12.png',
    'blue12.png',
    'green12.png',
    'purple12.png',
    'red12.png',
    'white12mini.png',
    'black12mini.png',
    'blue12mini.png',
    'green12mini.png',
    'purple12mini.png',
    'red12mini.png',
];
//價格陣列
let pricearray = [
    'NT$26,900',
    'NT$28,500',
    'NT$32,000',
    'NT$23,900',
    'NT$25,500',
    'NT$29,000',
    'NT$26,900 起',
    'NT$23,900 起',
];
//選擇到按鈕
let white = document.querySelectorAll('button')[3];
let black = document.querySelectorAll('button')[4];
let blue = document.querySelectorAll('button')[5];
let green = document.querySelectorAll('button')[6];
let purple = document.querySelectorAll('button')[7];
let red = document.querySelectorAll('button')[8];
let mini = document.querySelectorAll('button')[1];
let normal = document.querySelectorAll('button')[2];
let gb64btn = document.querySelectorAll('button')[9];
let gb128btn = document.querySelectorAll('button')[10];
let gb256btn = document.querySelectorAll('button')[11];

//選擇到容量
let gb64 = document.getElementById('64gb');
let gb128 = document.getElementById('128gb');
let gb256 = document.getElementById('256gb');

let phoneimg = document.getElementById('container_main_pic');
let totalprice = document.getElementById('total_price');

//按按鈕時換圖片 + 價格
normal.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[0]);
    gb64.innerText = pricearray[0];
    gb128.innerText = pricearray[1];
    gb256.innerText = pricearray[2];
    totalprice.innerText = pricearray[6];
}
mini.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[1]);
    gb64.innerText = pricearray[3];
    gb128.innerText = pricearray[4];
    gb256.innerText = pricearray[5];
    totalprice.innerText = pricearray[7];
}
//設定按鈕時換圖片
white.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[2]);
}
black.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[3]);
}
blue.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[4]);
}
green.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[5]);
}
purple.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[6]);
}
red.onclick = function(){
    phoneimg.setAttribute('src',phoneimgarray[7]);
}
//設定點到容量換價格
gb64btn.onclick = function(){
    totalprice.innerText = gb64.innerText;
}
gb128btn.onclick = function(){
    totalprice.innerText = gb128.innerText;
}
gb256btn.onclick = function(){
    totalprice.innerText = gb256.innerText;
}