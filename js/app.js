// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

let getDetails = document.querySelector("#details");
getDetails.addEventListener('click', seeDetails);

function seeDetails() {
    alert("Not Available in Hawaii")
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let getName1 = document.querySelector("#name1");
console.log(getName1)
getName1.addEventListener("mouseleave", showHideName1);
let getDesc = document.querySelector("#descrip1")
getName1.appendChild(getDesc)

function showHideName1() {
    if (getDesc.style.display === "block") {
        getDesc.style.display = "none"
    } else {
        getDesc.style.display = "block"
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 


let getName2 = document.querySelector("#name2");
console.log(getName2)
getName2.addEventListener("click", showHideName2);
let divDesc2 = document.createElement("div");
divDesc2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
getName2.appendChild(divDesc2)
divDesc2.style.display = "none"

function showHideName2() {
    if (divDesc2.style.display === "block") {
        divDesc2.style.display = "none"
    } else {
        divDesc2.style.display = "block"
    }
}

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let findThumbs = document.querySelectorAll(".fa-thumbs-up");
console.log(findThumbs)
console.log(findThumbs.length)
// let thumbCounter = document.createElement("div");
// thumbCounter.textContent = 0;
// findThumbs.appendChild(thumbCounter)

// let findThumbCounter = document.getElementsByClassName("thumbsUp")
// console.log(findThumbCounter)
// console.log("hello")

for (let i = 0; i < findThumbs.length; i++) {
    findThumbs[i].innerHTML = "0";
    findThumbs[i].addEventListener("click", addThumbUps)
}
console.log(findThumbs[0])

function addThumbUps() {
    this.innerHTML++    
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

let findPlus = document.getElementById("increase");
findPlus.addEventListener("click", increase);
let findAmt = document.getElementById("price4")
console.log(findAmt.childNodes)
console.log(findAmt.childNodes[0].textContent)
console.log(findAmt.childNodes[1])

console.log(typeof findAmt.childNodes[0].textContent)
console.log(typeof amt)

function increase() {
    console.log("hi")
    let amt = parseInt(findAmt.childNodes[0].textContent);
    findAmt.childNodes[0].textContent = amt + 100
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

let findMinus = document.getElementById("decrease")
console.log(findMinus)
findMinus.addEventListener("click", decreasePrice);
let findAirJordanVI = document.getElementById("price5")
console.log(findAirJordanVI.childNodes[0])

function decreasePrice() {
    let amt = parseInt(findAirJordanVI.childNodes[0].textContent)
    findAirJordanVI.childNodes[0].textContent = amt - 100
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

let findAJXI = document.querySelectorAll("img")
console.log(findAJXI[6])
findAJXI[6].addEventListener("mouseover", changePic);

function changePic() {
    if (findAJXI) {
        findAJXI[6].src = "https://stockx-360.imgix.net/Air-Jordan-11-Retro-Concord-2018/Images/Air-Jordan-11-Retro-Concord-2018/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1551743170"
    }
}

findAJXI[6].addEventListener("mouseleave", changePicBack);

function changePicBack() {
    if (findAJXI) {
        findAJXI[6].src = "https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg"
    }
}
//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.



//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.