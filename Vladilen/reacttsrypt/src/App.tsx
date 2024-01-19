import React from 'react';
import { Product } from './components/Product';
import {products} from './data/products'

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
    <Product product={products[0]}/>
    <Product product={products[1]}/>
    
    </div>
  );
}

export default App;

/*
<h1>Hello!</h1>
<button className='py-2 px-4 border'>Click me!</button>
*/