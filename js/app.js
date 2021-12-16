//Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    
    if(getscrolly >= 250){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});

//Nav
const navbtns = document.querySelector('.navbtns');
navbtns.addEventListener('click',()=>navbtns.classList.toggle('changes'));

//Banner Buttons
const banner1 = document.getElementById('banners1');
const bnns = document.querySelectorAll('.bnns');

    bnns.forEach(bnn=>{
        bnn.addEventListener('click',(e)=>{
                let datafilter = bnn.getAttribute('filter');
                
            removeactive();
            e.target.classList.add('active');

            if(datafilter === "one"){
                banner1.style.zIndex = "-1";
            }

            else if(datafilter === "two"){
                banner1.style.zIndex = "0";
            }
        });

        function removeactive(){
            bnns.forEach(bnn=>{
                bnn.classList.remove('active');
            }); 
        }
    });


//Modal Price for Model S
const modalbuttons = document.querySelectorAll('.modalbuttons');
// console.log(modalbuttons);
modalbuttons.forEach(modalbutton=>{
    modalbutton.addEventListener('click',(e)=>{
        modalremoveactive();
        e.target.classList.add('active');
    });
});

function modalremoveactive(){
    modalbuttons.forEach(modalbutton=>{
        modalbutton.classList.remove('active');
    });
}

const longrange = document.getElementById('longrange');
const plaid = document.getElementById('plaid');

let range = document.getElementById('range');
let speed = document.getElementById('speed');
let sec = document.getElementById('sec');

plaid.addEventListener('click',()=>{
    // console.log("hi");
    range.textContent = "396";
    speed.textContent = "200";
    sec.textContent = "1.99";
});

longrange.addEventListener('click',()=>{
    // console.log("hi");
    range.textContent = "405";
    speed.textContent = "155";
    sec.textContent = "3.1";
});

//change slider modelS

const lefts = document.getElementById('lefts');
const rights = document.getElementById('rights');

let slidecarosel = document.querySelector('.slide-carosel');
let slideritems = document.querySelectorAll('.slider-items')
// console.log(slideritems.length);

// console.log(rights);
let idx = 0;

lefts.addEventListener('click',()=>{
    idx--;
    changeimages();  
});

rights.addEventListener('click',()=>{
    idx++;
    changeimages();   
});

function changeimages(){
    if(idx > slideritems.length-1){
        idx = 0;
    }
    else if(idx < 0){
        idx = slideritems.length-1;
    }

    slidecarosel.style.transform = `translate(${-idx * 200}px)`;
}

// Modal Price for Model X 

const modalbuttonx = document.querySelectorAll('.modalbuttonx');
// console.log(modalbuttonx);
modalbuttonx.forEach(buttonx=>{
    buttonx.addEventListener('click',(e)=>{
        modalremoveactivex();
        e.target.classList.add('active');
    });

    function modalremoveactivex(){
        modalbuttonx.forEach(buttonx=>{
            buttonx.classList.remove('active');
        });
    }
});

const longrangex = document.querySelector('.longrangex');
const plaidx = document.querySelector('.plaidx');

let rangex = document.getElementById('rangex');
let speedx = document.getElementById('speedx');
let secx = document.getElementById('secx');

plaidx.addEventListener('click',()=>{
    // console.log("hi");
    rangex.textContent = "340";
    speedx.textContent = "163";
    secx.textContent = "2.5";
});

longrangex.addEventListener('click',()=>{
    // console.log("hi");
    rangex.textContent = "360";
    speedx.textContent = "155";
    secx.textContent = "3.8";
});

//change slider modelX

const leftx = document.getElementById('leftx');
const rightx = document.getElementById('rightx');
let slidecaroselx = document.querySelector('.slide-caroselx');
let slideritemx = document.querySelectorAll('.slider-itemx');

let idxx = 0;

leftx.addEventListener('click',()=>{
    idxx --;
    changeimagex();
});

rightx.addEventListener('click',()=>{
    idxx ++;
    changeimagex();
});

function changeimagex(){
    if(idxx > slideritemx.length-1){
        idxx = 0;
    }
    else if(idxx < 0){
        idxx = slideritemx.length -1;
    }

    slidecaroselx.style.transform = `translate(${-idxx * 400}px)`;
}

// Modal Price for Model3 

const modalbutton3 = document.querySelectorAll('.modalbutton3');
// console.log(modalbuttonx);
modalbutton3.forEach(button3=>{
    button3.addEventListener('click',(e)=>{
        modalremoveactive3();
        e.target.classList.add('active');
    });

    function modalremoveactive3(){
        modalbutton3.forEach(button3=>{
            button3.classList.remove('active');
        });
    }
});

const standard = document.getElementById('standard');
const longrange3 = document.getElementById('longrange3');
const performance = document.getElementById('performance');

let range3 = document.getElementById('range3');
let speed3 = document.getElementById('speed3');
let sec3 = document.getElementById('sec3');
// console.log(performance);

standard.addEventListener('click',()=>{
    // console.log("Hi");
    range3.textContent = "262";
    speed3.textContent = "140";
    sec3.textContent = "5.3";
});

longrange3.addEventListener('click',()=>{
    // console.log("Hi");
    range3.textContent = "353";
    speed3.textContent = "145";
    sec3.textContent = "4.2";
});

performance.addEventListener('click',()=>{
    // console.log("Hi");
    range3.textContent = "315";
    speed3.textContent = "162";
    sec3.textContent = "3.1";
});

//change slider model3
const left3 = document.getElementById('left3');
const right3 = document.getElementById('right3');
let slidecarosel3 = document.querySelector('.slide-carosel3');
let slideritem3 = document.querySelectorAll('.slider-item3');

let idx3 = 0;

left3.addEventListener('click',()=>{
    idx3 --;
    changeimage3();
});

right3.addEventListener('click',()=>{
    idx3 ++;
    changeimage3();
});

function changeimage3(){
    if(idx3 > slideritem3.length-1){
        idx3 = 0;
    }
    else if(idx3 < 0){
        idx3 = slideritem3.length -1;
    }

    slidecarosel3.style.transform = `translate(${-idx3 * 400}px)`;
}

// Modal Price for ModelY

const modalbuttony = document.querySelectorAll('.modalbuttony');
modalbuttony.forEach(buttony=>{
    buttony.addEventListener('click',(e)=>{
        modalremoveactivey();
        e.target.classList.add('active');
    });

    function modalremoveactivey(){
        modalbuttony.forEach(buttony=>{
            buttony.classList.remove('active');
        });
    }
});

const longrangey = document.getElementById('longrangey');
const performancey = document.getElementById('performancey');

let rangey = document.getElementById('rangey');
let speedy = document.getElementById('speedy');
let secy = document.getElementById('secy');
// console.log(performance);

longrangey.addEventListener('click',()=>{
    // console.log("Hi");
    rangey.textContent = "326";
    speedy.textContent = "135";
    secy.textContent = "4.8";
});

performancey.addEventListener('click',()=>{
    // console.log("Hi");
    rangey.textContent = "303";
    speedy.textContent = "155";
    secy.textContent = "3.5";
});

//change slider model3
const lefty = document.getElementById('lefty');
const righty = document.getElementById('righty');
let slidecarosely = document.querySelector('.slide-carosely');
let slideritemy = document.querySelectorAll('.slider-itemy');

let idxy = 0;

lefty.addEventListener('click',()=>{
    idxy --;
    changeimagey();
});

righty.addEventListener('click',()=>{
    idxy ++;
    changeimagey();
});

function changeimagey(){
    if(idxy > slideritemy.length-1){
        idxy = 0;
    }
    else if(idxy < 0){
        idxy = slideritemy.length -1;
    }

    slidecarosely.style.transform = `translate(${-idxy * 400}px)`;
}

// Start Accessories Modal Box X

let accprices = document.querySelector('.accprices');
let accpricesvalue = parseInt(accprices.textContent);
// console.log(accpricesvalue);

let qty = document.querySelector('.qty');
let qtyvalue = 0;
// console.log(qtyvalue);

let accresult = document.querySelector('.accresult');

let btnplus = document.querySelector('.btnplus');
let btnminus = document.querySelector('.btnminus');

// console.log(btnminus);

btnplus.addEventListener('click',()=>{
    qtyvalue ++;
    // console.log(qtyvalue);
    qty.innerText = qtyvalue;

    result();
});


btnminus.addEventListener('click',()=>{
    qtyvalue--;
    // console.log(qtyvalue);
    qty.innerText = qtyvalue;

    if(qtyvalue < 0){
        qtyvalue = 0;
    }
    result();    
});


function result(){
    let result = qtyvalue * accpricesvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
accresult.textContent = result;
}

// End Accessories Modal Box X

// Start Accessories Modal Box S

let accprices21 = document.querySelector('.accprices21');
let accprices21value = parseInt(accprices21.textContent);
// console.log(accpricesvalue);

let qty21 = document.querySelector('.qty21');
let qty21value = 0;
// console.log(qtyvalue);

let accresults21 = document.querySelector('.accresults21');

let btnplus2 = document.querySelector('.btnplus2');
let btnminus2 = document.querySelector('.btnminus2');
// console.log(btnminus);

btnplus2.addEventListener('click',()=>{
    qty21value ++;
    // console.log(qty21value);
    qty21.innerText = qty21value;

    results21();
});


btnminus2.addEventListener('click',()=>{
    qty21value--;
    // console.log(qty21value);
    qty21.innerText = qty21value;

    if(qty21value < 0){
        qty21value = 0;
    }
    results21();    
});


function results21(){
    let results21 = qty21value * accprices21value;
// console.log(qtyvalue);
// console.log(accpricesvalue);
accresults21.textContent = results21;
}

// End Accessories Modal Box X

// Start Accessories Charging

let accpricecharging = document.querySelector('.accpricecharging');
let accpricechargingvalue = parseInt(accpricecharging.textContent);
// console.log(accpricesvalue);

let qtycharging = document.querySelector('.qtycharging');
let qtychargingvalue = 0;
// console.log(qtyvalue);

let charging = document.querySelector('.charging');

let btnplus3 = document.querySelector('.btnplus3');
let btnminus3 = document.querySelector('.btnminus3');
// console.log(btnminus);

btnplus3.addEventListener('click',()=>{
    qtychargingvalue ++;
    // console.log(resultcharging);
    qtycharging.innerText = qtychargingvalue;

    resultcharging();
});


btnminus3.addEventListener('click',()=>{
    qtychargingvalue--;
    // console.log(resultcharging);
    qtycharging.innerText = qtychargingvalue;

    if(qty21value < 0){
        qty21value = 0;
    }
    resultcharging();    
});


function resultcharging(){
    let resultcharging = qtychargingvalue * accpricechargingvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
charging.textContent = resultcharging;
}

// End Accessories Charging

// Start Accessories Hitch

let accpricehitch = document.querySelector('.accpricehitch');
let accpricehitchvalue = parseInt(accpricehitch.textContent);
// console.log(accpricesvalue);

let qtyhitch = document.querySelector('.qtyhitch');
let qtyhitchvalue = 0;
// console.log(qtyvalue);

let hitch = document.querySelector('.hitch');

let btnplus4 = document.querySelector('.btnplus4');
let btnminus4 = document.querySelector('.btnminus4');
// console.log(btnminus);

btnplus4.addEventListener('click',()=>{
    qtyhitchvalue ++;
    // console.log(qtyhitchvalue);
    qtyhitch.innerText = qtyhitchvalue;

    resulthitch();
});


btnminus4.addEventListener('click',()=>{
    qtyhitchvalue--;
    // console.log(qtyhitchvalue);
    qtyhitch.innerText = qtyhitchvalue;

    if(qtyhitchvalue < 0){
        qtyhitchvalue = 0;
    }
    resulthitch();    
});


function resulthitch(){
    let resulthitch = qtyhitchvalue * accpricehitchvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
hitch.textContent = resulthitch;
}

// End Accessories Hitch

// Start roofpack

let accpriceroofpack = document.querySelector('.accpriceroofpack');
let accpriceroofpackvalue = parseInt(accpriceroofpack.textContent);
// console.log(accpricesvalue);

let qtyroofpack = document.querySelector('.qtyroofpack');
let qtyroofpackvalue = 0;
// console.log(qtyroofpack);

let roofpack = document.querySelector('.roofpack');

let btnplus5 = document.querySelector('.btnplus5');
let btnminus5 = document.querySelector('.btnminus5');
// console.log(btnminus);

btnplus5.addEventListener('click',()=>{
    qtyroofpackvalue ++;
    // console.log(qtyroofpackvalue);
    qtyroofpack.innerText = qtyroofpackvalue;

    resultroofpack();
});


btnminus5.addEventListener('click',()=>{
    qtyroofpackvalue--;
    // console.log(qtyroofpackvalue);
    qtyroofpack.innerText = qtyroofpackvalue;

    if(qtyroofpackvalue < 0){
        qtyroofpackvalue = 0;
    }
    resultroofpack();    
});


function resultroofpack(){
    let resultroofpack = qtyroofpackvalue * accpriceroofpackvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
roofpack.textContent = resultroofpack;
}

// End roofpack

// Start Phonedock

let accpricephonedock = document.querySelector('.accpricephonedock');
let accpricephonedockvalue = parseInt(accpricephonedock.textContent);
// console.log(accpricesvalue);

let qtyphonedock = document.querySelector('.qtyphonedock');
let qtyphonedockvalue = 0;
// console.log(qtyphonedock);

let phonedock = document.querySelector('.phonedock');

let btnplus6 = document.querySelector('.btnplus6');
let btnminus6 = document.querySelector('.btnminus6');
// console.log(btnminus);

btnplus6.addEventListener('click',()=>{
    qtyphonedockvalue ++;
    // console.log(qtyphonedockvalue);
    qtyphonedock.innerText = qtyphonedockvalue;

    resultphonedock();
});


btnminus6.addEventListener('click',()=>{
    qtyphonedockvalue--;
    // console.log(qtyroofpackvalue);
    qtyphonedock.innerText = qtyphonedockvalue;

    if(qtyphonedockvalue < 0){
        qtyphonedockvalue = 0;
    }
    resultphonedock();    
});


function resultphonedock(){
    let resultphonedock = qtyphonedockvalue * accpricephonedockvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
phonedock.textContent = resultphonedock;
}

// End Phonedock

// Start Keycard

let accpricekeycard = document.querySelector('.accpricekeycard');
let accpricekeycardvalue = parseInt(accpricekeycard.textContent);
// console.log(accpricesvalue);

let qtykeycard = document.querySelector('.qtykeycard');
let qtykeycardvalue = 0;
// console.log(qtykeycard);

let keycard = document.querySelector('.keycard');

let btnplus7 = document.querySelector('.btnplus7');
let btnminus7 = document.querySelector('.btnminus7');
// console.log(btnminus);

btnplus7.addEventListener('click',()=>{
    qtykeycardvalue ++;
    // console.log(qtykeycardvalue);
    qtykeycard.innerText = qtykeycardvalue;

    resultkeycard();
});


btnminus7.addEventListener('click',()=>{
    qtykeycardvalue--;
    // console.log(qtykeycardvalue);
    qtykeycard.innerText = qtykeycardvalue;

    if(qtykeycardvalue < 0){
        qtykeycardvalue = 0;
    }
    resultkeycard();    
});


function resultkeycard(){
    let resultkeycard = qtykeycardvalue * accpricekeycardvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
keycard.textContent = resultkeycard;
}

// End Keycard

// Start USB

let accpriceusb = document.querySelector('.accpriceusb');
let accpriceusbvalue = parseInt(accpriceusb.textContent);
// console.log(accpricesvalue);

let qtyusb = document.querySelector('.qtyusb');
let qtyusbvalue = 0;
// console.log(qtyusb);

let usb = document.querySelector('.usb');

let btnplus8 = document.querySelector('.btnplus8');
let btnminus8 = document.querySelector('.btnminus8');
// console.log(btnminus);

btnplus8.addEventListener('click',()=>{
    qtyusbvalue ++;
    // console.log(qtyusbvalue);
    qtyusb.innerText = qtyusbvalue;

    resultusb();
});


btnminus8.addEventListener('click',()=>{
    qtyusbvalue--;
    // console.log(qtyusbvalue);
    qtyusb.innerText = qtyusbvalue;

    if(qtyusbvalue < 0){
        qtyusbvalue = 0;
    }
    resultusb();    
});


function resultusb(){
    let resultusb = qtyusbvalue * accpriceusbvalue;
// console.log(qtyvalue);
// console.log(accpricesvalue);
usb.textContent = resultusb;
}

// End USB


// Footer 
const fullyear = new Date().getUTCFullYear();;
const year = document.getElementById('year');
year.textContent = fullyear;
