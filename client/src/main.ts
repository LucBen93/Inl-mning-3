import "./style.css";

const app = document.querySelector("#app");

interface BoardGame {
  id: string;
  name: string;
  description: string;
  published: number;
}

let boardGames: BoardGame[] = [];

async function main() {
  async function getAllBoardGames() {
    let response = await fetch("http://localhost:3000/api/boardgame");
    let data = await response.json();
    boardGames = data;
    return data;
  }

  await getAllBoardGames();

  const container = document.createElement("div");
  container.classList.add("container");
  if (app) {
    app.append(container);
  }

  for (let index = 0; index < boardGames.length; index++) {
    const boardgameDiv = document.createElement("div");
    boardgameDiv.classList.add("board-game-container");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("board-game-name");

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("board-game-description");

    const publishedDiv = document.createElement("div");
    publishedDiv.classList.add("board-game-published");

    nameDiv.innerHTML = boardGames[index].name;
    descriptionDiv.innerHTML = boardGames[index].description;
    publishedDiv.innerText = boardGames[index].published.toString();

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.id = "editBtn";
    editButton.classList.add("btn");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.id = "deleteBtn";
    deleteButton.classList.add("btn");

    deleteButton.addEventListener("click", async () => {
      await fetch(
        `http://localhost:3000/api/boardgame/${boardGames[index].id}`,
        {
          method: "DELETE",
        }
      );
      location.reload();
    });

    boardgameDiv.append(
      nameDiv,
      descriptionDiv,
      publishedDiv,
      editButton,
      deleteButton
    );
    container.append(boardgameDiv);
  }

  async function addBoardGame(e: SubmitEvent) {
    e.preventDefault();
    const boardGameIdInput = document.getElementById(
      "id-input"
    ) as HTMLInputElement;
    const boardGameNameInput = document.getElementById(
      "name-input"
    ) as HTMLInputElement;
    const boardGameDescriptionInput = document.getElementById(
      "description-input"
    ) as HTMLInputElement;
    const boardGamePublishedInput = document.getElementById(
      "published-input"
    ) as HTMLInputElement;
    boardGameIdInput.value;
    boardGameNameInput.value;
    boardGameDescriptionInput.value;
    boardGamePublishedInput.value;

    const boardGame: BoardGame = {
      id: boardGameIdInput.value,
      name: boardGameNameInput.value,
      description: boardGameDescriptionInput.value,
      published: parseInt(boardGamePublishedInput.value),
    };

    const response = await fetch("http://localhost:3000/api/boardgame", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(boardGame),
    });

    console.log(await response.json());
  }
  const form = document.getElementById("form");
  form?.addEventListener("submit", addBoardGame);
}

await main();
