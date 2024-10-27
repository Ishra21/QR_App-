

///////////////////////// Quote App

// let heading = document.querySelector("h1")
// let author = document.querySelector("p")
// let button = document.querySelector("button")

// const fetchQuote =  async() =>{
//     const response = await fetch("http://quotable.io/random")
//     const data = await response.json();
//     // console.log(data)
//     // console.log(response);
//     heading.innerText = data.content
//     author.innerText = data.author
// };
// fetchQuote();
// button.addEventListener("click", fetchQuote)

// setInterval(() => {
//     fetchQuote()
// }, 15000);

// /////////////// QR generator
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example


let form = document.querySelector("form")
let input = document.querySelector("input")
let img = document.querySelector("img")
let select = document.querySelector("select")
let card1 = document.querySelector("card1")

// Create the download function
// document.getElementById('downloadBtn').addEventListener('click', function() {
//     // Create a link element
//     const link = document.createElement('a');
    
//     // Set the URL of the file you want to download
//     link.href = 'path/to/your/file.txt'; // This can be a path to a local file or a remote file
    
//     // Set the download attribute with the desired file name
//     link.download = 'file.txt'; // The name of the file after download
    
//     // Programmatically trigger the download
//     link.click();
// });


const fetchQr = async (e) =>{
e.preventDefault()
const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`);
img.src = res.url;


let downloadbtn = document.querySelector("button");
downloadbtn.innerText = "Download"
card1.appendChild(downloadbtn)

// console.log(downloadbtn)

document.getElementById('downloadBtn').addEventListener('click', function() {

    const link = document.createElement('a');

    const img = document.getElementById('qrImage');
    link.href = img.src; 
    link.download = 'qr.png';
    link.click();
});

form.reset();
}


form.addEventListener("submit", fetchQr)