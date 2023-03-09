import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product7.jpg";
import product5 from "../images/product8.jpg";
import { getApiData } from './axios';

// export const offersPro = async () => {
//   const data = await getApiData();
//   return data;
// };
// offersPro();
export const offersPro = [
  {
    id: 1,
    image: product1,
    title: "product1",
    price: 300,
    oldPrice: 420,
    rating: 4,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 2,
    image: product2,
    title: "product2",
    price: 400,
    oldPrice: 470,
    rating: 3,
    qty: 1,
    maxQuantity: 2,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 3,
    image: product3,
    title: "product3",
    price: 370,
    oldPrice: 410,
    rating: 3.5,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 4,
    image: product4,
    title: "product4",
    price: 500,
    oldPrice: 540,
    rating: 4.5,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 5,
    image: product5,
    title: "product5",
    price: 250,
    oldPrice: 300,
    rating: 5,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
];

// export offersPro;
