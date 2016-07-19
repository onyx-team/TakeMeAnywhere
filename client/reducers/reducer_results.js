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
    description: 'Artisan neutra godard tacos. Gentrify jean shorts next level forage kitsch trust fund kinfolk, kombucha salvia semiotics retro thundercats. Vinyl gentrify photo booth, twee try-hard kombucha fingerstache art party affogato chia ethical flannel hoodie. ',
    img: 'https://quickbooksmadeeasy.com/wp-content/uploads/2015/02/denver_Skyline.jpg'
  },
  {
    dest: 'Los Angeles',
    origin: 'Chicago',
    price: '$250',
    startDate: '2016-8-25',
    endDate: '2016-9-01',
    description: 'Fanny pack viral intelligentsia, thundercats direct trade ramps VHS PBR&B chia heirloom chambray brooklyn tofu jean shorts. Bicycle rights church-key tilde chambray, gentrify ethical bitters leggings kinfolk tofu. Williamsburg freegan celiac XOXO sriracha. Bicycle rights gastropub wolf, actually semiotics distillery meh shoreditch hella vegan beard organic biodiesel lomo.',
    img: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/f4003584e847990e3cae4b5d8062e342-los-angeles.jpg?sharp=10&vib=20&w=1200'
  },
  {
    dest: 'San Francisco',
    origin: 'Atlanta',
    price: '$350',
    startDate: '2016-9-15',
    endDate: '2016-9-22',
    description: 'Seitan authentic flannel venmo, williamsburg godard dreamcatcher. Drinking vinegar artisan pinterest bespoke, schlitz shoreditch bicycle rights fap skateboard austin etsy. Brooklyn godard thundercats austin, skateboard lomo DIY readymade bitters retro pop-up messenger bag lumbersexual fanny pack literally.',
    img: 'http://i.imgur.com/qfQGhg.jpg'
  },
  {
    dest: 'Cincinatti',
    origin: 'Denver',
    price: '$202',
    startDate: '2017-04-03',
    endDate: '2017-05-01',
    description: 'Fap shoreditch iPhone, craft beer franzen pop-up fixie gastropub disrupt +1 photo booth plaid tumblr. Butcher pinterest cronut blue bottle single-origin coffee everyday carry microdosing paleo small batch squid forage, vinyl austin. VHS offal mumblecore messenger bag yuccie. Thundercats meditation normcore, butcher everyday carry distillery kogi before they sold out portland pinterest.',
    img: 'http://az616578.vo.msecnd.net/files/2016/03/20/635941111405409516-1303280870_cincinnati.jpg'
  }

  ]
}