import { createSlice } from "@reduxjs/toolkit";
import abstr1 from "../image/abstr1.webp";
import abstr2 from "../image/abstr2.webp";
import real1 from "../image/real1.webp";
import min1 from "../image/min1.webp";
import natur1 from "../image/natur1.webp";
import impr1 from "../image/impr1.webp";
import impr2 from "../image/impr2.webp";
import impr3 from "../image/impr3.webp";
import impr4 from "../image/impr4.webp";
import peizash1 from "../image/peizash1.webp";
import peizash2 from "../image/peizash2.webp";
import simv1 from "../image/simv1.jpg";
import simv2 from "../image/simv2.jpg";
import simv3 from "../image/simv3.jpg";

import Svetlana from "../image/Svetlana.webp";
import Popova from "../image/Popova.webp";
import Voitenko from "../image/Voitenko.webp";  
import Natalya from "../image/Natalya.webp";
import President2 from "../image/President2.png";
import noAvatar from "../image/noAvatar.png";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [
      {
        id: 1,
        img: abstr1,
        description: "Абстракция, Поп-арт, Современная интерьерная живопись",
        author: "Наталья Морева",
        texnika: "масло",
        size: "50 x 60",
      },
      {
        id: 2,
        img: abstr2,
        description: "Абстракция, Поп-арт, Современная интерьерная живопись",
        author: "Наталья Морева",
        texnika: "Акрил",
        size: "50 x 60",
      },
      {
        id: 3,
        img: real1,
        description:
          "Реализм, Романтизм. В детскую, В Гостиную, В прихожую, В спальню",
        author: "Войтенко Юлия",
        texnika: "масло",
        size: " 40 X 50",
      },
      {
        id: 4,
        img: impr1,
        description: "Морской пейзаж",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "76 X 56",
      },
      {
        id: 5,
        img: impr2,
        description: "Пейзаж",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "56 X 38",
      },
      {
        id: 6,
        img: impr3,
        description: "Морской пейзаж",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "56 X 38",
      },
      {
        id: 7,
        img: impr4,
        description: "Балаклавские катерочки",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "76 X 56",
      },
      {
        id: 8,
        img: peizash1,
        description: "Плато Лаго-Наки",
        author: "Князева Светлана",
        texnika: "масло",
        size: "50 X 30",
      },
      {
        id: 9,
        img: peizash2,
        description: "Крымский лес",
        author: "Князева Светлана",
        texnika: "масло",
        size: "50 X 30",
      },
      {
        id: 10,
        img: min1,
        description: "Минимализм, Современная интерьерная живопись.  Для кухни, Для лофта, В детскую, В Гостиную, В офис, В прихожую, В спальню",
        author: "Войтенко Юлия",
        texnika: "масло",
        size: "20 X 25",
      },
      {
        id: 11,
        img: natur1,
        description: "Для кухни, Для лофта, В Гостиную, В офис",
        author: "Войтенко Юлия",
        texnika: "масло",
        size: "50 x 60",
      },
      {
        id: 12,
        img: simv1,
        description: "Собрание и гулянка",
        author: "Лысенко Валерий",
        texnika: "карандашом",
        size: "50 x 60",
      },
      {
        id: 13,
        img: simv2,
        description: "Жар птица",
        author: "Лысенко Валерий",
        texnika: "карандашом",
        size: "50 x 60",
      },
      {
        id: 14,
        img: simv3,
        description: "Разочаровыание",
        author: "Лысенко Валерий",
        texnika: "карандашом",
        size: "50 x 60",
      },
    ],

    cartsAbstr: [
      {
        id: 1,
        img: abstr1,
        description: "Абстракция, Поп-арт, Современная интерьерная живопись",
        author: "Наталья Морева",
        texnika: "масло",
        size: "50 x 60",
      },
      {
        id: 2,
        img: abstr2,
        description: "Абстракция, Поп-арт, Современная интерьерная живопись",
        author: "Наталья Морева",
        texnika: "Акрил",
        size: "50 x 60",
      },
    ],

    cartsReal: [
      {
        id: 1,
        img: real1,
        description:
          "Реализм, Романтизм. В детскую, В Гостиную, В прихожую, В спальню",
        author: "Войтенко Юлия",
        texnika: "масло",
        size: " 40 X 50",
      },
    ],

    cartsImpr: [
      {
        id: 1,
        img: impr1,
        description: "Морской пейзаж",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "76 X 56",
      },
      {
        id: 2,
        img: impr2,
        description: "Пейзаж",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "56 X 38",
      },
      {
        id: 3,
        img: impr3,
        description: "Морской пейзаж",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "56 X 38",
      },
      {
        id: 4,
        img: impr4,
        description: "Балаклавские катерочки",
        author: "Попова Людмила",
        texnika: "Акварель",
        size: "76 X 56",
      },
    ],

    cartsPeizash: [
      {
        id: 1,
        img: peizash1,
        description: "Плато Лаго-Наки",
        author: "Князева Светлана",
        texnika: "масло",
        size: "50 X 30",
      },
      {
        id: 2,
        img: peizash2,
        description: "Крымский лес",
        author: "Князева Светлана",
        texnika: "масло",
        size: "50 X 30",
      },
    ],

    cartsMin: [
      {
        id: 1,
        img: min1,
        description: "Минимализм, Современная интерьерная живопись.  Для кухни, Для лофта, В детскую, В Гостиную, В офис, В прихожую, В спальню",
        author: "Войтенко Юлия",
        texnika: "масло",
        size: "20 X 25",
      },
    ],
    cartsNatur: [
      {
        id: 1,
        img: natur1,
        description: "Для кухни, Для лофта, В Гостиную, В офис",
        author: "Войтенко Юлия",
        texnika: "масло",
        size: "50 x 60",
      },
    ],
    cartsSimv: [
      {
        id: 1,
        img: simv1,
        description: "Собрание и гулянка",
        author: "Лысенко Валерий",
        texnika: "карандашом",
        size: "50 x 60",
      },
      {
        id: 2,
        img: simv2,
        description: "Жар птица",
        author: "Лысенко Валерий",
        texnika: "карандашом",
        size: "50 x 60",
      },
      {
        id: 3,
        img: simv3,
        description: "Разочаровыание",
        author: "Лысенко Валерий",
        texnika: "карандашом",
        size: "50 x 60",
      },
    ],

   artists: [
      {
        name: "Наталья Морева",
        avatar: Natalya,
        paintings: [
          { title: 'Картина 1', image: abstr1 },
          { title: 'Картина 2', image: abstr2 },
        ],
      },
      {
        name: 'Войтенко Юлия',
        avatar: Voitenko,
        paintings: [
          { title: 'Картина 4', image: real1 },
        ],
      },
      {
        name: "Попова Людмила",
        avatar: Popova,
        paintings: [
          { title: 'Картина 4', image: impr1 },
          { title: 'Картина 5', image: impr2 },
          { title: 'Картина 6', image: impr3 },
        ],
      },
      {
        name: "Князева Светлана",
        avatar: Svetlana,
        paintings: [
          { title: 'Картина 4', image: peizash1 },
          { title: 'Картина 5', image: peizash2 },
         
        ],
      },
      {
        name: 'Лысенко Валерий',
        avatar: President2,
        paintings: [
          { title: 'Картина 1', image: simv1 },
          { title: 'Картина 2', image: simv2 },
          { title: 'Картина 3', image: simv3 },
        ],
      },
    ],

    creators:[
      {
        id:1,
        name: "Хлебцов Иван",
        avatar: noAvatar,
        description: "Разрабатывал концепцию сайта"
      },
      {
        id:2,
        name: "Ширгин Алексей",
        avatar: noAvatar,
        description: "Дизайнер сайта"
      },
      {
        id:3,
        name: "Абдурашитов Али",
        avatar: noAvatar,
        description: "Программист"
      },
    ],
    basket: [],
  },
  reducers: {
    removeFromOrder(state, action) {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },

    addCartBasket(state, action) {
      state.basket.push({
        id: action.payload.id,
        description: action.payload.description,
        author: action.payload.author,
        price: action.payload.price,
      });
    },
  },
});

export const { addCartBasket, removeFromOrder } = cartSlice.actions;
export default cartSlice.reducer;
