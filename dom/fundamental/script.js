// console.log("Connected!");
// console.log(document);

// const simpleObject = {
//     name: "John",
//     age: 70,
//     address : "England",
// }

// console.dir(document)
// console.dir(simpleObject)

// document.children[0].children[1].children[0].classList.add("content");

const ourButton = document.getElementsByTagName("button");
ourButton[0].addEventListener("click", () => {
  const h1Title = document.querySelector(".title");

  h1Title.style.color = "green";
});
