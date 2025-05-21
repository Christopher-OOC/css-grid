const container = document.querySelector(".container");

const boxes = document.querySelectorAll(".container__box");
const boxList = [...boxes];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    container.prepend(box);
  });
});

const url = "https://openlibrary.org/search.json?q=java+pros";
const headers = new Headers({
  "User-Agent": "Test/1.0 (olojedechristopher24@gmail.com)",
});

const options = {
  method: "GET",
  headers: headers,
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data.docs))
  .catch((error) => console.error("Error:", error));
