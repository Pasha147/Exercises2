
import { Product } from './components/Product';
// import { products } from './data/products'

import { useProducts } from './hooks/products';

function App() {

const {loading, error, products} =useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
{loading && <p className='text-center'>Loading...</p>}
{error && <p className='text-center text-red-600'>{error}</p>}
      {products.map(product => <Product product={product} key={product.id} />)}

      {/* <Product product={products[0]}/>
    <Product product={products[1]}/> */}

    </div>
  );
}

export default App;

/*
<h1>Hello!</h1>
<button className='py-2 px-4 border'>Click me!</button>
*/