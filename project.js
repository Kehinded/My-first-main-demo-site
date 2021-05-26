     
// event on load
document.addEventListener('DOMContentLoaded', function(){
  // alert('yes')
  setTimeout(function(){ document.querySelector('.notify-box').style.display = 'block';}, 22000);

  setTimeout(function(){ document.querySelector('.notify-box').style.display = 'none';}, 30000);
});
// notify message
document.querySelector('.notification-box-2').addEventListener('click', function(){
  document.querySelector('.notify-box').classList.add('display-pop-msg');
  
   setTimeout(function(){ document.querySelector('.notify-box').classList.remove('display-pop-msg');}, 8000);
})

//menu bar function to remove/ add side bar and to give content full length

document.querySelector(".header__icon-1-box").addEventListener('click', function(e){
    e.preventDefault();

    document.querySelector('.sidebar').classList.toggle('display-remove');
    document.querySelector('.header__owner-box').classList.toggle('display-remove');
})

// main page changes
document.querySelector('.sidebar__item-1').addEventListener('click', function(e){
    e.preventDefault();
   document.querySelector('.sidebar__item-1').classList.add('active-link');
   document.querySelector('.sidebar__item-3').classList.remove('active-link');
   document.querySelector('.sidebar__item-4').classList.remove('active-link');
   document.querySelector('.sidebar__item-5').classList.remove('active-link');
   document.querySelector('.sidebar__item-2').classList.remove('active-link');

   document.querySelector('.main-1').style.display = "block";
   document.querySelector('.main-2').style.display = "none";
   document.querySelector('.main-3').style.display = "none";
   document.querySelector('.main-4').style.display = "none";
})

document.querySelector('.sidebar__item-2').addEventListener('click', function(e){
    e.preventDefault();
   document.querySelector('.sidebar__item-1').classList.remove('active-link');
   document.querySelector('.sidebar__item-3').classList.remove('active-link');
   document.querySelector('.sidebar__item-4').classList.remove('active-link');
   document.querySelector('.sidebar__item-5').classList.remove('active-link');
   document.querySelector('.sidebar__item-2').classList.add('active-link');
   
   document.querySelector('.main-1').style.display = "none";
   document.querySelector('.main-2').style.display = "block";
   document.querySelector('.main-3').style.display = "none";
   document.querySelector('.main-4').style.display = "none";
   
})

document.querySelector('.sidebar__item-3').addEventListener('click', function(e){
    e.preventDefault();
   document.querySelector('.sidebar__item-1').classList.remove('active-link');
   document.querySelector('.sidebar__item-3').classList.add('active-link');
   document.querySelector('.sidebar__item-4').classList.remove('active-link');
   document.querySelector('.sidebar__item-5').classList.remove('active-link');
   document.querySelector('.sidebar__item-2').classList.remove('active-link');

   document.querySelector('.main-1').style.display = "none";
   document.querySelector('.main-2').style.display = "none";
   document.querySelector('.main-3').style.display = "block";
   document.querySelector('.main-4').style.display = "none";
})

document.querySelector('.sidebar__item-4').addEventListener('click', function(e){
    e.preventDefault();
   document.querySelector('.sidebar__item-1').classList.remove('active-link');
   document.querySelector('.sidebar__item-3').classList.remove('active-link');
   document.querySelector('.sidebar__item-4').classList.add('active-link');
   document.querySelector('.sidebar__item-5').classList.remove('active-link');
   document.querySelector('.sidebar__item-2').classList.remove('active-link');

   document.querySelector('.main-1').style.display = "none";
   document.querySelector('.main-2').style.display = "none";
   document.querySelector('.main-3').style.display = "none";
   document.querySelector('.main-4').style.display = "block";
})

document.querySelector('.sidebar__item-5').addEventListener('click', function(e){
    e.preventDefault();

   document.querySelector('.about-us-box').classList.toggle('about-us-show');
   document.querySelector('.cover-wrapper').classList.toggle('about-us-show');
})

document.querySelector('.about-us-cancel').addEventListener('click', function(e){
  e.preventDefault();

 document.querySelector('.about-us-box').classList.toggle('about-us-show');
 document.querySelector('.cover-wrapper').classList.toggle('about-us-show');
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// booking list show control
document.querySelector('.notification-box-1').addEventListener('click', function(){

  document.querySelector('.booking-box').classList.toggle('booking-show');
})
document.querySelector('.booking-cancel').addEventListener('click', function(){

  document.querySelector('.booking-box').classList.remove('booking-show');
})

// book list part

let chickenAmt, vegetableAmt, fishAmt, cattleAmt, regularAmt, silverAmt, goldAmt, platinumAmt;
chickenAmt = 2500;
vegetableAmt = 4500;
fishAmt = 5500;
cattleAmt = 120000;
regularAmt = 25000;
silverAmt = 75000;
goldAmt = 125000;
platinumAmt = 250000;
var itemNo = 0;
var chickenNum = 0;
var vegetableNum = 0;
var fishNum = 0;
var cattleNum = 0;
var regularNum = 0;
var silverNum = 0;
var goldNum = 0;
var platinumNum = 0;
var totalAmount = 0;
if(totalAmount === 0){
  document.querySelector('.form-button-clear').disabled = true;
  document.querySelector('.form-button-submit').disabled = true;
}

// event listener for all 8 cards
document.querySelector('.like-icon-1').addEventListener('click', function(e){
  addItemNumber();
    chickenNum += 1;
  showMessageAddItem(`${chickenNum} chicken(s) added to list`, '.item-1', '.farm-card-1', 'red');
  
  var current = getTime();
   createItemInBookList('chicken', chickenAmt, current.time, itemNo);
   calculateTotalAmount(chickenAmt);
})
document.querySelector('.like-icon-2').addEventListener('click', function(e){
  addItemNumber();
  vegetableNum += 1;
  showMessageAddItem(`${vegetableNum} vegetable(s) added to list`, '.item-2', '.farm-card-2', 'red');

  var current = getTime();
   createItemInBookList('vegetable', vegetableAmt, current.time, itemNo);
   calculateTotalAmount(vegetableAmt);
})
document.querySelector('.like-icon-3').addEventListener('click', function(e){
  addItemNumber();
  fishNum += 1;
  showMessageAddItem(`${fishNum} fish(es) added to list`, '.item-3', '.farm-card-3', 'red');
  var current = getTime();
   createItemInBookList('fish', fishAmt, current.time, itemNo);
   calculateTotalAmount(fishAmt);
})
document.querySelector('.like-icon-4').addEventListener('click', function(e){
  addItemNumber();
  cattleNum += 1;
  showMessageAddItem(`${cattleNum} cattle(s) added to list`, '.item-4', '.farm-card-4', 'red');
  var current = getTime();
   createItemInBookList('cattle', cattleAmt, current.time, itemNo);
   calculateTotalAmount(cattleAmt);
})
document.querySelector('.like-icon-5').addEventListener('click', function(e){
  addItemNumber();
  regularNum += 1;
  showMessageAddItem(`${regularNum} regular ticket(s) added to list`, '.card-side-2a', '.airport-card-1', 'red');
  var current = getTime();
   createItemInBookList('regular-ticket', regularAmt, current.time, itemNo);
   calculateTotalAmount(regularAmt);
})
document.querySelector('.like-icon-6').addEventListener('click', function(e){
  addItemNumber();
  silverNum += 1;
  showMessageAddItem(`${silverNum} silver ticket(s) added to list`, '.card-side-2b', '.airport-card-2', 'red');
  var current = getTime();
   createItemInBookList('silver-ticket', silverAmt, current.time, itemNo);
   calculateTotalAmount(silverAmt);
})
document.querySelector('.like-icon-7').addEventListener('click', function(e){
  addItemNumber();
  goldNum += 1;
  showMessageAddItem(`${goldNum} gold ticket(s) added to list`, '.card-side-2c', '.airport-card-3', 'black');
  var current = getTime();
   createItemInBookList('gold-ticket', goldAmt, current.time, itemNo);
   calculateTotalAmount(goldAmt);
})
document.querySelector('.like-icon-8').addEventListener('click', function(e){
  addItemNumber();
  platinumNum += 1;
  showMessageAddItem(`${platinumNum} platinum ticket(s) added to list`, '.card-side-2d', '.airport-card-4', 'white');
  var current = getTime();
   createItemInBookList('platinum-ticket', platinumAmt, current.time, itemNo);
   calculateTotalAmount(platinumAmt);
})
// end of event listener for all 8 cards
// event listener for list submission
document.querySelector('.form-button-submit').addEventListener('click', function(e){
  e.preventDefault();
  var userFirstName = document.querySelector('.form-input-name-1');
  var userLastName = document.querySelector('.form-input-name-2');
  var userEmail = document.querySelector('.form-input-email');
  var userNumber = document.querySelector('.form-input-number');
  var userFirstNameVal = document.querySelector('.form-input-name-1').value;
  var userLastNameVal = document.querySelector('.form-input-name-2').value;
  var userEmailVal = document.querySelector('.form-input-email').value;
  var userNumberVal = document.querySelector('.form-input-number').value;
  // invalid submission
  if(userFirstNameVal === '' || userLastNameVal === '' || userEmailVal === '' || userNumberVal === ''){

    if(userFirstNameVal === ''){userFirstName.classList.toggle('border-red');};
    if(userLastNameVal === ''){userLastName.classList.toggle('border-red');};
    if(userEmailVal === ''){userEmail.classList.toggle('border-red');};
    if(userNumberVal === ''){userNumber.classList.toggle('border-red');};
     showMessageSubmitinvalid('PLEASE INPUT ALL REQUIRED FIELDS');
    setTimeout(function(){
      userFirstName.classList.remove('border-red');
      userLastName.classList.remove('border-red');
      userEmail.classList.remove('border-red');
      userNumber.classList.remove('border-red');
    }, 7000);
  }
// success submission
  else{
     //submission start
       document.querySelector('.loader-img').style.display = 'block';
       document.querySelector('.book-list-form').style.display = 'none';
       clearListItems('LIST SUBMITING');
      //  submission end
       setTimeout(function(){ 
        document.querySelector('.loader-img').style.display = 'none';
        document.querySelector('.book-list-form').style.display = 'block';
        userEmail.value = '';
        userNumber.value = '';
        userLastName.value = '';
        userFirstName.value = '';
         document.querySelector('.booking-body').innerHTML = '';
         clearListItems('LIST SUBMITTED')
         showMessageSubmit(`HELLO!!!  ${userFirstNameVal} ${userLastNameVal} we got your list order, other processing required details will be sent to '${userEmailVal}' or "${userNumberVal}" THANK YOU`)
        }, 5000);
  }
})
// event for delete row
document.querySelector('.booking-table').addEventListener('click', function(e){
  var itemId = e.target.parentElement.id;
  deleteRow(itemId);
})
//  event listener for clear all
document.querySelector('.form-button-clear').addEventListener('click', function(e){
  e.preventDefault();
  clearListItems('ALL ITEM(S) CLEARED');
})

// function add item number
function addItemNumber(){
  document.querySelector('.form-button-clear').disabled = false;
document.querySelector('.form-button-submit').disabled = false;
  itemNo += 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
}
// get time
 function getTime(){
  var now, day, date, month, year, minute, hour, time;

  now = new Date();
  day = now.getDay();
  date = now.getDate();
  month = now.getUTCMonth();
  year = now.getFullYear();
  minute = now.getMinutes();
  hour = now.getHours();
  time = `${date}/${month + 1}/${year} at ${hour}:${minute}`;
  return{time}
 }

//  function show message for item add to list
function showMessageAddItem(msg, parentClass, childClass, color){
  
  var parent = document.querySelector(parentClass);
  var child = document.querySelector(childClass);
  var message = document.createElement('div');
  message.className = 'msg-book-pop message-book';
  message.style.color = color;
  message.appendChild(document.createTextNode(msg));
  parent.insertBefore(message, child);
  setTimeout(function(){document.querySelector('.msg-book-pop').remove();}, 4000)
}

// create item in booking list

 function createItemInBookList(des, amount, date, itemNo){
   
   var tableBody = document.querySelector('.booking-body');
   var row = document.createElement('tr');
   row.className = `table-row`;
   row.setAttribute('id', `booking-row-${itemNo}-${des}`);
   row.innerHTML = `
   <tr>
       <td>${des}</td>
       <td>${formatNum(amount)}</td>
       <td>${date}</td>
       <td class="item-cancel">&times;</td>
   </tr>
   `;
     tableBody.appendChild(row);
 }
//  function calculate total amount
 function calculateTotalAmount(amount){
   totalAmount += amount;
   document.querySelector('.total-amount-value').textContent = formatNum(totalAmount);
 }

//  delet row , subtract totalamount, subtract items
function deleteRow(id){
  var element = document.getElementById(id);
  element.parentElement.removeChild(element);
  
  var idSplit = id.split('-');
  var tableWord = idSplit[0];
  var rowWord = idSplit[1];
  var numWord = idSplit[2];
  var desWord = idSplit[3];
  var ticketWord = idSplit[4];

  if(desWord === 'cattle'){
    cattleNum -= 1;
    totalAmount -= cattleAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'chicken'){
    chickenNum -= 1;
    totalAmount -= chickenAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'fish'){
    fishNum -= 1;
    totalAmount -= fishAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'vegetable'){
    vegetableNum -= 1;
    totalAmount -= vegetableAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'regular'){
    regularNum -= 1;
    totalAmount -= regularAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'silver'){
    silverNum -= 1;
    totalAmount -= silverAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'gold'){
    goldNum -= 1;
    totalAmount -= goldAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };
  if(desWord === 'platinum'){
    platinumNum -= 1;
    totalAmount -= platinumAmt;
    itemNo -= 1;
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  };

  document.querySelector('.total-amount-value').textContent = formatNum(totalAmount);
  if(totalAmount === 0){
    document.querySelector('.total-amount-value').textContent = 'ALL ITEM(S) REMOVED';
    document.querySelector('.form-button-clear').disabled = true;
    document.querySelector('.form-button-submit').disabled = true;
  }
}
// clear list function
function clearListItems(msg){
   itemNo = 0;
 chickenNum = 0;
 vegetableNum = 0;
 fishNum = 0;
 cattleNum = 0;
 regularNum = 0;
 silverNum = 0;
 goldNum = 0;
 platinumNum = 0;
 totalAmount = 0;
  document.querySelector('.total-amount-value').textContent = msg;
  document.querySelector('.booking-body').textContent = '';
  var itemNum = document.querySelector('.item-no');
  itemNum.textContent = itemNo ;
  if(totalAmount === 0){
    document.querySelector('.form-button-clear').disabled = true;
    document.querySelector('.form-button-submit').disabled = true;
  }
}
// function format number to cash like
function formatNum(value){
  var num = Math.abs(value);
  num = num.toFixed(2);
  numSplit = num.split('.');
  int = numSplit[0];
  dec = numSplit[1];
  if(int.length > 3){
    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
  }
  return `# ${int}.${dec}`;
}
// function show message submit
function showMessageSubmitinvalid(msg){
  var parent = document.querySelector('.form-submit-msg');
  var child = document.createElement('div');
  child.className = 'booking-message-invalid';
  child.appendChild(document.createTextNode(msg));
  parent.appendChild(child);
   
  setTimeout(function(){document.querySelector('.booking-message-invalid').remove();}, 5000);
}
function showMessageSubmit(msg){
  var parent = document.querySelector('.form-submit-msg');
  var child = document.createElement('div');
  child.className = 'booking-message-invalid';
  child.style.color = 'green';
  child.appendChild(document.createTextNode(msg));
  parent.appendChild(child);
   
  setTimeout(function(){document.querySelector('.booking-message-invalid').remove();}, 60000);
}
