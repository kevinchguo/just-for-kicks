// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

let getDetails = document.querySelector("#details");
getDetails.addEventListener('click', seeDetails);

function seeDetails() {
    alert("Not Available in Hawaii")
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let getName1 = document.querySelector("#name1");
console.log(getName1)
getName1.addEventListener("mouseover", showHideName1);
let getDesc = document.querySelector("#descrip1")

function showHideName1() {
    getName1.appendChild(getDesc)
    if (getDesc.style.display === "block") {
        getDesc.style.display = "none"
    } else {
        getDesc.style.display = "block"
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

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

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
