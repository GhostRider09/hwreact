import { useState } from 'react'
import './App.css'
import Listing from './components/Listing.tsx';
import {TListingItem, TListingSourceItem} from "./Types.ts"

let listingCollection: TListingItem[] = [];

function App() {
  const [_, setState] = useState(false);
  
  fetch("/etsy.json")
    .then(response => response.json())
    .then(data => {
      listingCollection = data.map((item: TListingSourceItem) => {
        return {
          listing_id: item.listing_id,
          MainImage: item.MainImage ? item.MainImage.url_570xN : "",
          url: item.url,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          currency_code: item.currency_code
        };
      });

      setState(true);
    });

  return (
    <>
      <Listing items={listingCollection} />
    </>
  )
}

export default App
