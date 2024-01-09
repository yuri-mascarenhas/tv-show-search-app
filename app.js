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
  showImages(res.data);
});

const showImages = (shows) => {
  for (let curr of shows) {
    const img = document.createElement("IMG");
    img.src = curr.show.image.medium;
    document.body.append(img);
  }
};
