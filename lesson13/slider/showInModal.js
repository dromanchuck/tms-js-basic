export function showInModal(elem) {
  let background = document.createElement('div');

  background.style = `
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #00000066;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  background.onclick = () => {
    background.remove();
  };

  background.append(elem);

  document.body.append(background);
}
