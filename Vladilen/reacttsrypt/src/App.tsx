
import { useContext } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
// import { products } from './data/products'

import { useProducts } from './hooks/products';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

function App() {

  const { loading, error, products, addProduct } = useProducts()
  // const [modal, setModal] = useState(false) //не нужно после создания контекста
  const {modal, open, close: closeModal }=useContext(ModalContext) // close: closeModal переименование при деструктуризации
  
  const createHandler = (product: IProduct) => {
    // setModal(false) //не нужно после создания контекста
    closeModal()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create new product' onClose={closeModal}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}
      <button 
      className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6'
      onClick={open}
      >+</button>
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