const wrapper = document.querySelector(".sliderWrapper");
const menuItems = Array.from(document.querySelectorAll(".menuItem"));
const slideDuration = 0.5; // Duration of the slide animation in seconds
const slideEasing = "cubic-bezier(0.5, 0, 0.5, 1)"; // Easing function for the slide animation

const products = [{
  id:1,
  title:"Air Force",
  img: "./images/air.png",
  price: 119+"$"
},{
  id:2,
  title:"Air Jordan",
  img: "./images/jordan.png",
  price: 149+"$"
},{
  id:3,
  title:"Air Blazer ",
  img: "./images/blazer.png",
  price: 129+"$"
}, {id:4,
title:"Air Crater",
img: "./images/crater.png",
price: 169+"$"},{
  id:5,
  title:"Hippie",
  img: "./images/hippi.png",
  price: 199+"$"
}
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const slideDistance = -100 * index;
    slideTo(slideDistance);
    addActiveClass(item);

    // change choosen product
    choosenProduct = products[index]

    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = choosenProduct.price
    currentProductImg.src = choosenProduct.img

  });
});

function slideTo(slideDistance) {
  wrapper.style.transition = `transform ${slideDuration}s ${slideEasing}`;
  wrapper.style.transform = `translateX(${slideDistance}vw)`;
}

function addActiveClass(selectedItem) {
  menuItems.forEach(item => item.classList.remove("active"));
  selectedItem.classList.add("active");
}

// Get the button element
const arButton = document.querySelector('.arButton');

// Add an event listener to the button
arButton.addEventListener('click', () => {
  // Toggle the 'disabled' class on the button
  arButton.classList.toggle('disabled');

  // Check if the button is disabled
  const isDisabled = arButton.classList.contains('disabled');

  // Update the button text and color based on its state
  if (isDisabled) {
    arButton.textContent = 'Disable AR Mode';
    arButton.style.backgroundColor = '#0d3a08';
  } else {
    arButton.textContent = 'Enable AR Mode';
    arButton.style.backgroundColor = '#7a0909';
  }
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{

    currentProductSizes.forEach(size=>{
      size.style.backgroundColor="white"
    size.style.color = "black"
    });
    size.style.backgroundColor="black"
    size.style.color = "white"

  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display = "flex";
})

close.addEventListener("click",()=>{
  payment.style.display = "none";
})







