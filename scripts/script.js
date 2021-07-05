let resetButton = document.querySelector("#reset-button");
let randomizeColorbutton = document.querySelector("#random-color-button");
let colorButton = document.querySelector("#color-picker");
let container = document.querySelector("#container");
let color = "#FFFFFF";

function CreateGrids(number)
{
  container.style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
  for (let i = 0; i < number * number; i++)
  {
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    container.appendChild(gridElement);
  }

  let gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((element) =>
  {
    element.addEventListener("mouseover", () =>
    {
      element.style.background = color;
    });
    element.addEventListener("mousedown", () =>
    {
      element.style.background = color;
    });
  });
}
CreateGrids(16);


resetButton.addEventListener("click", function ChangeSize()
{
  let userInput = prompt("What size do you want?");
  if (userInput > 100)
  {
    alert("Too high of a number. Maybe try a number less than 100?");
    return ChangeSize();
  }
  else
  {
    document.querySelectorAll(".grid-element").forEach((element) =>
    {
      element.remove();
    });
    CreateGrids(userInput);
  }
});

randomizeColorbutton.addEventListener("click", () =>
{
  color = "rgb(" + (Math.floor(Math.random() * 255)) + ", " + (Math.floor(Math.random() * 255)) + ", " + (Math.floor(Math.random() * 255)) + ")";
});

colorInput = colorButton.querySelector("input[type=color]");
colorInput.addEventListener("input", () =>
{
  color = colorInput.value;
});