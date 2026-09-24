// console.log('ReactDOM is loaded');
const container = document.getElementById('root');
// console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2', {style: {color: 'red', backgroundColor: 'black'}}, 'welcome to React!');
const h1 = React.createElement('h1', {}, "ABES engineering college");
const img=React.createElement('img', {src: '', style: {height: '200px', width: '200px', borderRadius: '50px'}},);
const div= React.createElement('div', {style: {border:'2px solid red'}}, img,h1, h2);
//JSX
const div1=<div><h2>Welcome to JSXX</h2></div>
root.render(div);

