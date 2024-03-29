// Main App
const form = document.querySelector("#search-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const config = {
    params: {
      q: userInput,
    },
  };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  clearLastQuery();
  showImages(res.data);
  clearInput();
});

// Other Functions
const showImages = (shows) => {
  for (let curr of shows) {
    const img = document.createElement("IMG");
    img.src = curr.show.image.medium;
    img.classList.add("thumbnail");
    document.querySelector(".img-container").append(img);
  }
};

const clearInput = () => {
  form.elements.query.value = "";
};

const clearLastQuery = () => {
  let myDiv = document.querySelector(".img-container");
  if (myDiv) {
    while (myDiv.firstChild) {
      myDiv.removeChild(myDiv.firstChild);
    }
  }
};
