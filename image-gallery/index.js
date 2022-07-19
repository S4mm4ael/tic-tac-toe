// My mark //
console.log("Ваша отметка - 60 баллов");

//API//
const input = document.querySelector('.search-term');
const btn = document.querySelector(".search-button");
const containerMain = document.querySelector(".main-container");

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    getData();
});

btn.addEventListener("click", () => {
    getData();
});

getData = () => {

  containerMain.textContent = "";

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=28&client_id=DX_-ML2Wl0JwfJns4MYjEF6uzgfGpqOpKVmJFwb7c04';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      loadImages(data);
   })

   .catch(error => console.log(error));   
}

loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    let image = document.createElement("div");
    image.className = "image";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    containerMain.appendChild(image);
  }
}

// Clear search //

document.querySelector(".close").addEventListener("click", () => {
  input.value = "";
} )
