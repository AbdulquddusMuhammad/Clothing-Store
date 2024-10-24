const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png"
      },
      {
        code: "darkblue",
        img: "./img/air2.png"
      },
    ],
  },
  {
    id: 2,
    title: "Air jordan",
    price: 149,
    colors: [
      {
        code: "light",
        img: "./img/jordan.png"
      },
      {
        code: "green",
        img: "./img/jordan2.png"
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 189,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png"
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png"
      },
    ],
  },
];

let choosenproduct = products[0]

const currentProductImg = document.querySelector(".product-img")
const currentProductTitle = document.querySelector(".product-title")
const currentProductPrice = document.querySelector(".product-price")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {

  // console.log(item);
  // console.log(index);

  item.addEventListener("click", () => {
    //changes the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change chosen product
    choosenproduct = products[index]

    //change the text of the currrent product
    currentProductTitle.textContent = choosenproduct.title;
    currentProductPrice.textContent = "$" + choosenproduct.price;
    currentProductImg.src = choosenproduct.colors[0].img;

    currentProductColors.forEach((color, index)=>{
      color.style.backgroundColor = choosenproduct.colors[index].code;
      console.log(color)
    });

  });
});

currentProductColors.forEach((color, index)=>{
  color.addEventListener("click", ()=> {
    currentProductImg.src = choosenproduct.colors      [index].img
  })
})

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click", ()=>{

    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    })

    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

const buyNow = document.querySelector(".product-button")
const paymentform = document.querySelector(".payment")
const closePaymentForm = document.querySelector(".close")

buyNow.addEventListener("click", ()=>{
  paymentform.style.display = "flex"
})

closePaymentForm.addEventListener("click", ()=>{
  paymentform.style.display = "none"
})