try {
    let container = document.querySelector('div[id="result"]');
    let albumsContainer = document.createElement("div");
    let photosContainer = document.createElement("div");
    let backButton = document.createElement("button");
  
    backButton.innerText = "Go back";
    backButton.addEventListener("click", () => {
      photosContainer.innerHTML = "";
  
      photosContainer.replaceWith(albumsContainer);
      backButton.remove();
    });
  
    container.append(albumsContainer);
  
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        return res.json();
      })
      .then((albums) => {
        let albumsElements = albums.map((item) => {
          let p = document.createElement("p");
          p.innerText = item.title;
          p.id = item.id;
  
          p.style = `
            border: 1px solid white;
          `;
  
          return p;
        });
  
        albumsContainer.append(...albumsElements);
      });
  
    albumsContainer.addEventListener("click", (event) => {
      if (event.target.tagName === "P") {
        console.log(event.target);
        let albumId = event.target.id;
  
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
          .then((res) => res.json())
          .then((photos) => {
            let photosElems = photos.map((item) => {
              let img = document.createElement("img");
              img.src = item.url;
  
              return img;
              
            });
  
            photosContainer.append(backButton, ...photosElems);
  
            albumsContainer.replaceWith(photosContainer);
          });
      }
    });
  } catch (error) {
    console.log(error);
  }