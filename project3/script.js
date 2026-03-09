console.log("site loaded")

function addNode() {

    const container = document.getElementById("nodes")

    const node = document.createElement("div")

    node.className = "card"

    container.appendChild(node)

}

function addIdea() {
  const grid = document.getElementById("idea-grid");

  if (!grid) {
    console.log("idea-grid not found");
    return;
  }

  const newIdea = document.createElement("div");
  newIdea.className = "idea-card";
  newIdea.contentEditable = true;
  newIdea.innerText = "New Idea";

  grid.appendChild(newIdea);
}