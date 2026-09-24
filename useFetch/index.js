// // console.log("hii");

// const container=document.getElementById('container');
// console.log(container)
// const button=document.getElementById('btn')
// console.log(button)

// const h2=document.getElementById('data');
// const loader=document.getElementById('loader');

// async function fetchData(){
//     try{ 
//         loader.innerHTML='fatching data...';
//     const serverData=await fetch('https://fakestoreapi.com/products')
//     const jsonData=await serverData.json();
//     // console.log(jsonData[1].title)
//     // h2.innerHTML=jsonData[1].title;
//     let table=`<table border=2px>
//       ${
// jsonData.map((ele)=>{
//       `<tr>
//       <td>
//       <img src=${ele.image} width=200px height=200px></img>
//       </td>
//       <td>${ele.title}</td>
//       <td>${ele.price}</td>
//       <td>${ele.description}</td>
//       </tr>`
//     })
// }
// </table>`
//  h2.innerHTML=table;
//     }catch(e){
//         console.log("error is"+e)
//         loader.innerHTML='error in fatching data'+e;
//     }
//     finally{
//         loader.innerHTML='';
//     }
// }
// button.addEventListener("click",fetchData);
const container = document.getElementById("container");

console.log(container);
const button = document.getElementById("btn");
console.log(button);
const h2 = document.getElementById("data");
const loader = document.getElementById("loader");

async function fetchData() {
    try {
        loader.innerHTML = "Fetching data..";
        const serverData = await fetch("https://fakestoreapi.com/products");
        const JSONData = await serverData.json();
        let table = `<table border="1">
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
            </tr>

            ${
                JSONData.map((ele) => `
                    <tr>
                        <td>
                            <img src="${ele.image}" height="200px" width="200px">
                        </td>
                        <td>${ele.title}</td>
                        <td>${ele.price}</td>
                        <td>${ele.description}</td>
                    </tr>
                `).join("")
            }
        </table>`;
        container.innerHTML = table;
    } catch (e) {
        console.log("Error is: " + e);
        loader.innerHTML = "Error is: " + e;
    } finally {
        loader.innerHTML = "";
    }
}
button.addEventListener("click", fetchData);