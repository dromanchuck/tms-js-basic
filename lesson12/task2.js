try {
    let container = document.querySelector('#result');
    let albumsContainer = document.createElement("div");
    let photosContainer = document.createElement("div");
    let backButton = document.createElement("button");

    // container.style = `position: relative;`;
  
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
              img.setAttribute('class', 'objForModal');
              img.src = item.url;
  
              return img;
            });
  
            photosContainer.append(backButton, ...photosElems);
            
            photosElems.forEach(item => {
                item.addEventListener("click", modalWindow);
              })

            albumsContainer.replaceWith(photosContainer);
          })
          
      }
    });
  } catch (error) {
    console.log(error);
  }

  function modalWindow(elem) {
    let container = document.createElement('div');
    let button = document.createElement('button');
    let div = document.createElement('div');
    document.body.append(container);

    button.innerText = `close`;
      
    button.style = `
    position: absolute;
    top: 15px;
    right:15px;
    border: none;
    background: transparent;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #fff;`
    
    container.style = `
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
    left: 0;
    top: 0;`

    div.style = `
    display: flex;
    justify-content: center;
    position: relative;
    width: 600px;
    height: 600px;`

    let element = elem.currentTarget;
    let clone = element.cloneNode(true);
    div.append(clone, button);
    container.append(div);

    button.onclick = () => container.remove();
  }