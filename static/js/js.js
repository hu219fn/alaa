let up = document.getElementById('up');
let down = document.getElementById('down');
let ul_sections = document.getElementById('ul-sections');

up.style.display = 'block';
down.style.display = 'none';
ul_sections.style.display = 'none';

up.onclick = ()=>{
    up.style.display = 'none';
    down.style.display = 'block';
    ul_sections.style.display = 'block';
}
down.onclick = ()=>{
    up.style.display = 'block';
    down.style.display = 'none';
    ul_sections.style.display = 'none';
}
////
let up1 = document.getElementById('up1');
let down1 = document.getElementById('down1');
let ul_sections1 = document.getElementById('ul-sections1');

up1.style.display = 'block';
down1.style.display = 'none';
ul_sections1.style.display = 'none';

up1.onclick = ()=>{
    up1.style.display = 'none';
    down1.style.display = 'block';
    ul_sections1.style.display = 'block';
}
down1.onclick = ()=>{
    up1.style.display = 'block';
    down1.style.display = 'none';
    ul_sections1.style.display = 'none';
}

////
let up2 = document.getElementById('up2');
let down2 = document.getElementById('down2');
let ul_sections2 = document.getElementById('ul-sections2');

up2.style.display = 'block';
down2.style.display = 'none';
ul_sections2.style.display = 'none';

up2.onclick = ()=>{
    up2.style.display = 'none';
    down2.style.display = 'block';
    ul_sections2.style.display = 'block';
}
down2.onclick = ()=>{
    up2.style.display = 'block';
    down2.style.display = 'none';
    ul_sections2.style.display = 'none';
}
////

let up0 = document.getElementById('up0');
let down0 = document.getElementById('down0');
let ul_sections0 = document.getElementById('ul-sections0');

up0.style.display = 'block';
down0.style.display = 'none';
ul_sections0.style.display = 'none';

up0.onclick = ()=>{
    up0.style.display = 'none';
    down0.style.display = 'block';
    ul_sections0.style.display = 'block';
}
down0.onclick = ()=>{
    up0.style.display = 'block';
    down0.style.display = 'none';
    ul_sections0.style.display = 'none';
}

////

let menu = document.getElementById('menu');
let ul_display = document.getElementById('ul-display');
let icons = [...document.getElementsByClassName('icons')];
menu.onclick = ()=>{
    if (ul_display.style.display == 'block'){
        icons.forEach(icon=>()=>{
            icon.style.display = 'none';
        })
        ul_display.style.display = 'none';
    }else {
        ul_display.style.display = 'block';
    }
}

////

let menu1 = document.getElementById('menu1');
let ul_display1 = document.getElementById('ul-display1');
let icons1 = [...document.getElementsByClassName('icons')];
menu1.onclick = ()=>{
    if (ul_display1.style.display == 'block'){
        ul_display1.style.display = 'none';
    }else {
        ul_display1.style.display = 'block';
    }
}

////
let lang = document.getElementById('lang');
let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
let footer1 = document.getElementById('footer1');
let footer2 = document.getElementById('footer2');
try {
    let price1 = document.getElementById('price1');
    let price2 = document.getElementById('price2');
    let atc1 = document.getElementById('atc1');
    let atc2 = document.getElementById('atc2');
    let count1 = document.getElementById('count1');
    let count2 = document.getElementById('count2');
    price2.style.display = 'none';
    atc2.style.display = 'none';
    count2.style.display = 'none';
}catch(err){
    console.log(' ');
}
try {
    let h1_order1 = document.getElementById('h1-order1');
    let h1_order2 = document.getElementById('h1-order2');
    let price_en = document.getElementById('redirect-to-insta-en');
    let price_ar = document.getElementById('redirect-to-insta-ar');
    let total_en = document.getElementById('total-en');
    let total_ar = document.getElementById('total-ar');
    h1_order2.style.display = 'none';
    price_ar.style.display = 'none';
    total_ar.style.display = 'none';
}catch(err){
    console.log(' ');
}
try {
    let h11 = [...document.getElementsByClassName('h11')]
    let h12 = [...document.getElementsByClassName('h12')]
    h12.forEach(h2=>
        h2.style.display = 'none'
    )
}catch {
    console.log(' ');
}
try {
    let management1 = document.getElementById('management1');
    let management2 = document.getElementById('management2');
    management2.style.display = 'none';
}catch(err){
    console.log(' ');
}
try {
    let en = document.getElementById('en');
    let ar = document.getElementById('ar');
    ar.style.display = 'none';
}catch(err){
    console.log(' ');
}
try{
    let en1 = document.getElementById('en1');
    let ar1 = document.getElementById('ar1');
    ar1.style.display = 'none';
}catch(err){
    console.log(' ');
}
    
nav2.style.display = 'none';
footer2.style.display = 'none';

/////
try {
    let title = document.getElementById('title').innerHTML;
    let mhh1 = document.getElementById('mhh1');
    mhh1.innerHTML = 'Users who requested \"' + title + '\"';
}catch(err){
    console.log(' ');
}

function changeLanguage(){
    if(nav1.style.display == 'block') {
        nav1.style.display = 'none'; 
        nav2.style.display = 'block'; 
        document.body.style.direction = 'rtl';
        footer1.style.display = 'none';
        footer2.style.display = 'grid';
        try {
            price1.style.display = 'none';
            price2.style.display = 'block';
            atc1.style.display = 'none';
            atc2.style.display = 'block';
            count1.style.display = 'none';
            count2.style.display = 'block';
        }catch(err){
            console.log(' ');
        }
        try {
            let h1_order1 = document.getElementById('h1-order1');
            let h1_order2 = document.getElementById('h1-order2');
            let price_en = document.getElementById('redirect-to-insta-en');
            let price_ar = document.getElementById('redirect-to-insta-ar');
            let total_en = document.getElementById('total-en');
            let total_ar = document.getElementById('total-ar');
            h1_order1.style.display = 'none';
            h1_order2.style.display = 'block';
            price_en.style.display = 'none';
            price_ar.style.display = 'block';
            total_en.style.display = 'none';
            total_ar.style.display = 'block';
        }catch(err){
            console.log(' ');
        }
        try {
            let h11 = [...document.getElementsByClassName('h11')]
            let h12 = [...document.getElementsByClassName('h12')]
            h11.forEach(h1=>
                h1.style.display = 'none'
            )
            h12.forEach(h2=>
                h2.style.display = 'block'
            )
        }catch {
            console.log(' ');
        }
        try {
            let management1 = document.getElementById('management1');
            let management2 = document.getElementById('management2');
            management1.style.display = 'none';
            management2.style.display = 'block';
        }catch(err){
            console.log(' ');
        }
        try {
            let en = document.getElementById('en');
            let ar = document.getElementById('ar');
            en.style.display = 'none';
            ar.style.display = 'block';
        }catch(err){
            console.log(' ');
        }try{
            let en1 = document.getElementById('en1');
            let ar1 = document.getElementById('ar1');
            en1.style.display = 'none';
            ar1.style.display = 'block';
        }catch(err){
            console.log(' ');
        }
        /////
        try {
            let title = document.getElementById('title').innerHTML;
            let mhh1 = document.getElementById('mhh1');
            mhh1.innerHTML = 'المستخدمين الذين طلبوا \"' + title + '\"';
        }catch(err){
            console.log(' ');
        }
    }else {
        nav1.style.display = 'block';
        nav2.style.display = 'none'; 
        document.body.style.direction = 'ltr';
        footer1.style.display = 'grid';
        footer1.style.zIndex = '2';
        footer2.style.display = 'none';
        footer2.style.zIndex = '-2';
        try {
            price1.style.display = 'block';
            price2.style.display = 'none';
            atc1.style.display = 'block';
            atc2.style.display = 'none';
            count1.style.display = 'block';
            count2.style.display = 'none';
        }catch(err){
            console.log(' ');
        }
        try {
            let h1_order1 = document.getElementById('h1-order1');
            let h1_order2 = document.getElementById('h1-order2');
            let price_en = document.getElementById('redirect-to-insta-en');
            let price_ar = document.getElementById('redirect-to-insta-ar');
            let total_en = document.getElementById('total-en');
            let total_ar = document.getElementById('total-ar');
            h1_order1.style.display = 'block';
            h1_order2.style.display = 'none';
            price_en.style.display = 'block';
            price_ar.style.display = 'none';
            total_en.style.display = 'block';
            total_ar.style.display = 'none';
        }catch(err){
            console.log(' ');
        }
        try {
            let h11 = [...document.getElementsByClassName('h11')]
            let h12 = [...document.getElementsByClassName('h12')]
            h11.forEach(h1=>
                h1.style.display = 'block'
            )
            h12.forEach(h2=>
                h2.style.display = 'none'
            )
        }catch {
            console.log(' ');
        }
        try {
            let management1 = document.getElementById('management1');
            let management2 = document.getElementById('management2');
            management1.style.display = 'block';
            management2.style.display = 'none';
        }catch(err){
            console.log(' ');
        }
        try {
            let en = document.getElementById('en');
            let ar = document.getElementById('ar');
            en.style.display = 'block';
            ar.style.display = 'none';
        }catch(err){
            console.log(' ');
        }try {
            let en1 = document.getElementById('en1');
            let ar1 = document.getElementById('ar1');
            en1.style.display = 'block';
            ar1.style.display = 'none';
        }catch(err){
            console.log(' ');
        }
        /////
        try {
            let title = document.getElementById('title').innerHTML;
            let mhh1 = document.getElementById('mhh1');
            mhh1.innerHTML = 'Users who requested \"' + title + '\"';
        }catch(err){
            console.log(' ');
        }
    }
}

//////
try {
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let num = document.getElementById('count');
    
    minus.onclick = ()=>{
        var number = +num.value;
        if(number > 1) {
            var number0 = number - 1;
            num.value = number0;
        }
    }
    plus.onclick = ()=>{
        var number = +num.value;
        var number0 = number + 1;
        num.value = number0;
    }
}catch(err){
    console.log(' ');
}

//////
try {
    let b = [...document.getElementsByClassName('b')];
    let result = 0;
    b.forEach(order=>
        result += +order.innerHTML
    )
    document.getElementById('total').innerHTML = result + ' IRQ';
}catch {
    console.log(' ');
}