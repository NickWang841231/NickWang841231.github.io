//圖片陣列
let ipadimgarray = [
    'ipadspacegray.png',
    'ipadsilver.png',
    'ipadrosegold.png',
    'ipadgreen.png',
    'ipadskyblue.png'
];
//價格陣列
let pricearray = [
    'NT$18,900',
    'NT$23,200',
    'NT$23,900',
    'NT$28,200'
];
//選擇到按鈕
let spacegray = document.querySelectorAll('button')[1];
let sliver = document.querySelectorAll('button')[2];
let rosegold = document.querySelectorAll('button')[3];
let green = document.querySelectorAll('button')[4];
let skyblue = document.querySelectorAll('button')[5];
let gb64btn = document.querySelectorAll('button')[6];
let gb256btn = document.querySelectorAll('button')[7];
let wifi = document.querySelectorAll('button')[8];
let wifiplus = document.querySelectorAll('button')[9];

//選擇到容量
let gb64 = document.getElementById('64gb');
let gb256 = document.getElementById('256gb');

let totalprice = document.getElementById('total_price');
let padimg = document.getElementById('container_main_pic');

//按鈕 換圖片
spacegray.onclick = function(){
    padimg.setAttribute('src',ipadimgarray[0]);
}
sliver.onclick = function(){
    padimg.setAttribute('src',ipadimgarray[1]);
}
rosegold.onclick = function(){
    padimg.setAttribute('src',ipadimgarray[2]);
}
green.onclick = function(){
    padimg.setAttribute('src',ipadimgarray[3]);
}
skyblue.onclick = function(){
    padimg.setAttribute('src',ipadimgarray[4]);
}
//按鈕換容量價格
gb64btn.onclick = function(){
    totalprice.innerText = gb64.innerText;
    wifi.innerText = pricearray[0];
    wifiplus.innerText = pricearray[1];
}
gb256btn.onclick =function(){
    totalprice.innerText = gb256.innerText;
    wifi.innerText = pricearray[2];
    wifiplus.innerText = pricearray[3];
}
wifi.onclick = function(){
    totalprice.innerText = wifi.innerText;
}
wifiplus.onclick = function(){
    totalprice.innerText = wifiplus.innerText;
}