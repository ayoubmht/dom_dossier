//1

let h1 = document.getElementsByTagName('h1')[1]

console.log(h1.innerHTML);

//2

let li = document.getElementsByTagName('li')[3]
console.log(li.innerText);


//3

console.log(document.getElementsByTagName('p')[0].innerText.toUpperCase());

//4

[...document.getElementsByTagName('li')].forEach(element => {
    console.log(element.innerText.toUpperCase());
})


for (let lm of document.getElementsByTagName('li') ) {
    console.log(lm.innerText.toUpperCase())
}