import { FETCH_RESULTS } from '../actions/index';

export default function(state=null, action) {
  // switch(action.type) {
  //   case FETCH_MOOD:
  //     return action.payload;
  // }

  // return;

  return [
    {
    dest: 'DEN',
    origin: 'CVG',
    price: '$400',
    startDate: '2016-7-25',
    endDate: '2016-8-01',
    img: 'https://quickbooksmadeeasy.com/wp-content/uploads/2015/02/denver_Skyline.jpg'
  },
  {
    dest: 'LAX',
    origin: 'ORD',
    price: '$250',
    startDate: '2016-8-25',
    endDate: '2016-9-01',
    img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/f4003584e847990e3cae4b5d8062e342-los-angeles.jpg?sharp=10&vib=20&w=1200'
  },
  {
    dest: 'SFO',
    origin: 'ATL',
    price: '$350',
    startDate: '2016-9-15',
    endDate: '2016-9-22',
    img: 'http://i.imgur.com/qfQGhg.jpg'
  },
  ]
}