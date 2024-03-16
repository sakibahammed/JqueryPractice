// attributeManipulation using js

// let attribute = document.querySelector('a').getAttribute('href');
// let fb= `https://www.facebook.com/`
// attribute = fb
// console.log(attribute);


//get from jquery

let atr = $('a').attr('href')
console.log(atr);


//remove an attribute 

let removedAtr = $('a').removeAttr("href")

$('a').attr('href')


// set attribute

//jquery

$('a').attr('href','https://www.facebook.com/')
console.log('hello world');

//js

// document.querySelector('a').setAttribute('href','https://www.youtube.com/watch?v=eosp4QAbu-U&list=PLgH5QX0i9K3pSJG9Hwjnykd0hLGEsW4DB&index=4');


