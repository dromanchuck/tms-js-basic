function renderListItem(listItemObj) {
    let { id, text, done } = listItemObj;
  
    let li = document.createElement("li");
    //создать класс Paragraph
  
    let p = new Paragraph(text);
    //использовать класс Button
  
    let removeButton = new Button('Remove');
  
    removeButton.onclick = function () {
      let filteredTodos = todos.filter((elem) => {
        if (elem.id === id) {
          return false;
        }
  
        return true;
      });
  
      todos = [...filteredTodos];
      li.remove();
      Local.todos = todos;
    };
    //использовать класс Button
    let doneButton = document.createElement("button");
  
    if (done) {
      doneButton.append("To Do");
      p.classList.add("text-done");
    } else {
      doneButton.append("Done");
    }
  
    doneButton.onclick = (event) => {
      event.stopPropagation();
  
      if (p.matches(".text-done")) {
        p.classList.remove("text-done");
        doneButton.innerHTML = "Done";
  
        todos.forEach((elem, index, arr) => {
          if (elem.id === id) {
            arr[index].done = false;
          }
        });
      } else {
        p.classList.add("text-done");
        doneButton.innerHTML = "To Do";
  
        todos.forEach((elem, index, arr) => {
          if (elem.id === id) {
            arr[index].done = true;
          }
        });
      }
  
      Local.todos = todos;
      console.log(todos);
    };
  
    let liContainer = document.createElement("div");
    liContainer.classList.add("wrapper");
  
    liContainer.append(doneButton, p, removeButton);
    li.append(liContainer);
    li.id = id;
    ol.append(li);
  }