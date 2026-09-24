// console.log("hello");
const root = document.getElementById('root');
const button = document.getElementById('btn');
// console.log(button);
// console.log(root);
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const img = document.createElement('img');
function getData() {
    try{

    img.src='';
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);
    

    h2.innerHTML = "ABES Engineering college";
    h2.style.color = "red";
    h2.style.backgroundColor = "cyan";
    h1.innerHTML = "<h2 style='color: green;'>Welcome to DOM</h2>";
    dic.style.border='  2px solid red';

    dic.appendChild(img);
    dic.appendChild(h2);
    dic.appendChild(h1);
    root.appendChild(dic);

    }catch(e){
    console.log(e);
}
finally{
    root.removeChild(button);
}
}

button.addEventListener('click', getData);