import { FETCH_RESULTS } from '../actions/index';

export default function(state=null, action) {
  // switch(action.type) {
  //   case FETCH_MOOD:
  //     return action.payload;
  // }

  // return;

  return [
    {
    dest: 'Denver',
    origin: 'Cincinatti',
    price: '$400',
    startDate: '2016-7-25',
    endDate: '2016-8-01',
    img: 'https://quickbooksmadeeasy.com/wp-content/uploads/2015/02/denver_Skyline.jpg'
  },
  {
    dest: 'Los Angeles',
    origin: 'Chicago',
    price: '$250',
    startDate: '2016-8-25',
    endDate: '2016-9-01',
    img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/f4003584e847990e3cae4b5d8062e342-los-angeles.jpg?sharp=10&vib=20&w=1200'
  },
  {
    dest: 'San Francisco',
    origin: 'Atlanta',
    price: '$350',
    startDate: '2016-9-15',
    endDate: '2016-9-22',
    img: 'http://i.imgur.com/qfQGhg.jpg'
  },
  {
    dest: 'Cincinatti',
    origin: 'Denver',
    price: '$202',
    startDate: '2017-04-03',
    endDate: '2017-05-01',
    img: 'http://az616578.vo.msecnd.net/files/2016/03/20/635941111405409516-1303280870_cincinnati.jpg'
  }

  ]
}