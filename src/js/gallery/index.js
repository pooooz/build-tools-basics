import '../../styles/gallery/main.scss';

import { media } from './constants';

import { drawFunctions } from './drawItem';

console.log('No way there');

const list = document.querySelector('.gallery__item-list');

Object.keys(media).forEach((mediaType) => {
  media[mediaType].forEach((mediaItem) => {
    list.appendChild(drawFunctions.get(mediaType)(mediaItem));
  });
});
