const form = document.querySelector("#search-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${userInput}`
  );
  const img = document.createElement("IMG");
  img.src = res.data[0].show.image.medium;
  document.body.append(img);
});
