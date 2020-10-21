let myHeading = document.querySelector('li');
myHeading.textContent = myHeading.textContent + 'hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bubble nebula.jpg') {
      myImage.setAttribute('src', 'images/Galaxy1.jpg');
    } else {
      myImage.setAttribute('src', 'images/Bubble nebula.jpg');
    }
}
let myButton = document.querySelector('button');
let myHead = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHead.textContent = '欢迎' + myName + '初次到来';
  }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHead.textContent = '欢迎' + storedName + '再次到来';
}

myButton.onclick = function() {
    setUserName();
}
