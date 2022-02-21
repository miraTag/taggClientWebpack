
import Icon from '../img/img.png';
import Notes from './data/data.csv';
import yaml from './data/data.yaml'; //swagger
import json from './data/data.json5';
import printMe from './print.js';


console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'hi web';
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);

    console.log(Notes);

    btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


    return element;
  }
  
  document.body.appendChild(component());