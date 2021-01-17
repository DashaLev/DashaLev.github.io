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




