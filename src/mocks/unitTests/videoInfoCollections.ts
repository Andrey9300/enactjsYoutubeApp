import {IVideo} from '../../interfaces/IVideo';
import {videoInfo} from './videoInfo';

const imageUrls = [
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B1%D1%8B%D0%BB%D1%8C.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%91%D0%B0%D1%80%D0%B1%D0%B0%D1%80%D0%BE%D1%81%D1%81%D0%B0.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%9B%D0%B5%D0%B4%D0%BE%D0%BA%D0%BE%D0%BB%202.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%9C%D0%B0%D1%80%D0%BA%D0%BE%20%D0%9F%D0%BE%D0%BB%D0%BE.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D1%88%D0%B8%D0%B9%20%D0%AD%D1%80%D1%82%D1%83%D0%B3%D1%80%D1%83%D0%BB%202.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/1812%202.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F%20%D0%B8%20%D0%A6%D0%B8%D1%82%D1%80%D0%BE%D0%BD%202.jpg',
  'https://hb.bizmrg.com/channel.videocontent/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8/%D0%94%D0%B5%D0%BB%D0%BE%20%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2.jpg',
];

const title = ['Ледокол', '1812. Серия 1', 'Воскресший Эртугрул. Сезон 1. Серия 1', 'Пламя и Цитрон', 'Барбаросса. Серия 1', 'Чернобыль. Сезон 1. Серия 1', 'Марко Поло. Сезон 1. Серия 1', 'Дело Декабристов. Серия 1'];

const description = ['Однажды утром Смешарики просыпаются и понимают, что они все стали белого цвета. Лосяш пытается придумать',
  'Вырастил большую тыкву, но боится, что её съедят гусеницы. Лосяш придумывает решение проблемы - метаматериалы. Но что это такое, и как оно поможет уберечь тыкву от гусениц?',
  'Карыч умеет предсказывать ураганы и землетрясения, но Лосяш ему не поверил. Чтобы это доказать',
  'Пин очень хочет увидеть Биби, ведь сильно по нему скучает. Вместе с Крошем и Ёжиком он создаёт',
  'Копатыч, Пин, Крош, Ёжик и Нюша на Умнолёте отправляются на остров с важной ботанической экспедицией',
  'Ёжик с Крошем опоздали на лекцию Лосяша про нанотехнологии, и их не пустили. От нечего делать друзья отправились',
  'Пин, Кар-Карыч, Лосяш и другие спасали Кроша и Ёжика, которые застряли в ракете, на которой быстро заканчивался кислород',
  'Бараш заболел и ни одно лекарство не в силах ему помочь. Лосяш, Пин и Карыч решают создать нано-роботов',
];

export const getMockVideoInfoCollection = (collectionLength = 10) => {
  const videoInfoCollection: IVideo[] = [];

  for (let i = 1; i <= collectionLength; i++) {
    videoInfoCollection.push({
      ...videoInfo,
      content: {
        ...videoInfo.content,
        id: i,
        title: title[i % 8],
        description: description[i % 8],
        poster: [{
          url: imageUrls[i % 8],
          webp_url: '',
          height: 100,
          width: 100,
        }],
      },
    });
  }

  return videoInfoCollection;
};
