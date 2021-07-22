//圖片陣列
macimgarray = [
    'macsilver.jpg',
    'macgold.jpg',
    'macspacegray.jpg'
]

macpricearray = [
    'NT$36,900',
    'NT$42,900',
    'NT$54,900'
]

let gpu7 = document.querySelectorAll('button')[1];

let gpu7price = document.getElementById('gpu7');

let silver = document.querySelectorAll('button')[2];
let gold = document.querySelectorAll('button')[3];
let spacegray = document.querySelectorAll('button')[4];

let gb512 = document.querySelectorAll('button')[6];
let tb1 = document.querySelectorAll('button')[7];
let tb2 = document.querySelectorAll('button')[8];


let totalprice = document.getElementById('total_price');
let macimg = document.getElementById('container_main_pic');

gpu7.onclick = function () {
    totalprice.innerText = gpu7price.innerText;
}

silver.onclick = function () {
    macimg.setAttribute('src' , macimgarray[0]);
}
gold.onclick = function () {
    macimg.setAttribute('src' , macimgarray[1]);
}
spacegray.onclick = function () {
    macimg.setAttribute('src' , macimgarray[2]);
}

gb512.onclick = function () {
    totalprice.innerText = macpricearray[0];
}
tb1.onclick = function () {
    totalprice.innerText = macpricearray[1];
}
tb2.onclick = function () {
    totalprice.innerText = macpricearray[2];
}