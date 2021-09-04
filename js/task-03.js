const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageList = document.querySelector('#gallery');

imageList.style.listStyle = 'none';
imageList.style.display = 'flex';
imageList.style.flexDirection = 'column';
imageList.style.alignItems = 'center';

// const galleryElements = images.map(({ url, alt }) => {
//   return `<li><img href='${url}' alt='${alt}'>/li>`;
// });

const setAttributes = ({ url, alt }) => {
  return `<li><img src="${url}" alt='${alt}' width="450"></li>`;
};

const galleryElements = images.map(setAttributes);
console.log(galleryElements);

imageList.insertAdjacentHTML('beforeend', galleryElements.join(''));
