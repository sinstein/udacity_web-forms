/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
  if(firstPasswordInput.value.length < 16) {
    firstPasswordInput.setCustomValidity("Should be atleast 16 characters");
  }
  else if (firstPasswordInput.value.length > 100 ) {
    firstPasswordInput.setCustomValidity("Should be less than 100 characters");
  }
  else if(!firstPasswordInput.value.match('[\!\@\#\$\%\^\&\*]')) {
    firstPasswordInput.setCustomValidity("Should contain one symbol");
  }
  else if(!firstPasswordInput.value.match('[0-9]')) {
    firstPasswordInput.setCustomValidity("Should contain one number");
  }
  else if(!firstPasswordInput.value.match('[a-z]')) {
    firstPasswordInput.setCustomValidity("Should contain one lowercase character");
  }
  else if(!firstPasswordInput.value.match('[A-Z]')) {
    firstPasswordInput.setCustomValidity("Should contain one uppercase character");
  }
  else if(firstPasswordInput.value.match('[^A-z0-9\!\@\#\$\%\^\&\*]')) {
    firstPasswordInput.setCustomValidity("illegal charcter. Should contain only letters, numbers and ! @ # $ % ^ & *");
  }
  else if(firstPasswordInput.value != secondPasswordInput.value) {
    secondPasswordInput.setCustomValidity("Both passwords should match");
  }
  else {
    firstPasswordInput.setCustomValidity("");
    secondPasswordInput.setCustomValidity("");
  }
};