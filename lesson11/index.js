fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    let title = document.createElement("h1");
    title.append(json.title);

    let body = document.createElement("p");
    body.append(json.body);
    document.body.append(title, body);
  });
