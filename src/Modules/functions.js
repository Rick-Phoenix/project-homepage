export function createElement(type, ...classes) {
  const newElement = document.createElement(type);
  newElement.classList.add(...classes);

  return newElement;
}

function getImages(index) {
  let images = {};
  index.keys().forEach((key) => {
    images[key.replace('../', '')] = index(key)
  })
  console.log(images);
}

const images = require.context('./Images', false, /\.(png|jpe?g|svg)$/);
