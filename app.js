// add to card

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".addtocart");


for(let i = 0; i < addToCartButtons.length;i++ ) {
    addToCartButtons[i].addEventListener("click", function (){
        productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
        quantityValue[i].value = 1;
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

    // for 1 element

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


    // FOR

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;

// for(let i=0; i < quantityValue.length; i++) {
//     let currentCount = +quantityValue[i].value;                      
//     toggleBtnState(currentCount, decrementBtns[i], incrementBtns[i]) 
// }
// function toggleBtnState (count, decrementBtn, incrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }
// for(let i=0; i < incrementBtns.length;i++) {
//     incrementBtns[i].addEventListener("click",function(){
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
//         toggleBtnState(nextCount, decrementBtns[i], incrementBtns[i])
//    })
// }
// for(let i=0; i < decrementBtns.length;i++) {
//     decrementBtns[i].addEventListener("click",function(){
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount - 1;
//         quantityValue[i].value = nextCount;
//         toggleBtnState(nextCount, decrementBtns[i], incrementBtns[i])
//    })
// }


    // for each

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;

// quantityValue.forEach((item,i)=> {
//     toggleBtnState(item.value, decrementBtns[i], incrementBtns[i])
// })
// function toggleBtnState (count, decrementBtn, incrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }
// incrementBtns.forEach((item,i)=> {
//     item.addEventListener("click",function() {
//         quantityValue[i].value = +quantityValue[i].value + 1;
//         toggleBtnState(quantityValue[i].value, decrementBtns[i], incrementBtns[i])
//    })
// })
// decrementBtns.forEach((item,i)=> {
//     item.addEventListener("click",function() {
//         quantityValue[i].value = +quantityValue[i].value - 1;
//         toggleBtnState(quantityValue[i].value, decrementBtns[i], incrementBtns[i])
//    })
// })


    // function constructor product number

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");
 
function Counter(incrementBtn,decrementBtn,inputField,minCount = 1,maxCount = 5) {
    // this.incrementBtn = incrementBtn;
    // this.decrementBtn = decrementBtn;
    // this.inputField = inputField;
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField
    }
    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    }
    this.toggleButtonState();
    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;   
        this.toggleButtonState()
    }
    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;   
        this.toggleButtonState()
    }
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this))
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this))
}
for(let i=0; i < quantityValue.length;i++) {
    const counter = new Counter(incrementBtns[i],decrementBtns[i],quantityValue[i]);
}



// slider


$('.slidebar').slick({
    dots:true,
});
