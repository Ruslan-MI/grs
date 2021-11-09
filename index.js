"use strict";

const multimeters = [
  `multimeter1`,
  `multimeter2`,
];

const oscilloscopes = [
  `oscilloscope1`,
  `oscilloscope2`,
];

const devices = [
  {
    title: `Мультиметры`,
    type: `multimeters`,
    list: multimeters,
  },
  {
    title: `Осциллографы`,
    type: `oscilloscopes`,
    list: oscilloscopes,
  },
];

const getDevicesList = (data) => (
  `<ul>
    ${data.list.map((item) => (`<li><a href="./img/${data.type}/${item}.jpg">${item}</a></li>`)).join(``)}
  </ul>`
);

const getDevicesTypeList = (data) => (
  `<ul>
    ${data.map((item) => (item.list.length > 0 ?
    `<li>
      <h2>${item.title}:</h2>
      ${getDevicesList(item)}
    </li>`
    : ``)).join(``)}
  </ul>`
);

document.querySelector(`#root`).innerHTML = getDevicesTypeList(devices);
