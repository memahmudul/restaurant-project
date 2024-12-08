// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const restaurants = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Barin SkyView Lounge',
    slogan:"We Serve Food",
    bannerImage:'https://placehold.co/600x400',
    email: 'user1@nextmail.com',
    password: '123456',
    subscription:'16-11-2024'
  },




  {
    id: '410544b2-4001-4271-9855-fec4b6a6hfc4',
    name: 'Route 6',
    slogan:"Testy Food",
    bannerImage:'https://placehold.co/600x400',
    email: 'user2@nextmail.com',
    password: '123456',
    subscription:'16-11-2024'
  },

  {
    id: '410544b2-4001-4271-9855-fdhggsd32',
    name: 'Tiffin Time',
    slogan:"Come at Tiffin",
    bannerImage:'https://placehold.co/600x400',
    email: 'user3@nextmail.com',
    password: '123456',
    subscription:'16-11-2024'
  },




];




const foods = [
  {
    id: '1',
    restaurantId: '410544b2-4001-4271-9855-fec4b6a6442a',
    name:'Indian Burger',
    category:'Burger',
    image:'https://placehold.co/200x200',
    price:220,
    isAvailable: true,
    desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: '2',
    restaurantId: '410544b2-4001-4271-9855-fec4b6a6442a',
    name:'Spicy Burger',
    category:'Burger',
    image:'https://placehold.co/200x200',
    price:120,
    isAvailable: true,
    desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: '3',
    restaurantId: '410544b2-4001-4271-9855-fec4b6a6442a',
    name:'Chiken Burger',
    category:'Burger',
    image:'https://placehold.co/200x200',
    price:250,
    isAvailable: true,
    desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },

  {
    id: '4',
    restaurantId: '410544b2-4001-4271-9855-fec4b6a6442a',
    name:'Chilli Chiken',
    category:'Chiness Item',
    image:'https://placehold.co/200x200',
    price:180,
    isAvailable: true,
    desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  }
]



const orders = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', //this auto generated id will be used to track order
    restaurantId:'410544b2-4001-4271-9855-fec4b6a6442a', 
    cart:[
      {
        foodId:'3',  //foreign key
        quantity: 2,

      },

      {
        foodId:'1',  //foreign key
        quantity: 1,

      }

    ],
    tableNo: '3',  
    status:'placed',

    
  }
];



export { restaurants, foods, orders };
