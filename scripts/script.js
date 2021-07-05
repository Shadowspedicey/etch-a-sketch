let container = document.querySelector("#container");

function CreateGrids(number)
{
  container.style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
  for (let i = 0; i < number * number; i++)
  {
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    container.appendChild(gridElement);
  }
}

CreateGrids(16);

let gridElements = document.querySelectorAll(".grid-element");
gridElements.forEach((element) =>
{
  element.addEventListener("mouseover", () =>
  {
    element.classList.add("grid-element-hovered");
  });
});