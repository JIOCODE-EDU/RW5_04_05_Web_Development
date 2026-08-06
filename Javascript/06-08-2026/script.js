/* Javascript DOM (Document Object Model) */

// console.log(document);

/* Html Element Target Method */

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName
// document.querySelector
// document.querySelectorAll

// {
//   let dom = document.getElementsByTagName("p")[0];

//   console.log(dom);

//   dom.style.backgroundColor = "red";
// }

// {
//   let dom = document.getElementById("first_heading");

//   dom.style.border = "5px solid black";
// }

// {
//   let dom = document.getElementsByClassName("pre_text")[1];

//   console.log(dom);

//   dom.style.backgroundColor = "purple";
//   dom.style.color = "white";
// }

// {
//   let dom = document.getElementsByName("firstname")[0];

//   console.log(dom);

//   dom.value = "Hello World";
// }

// let imgData = [
//   "https://images.pexels.com/photos/38561256/pexels-photo-38561256.jpeg",
//   "https://images.pexels.com/photos/28300438/pexels-photo-28300438.jpeg",
//   "https://images.pexels.com/photos/33954000/pexels-photo-33954000.jpeg",
//   "https://images.pexels.com/photos/33685536/pexels-photo-33685536.jpeg",
// ];

// let currentSlide = 0;

// let image = document.getElementById("slide_img");

// let result = image.setAttribute("src", `${imgData[currentSlide]}`);

// const slide_next = () => {
//   if (currentSlide >= imgData.length - 1) {
//     currentSlide = 0;

//     let image = document.getElementById("slide_img");

//     let result = image.setAttribute("src", `${imgData[currentSlide]}`);

//     console.log(currentSlide);

//     console.log("first part");
//   } else {
//     currentSlide++;

//     let image = document.getElementById("slide_img");

//     let result = image.setAttribute("src", `${imgData[currentSlide]}`);

//     console.log(currentSlide);
//   }
// };

// const slide_prev = () => {
//   if (currentSlide <= 0) {
//     currentSlide = imgData.length - 1;

//     let image = document.getElementById("slide_img");

//     let result = image.setAttribute("src", `${imgData[currentSlide]}`);

//     console.log(currentSlide);

//     console.log("second part");
//   } else {
//     currentSlide--;

//     let image = document.getElementById("slide_img");

//     let result = image.setAttribute("src", `${imgData[currentSlide]}`);

//     console.log(currentSlide);
//   }
// };

/*  Accessing Content */

// {
//   let dom = document.getElementById("first_heading");

//   console.log(dom.innerHTML);

//   console.log(dom.textContent);

//   console.log(dom.innerText);
// }

/* set Content */

{
  let dom = document.getElementById("second_heading");

  // dom.innerHTML = "<span>Hello World</span>"

  // dom.textContent = "<span>Hello World</span>"

  dom.innerText = "<span>Hello World</span>";
}

/* Change CSS Style */

// {
//   let dom = document.getElementById("second_heading");

//     dom.style.color = "red";
//   dom.style.backgroundColor = "yellow";
//   dom.style.fontSize = "50px";
//   dom.style.width = "500px";
//   dom.style.height = "500px";
//   dom.style.display = "none";
//   dom.style.display = "block";
// }

/* Get and Set Attribures */

{
  let dom = document.getElementById("second_heading");

  dom.style.color = "red";
  dom.style.backgroundColor = "yellow";
  dom.style.fontSize = "50px";
  dom.style.width = "500px";
  dom.style.height = "500px";
  dom.style.display = "none";
  dom.style.display = "block";

  console.log(dom.getAttribute("id"));

  dom.setAttribute("class", "box");

  dom.removeAttribute("style");

  console.log(dom.hasAttribute("class"));
  console.log(dom.hasAttribute("style"));
  console.log(dom.hasAttribute("name"));
}
