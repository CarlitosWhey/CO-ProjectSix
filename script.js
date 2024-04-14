//Submit Function

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("userName").value;
    const message = document.getElementById("userMsg").value;
    const url = document.getElementById("imgUrl").value;

    generateCard(name, message, url);

    this.reset();
});

//Generate Card Function

function generateCard(name, message, url) {
  let displayContainer = document.getElementById("displayContainer");

  let card = document.createElement("div");
  card.classList.add("card");

  let cardName = document.createElement("h2");
  cardName.textContent = name;

  let cardMessage = document.createElement("p");
  cardMessage.textContent = message;

  let cardImg = document.createElement("img");
  cardImg.src = url;

  let featButton = document.createElement("button");
  featButton.textContent = "Feature";
  featButton.classList.add("featButton");
  featButton.onclick = function() {
    card.classList.toggle("featured");
  };

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");
  deleteButton.onclick = function() {
    displayContainer.removeChild(card);
  };

  card.appendChild(cardName);
  card.appendChild(cardMessage);
  card.appendChild(cardImg);
  card.appendChild(featButton);
  card.appendChild(deleteButton);

  displayContainer.appendChild(card);
}
