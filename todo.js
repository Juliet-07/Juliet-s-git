let ol = document.createElement('ol');
let tasks = document.querySelector('#tasks');
let task = document.querySelector('input');
let adBtn = document.querySelector('#adBtn');
let clrBtn = document.querySelector('#clrBtn');
let btn;

let clrLi = function (e) {
    
    e.target.parentElement.remove()
};

let crtTsk = function () {
    btn = document.createElement('button');
    btn.addEventListener('click',clrLi)
    let p = document.createElement('p');
    let li = document.createElement('li');
    li.appendChild(p);
    li.appendChild(btn);
    p.textContent = task.value;
    btn.textContent ='X';
    ol.appendChild(li);
    tasks.appendChild(ol);
};


adBtn.addEventListener('click',crtTsk);

let clrTsk = function () {
    document.querySelector('ol').innerHTML = "";
};
clrBtn.addEventListener('click',clrTsk);

