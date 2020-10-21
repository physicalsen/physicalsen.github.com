
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
