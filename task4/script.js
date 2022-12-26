const link = document.querySelector('a');

link.addEventListener('click', updateName);

evt.preventDefault();

function updateName() {
  let text = prompt('Измените текст ссылки');
  link.textContent = text;
}