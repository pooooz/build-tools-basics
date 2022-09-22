const galleryBlock = 'gallery';

const bemClass = (block) => (element) => `${block}__${element}`;

const galleryBemClass = bemClass(galleryBlock);

const drawHr = (container) => {
  const hrElement = document.createElement('hr');
  hrElement.classList.add(galleryBemClass('item-separator'))
  container.appendChild(hrElement);
}

const drawDescription = (container, item) => {
  const descriptionElement = document.createElement('h4');
  descriptionElement.classList.add(galleryBemClass('item-description'));
  descriptionElement.textContent = item.title;
  container.appendChild(descriptionElement);
}

const drawImg = (item) => {
  const itemElement = document.createElement('li');
  itemElement.classList.add(galleryBemClass('item'));

  const imgElement = document.createElement('img');
  imgElement.classList.add(galleryBemClass('item-image'));
  imgElement.src = item.src;
  imgElement.alt = item.title;
  itemElement.appendChild(imgElement);

  drawHr(itemElement);
  drawDescription(itemElement, item);

  return itemElement;
}

const drawAudio = (item) => {
  const itemElement = document.createElement('li');
  itemElement.classList.add(galleryBemClass('item'));

  const audioElement = document.createElement('audio');
  audioElement.classList.add(galleryBemClass('item-audio'));
  audioElement.src = item.src;
  audioElement.controls = true;
  itemElement.appendChild(audioElement);

  drawHr(itemElement);
  drawDescription(itemElement, item);

  return itemElement;
}

const drawVideo = (item) => {
  const itemElement = document.createElement('li');
  itemElement.classList.add(galleryBemClass('item'));

  const videoElement = document.createElement('video');
  videoElement.classList.add(galleryBemClass('item-video'));
  videoElement.src = item.src;
  videoElement.controls = true;
  itemElement.appendChild(videoElement);

  drawHr(itemElement);
  drawDescription(itemElement, item);

  return itemElement;
}

export const drawFunctions = new Map([
  ['images', drawImg],
  ['audio', drawAudio],
  ['video', drawVideo],
])
