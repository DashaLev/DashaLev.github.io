// add to card
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".addtocart");

for(let i = 0; i < addToCartButtons.length;i++ ) {
    addToCartButtons[i].addEventListener("click", function (){
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}
// modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".details");
let closeBtn = document.querySelector(".btn-close");


moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click",openModal)
})
function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");

}
function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}

closeBtn.addEventListener ("click", closeModal)

modal.addEventListener("click", function(e){
    if(e.target == modal) {
        closeModal()
    }
})

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)
    }
}
window.addEventListener("scroll",showModalByScroll)

// change like button state

let likedButtons = document.querySelectorAll(".wishlist");

// likedButtons.forEach((btn) => {
//     btn.addEventListener("click",function() {
//         if (this.classList.contains("liked")) {
//            this.classList.remove("liked")
//         } else {
//             this.classList.add("liked")
//         }
//     })
// })

likedButtons.forEach((btn) => {
    btn.addEventListener("click",function() {
        this.classList.toggle("liked")
    })
})


// product number

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;
// let currentCount = +quantityValue.value;


// function toggleBtnState (count) {
//     decrementBtns.disabled = count <= minCount;
//     incrementBtns.disabled = count >= maxCount;
// }
// toggleBtnState(currentCount) 

// incrementBtns.addEventListener("click",function(){
//     quantityValue.value = +quantityValue.value + 1;
//     // let currentCount = +quantityValue.value;
//     // let nextCount = currentCount + 1;
//     // quantityValue.value = nextCount;
//     toggleBtnState(quantityValue.value)
// })

// decrementBtns.addEventListener("click",function(){
//     quantityValue.value = +quantityValue.value - 1;
//     // let currentCount = +quantityValue.value;
//     // let nextCount = currentCount - 1;
//     // quantityValue.value = nextCount;
//     toggleBtnState(quantityValue.value)
// })








let decrementBtns = document.getElementsByClassName("decrement-button");
let incrementBtns = document.getElementsByClassName("increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 5;

function toggleDecrementBtnState() {
    for(let i=0; i < quantityValue.length; i++) {
        if( quantityValue[i].value <= 1) {
            decrementBtns[i].disabled = true;
        } else {
            decrementBtns[i].disabled = false;
                        
        }
    }
}
toggleDecrementBtnState()

for(let i=0; i < incrementBtns.length;i++) {
    let btn = incrementBtns[i];
    btn.addEventListener('click',function(e){
        let btnClicked = e.target;
        let input = btnClicked.parentElement.children[1];
        let inputValue = input.value;
        input.value = +inputValue + 1;
        if(input.value < 5) {
            incrementBtns[i].disabled = false;
        } else {
            incrementBtns[i].disabled = true;
        }
        if(input.value > 1) {
            decrementBtns[i].disabled = false;
        } else {
            decrementBtns[i].disabled = true;
        }
    
    })
}

for(let i=0; i < decrementBtns.length;i++) {
    let btn = decrementBtns[i];
    btn.addEventListener('click',function(e){
        let btnClicked = e.target;
        let input = btnClicked.parentElement.children[1];
        let inputValue = input.value;
        input.value = +inputValue - 1;
        if(input.value > 1) {
            decrementBtns[i].disabled = false;
        } else {
            decrementBtns[i].disabled = true;
        }
        if(input.value <= 5) {
            incrementBtns[i].disabled = false;
        } else {
            incrementBtns[i].disabled = true;
        }
       
    })
}








