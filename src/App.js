import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-4xl text-blue-500 hover:text-blue-400 hover:cursor-pointer">Snap Shop CRUD</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/product/create' element={<CreateProduct />}></Route>
          <Route path='/product/detail/:productid' element={<ProductDetails />}></Route>
          <Route path='/product/edit/:productid' element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter> */}

      
  <Apicall />
    </div>
  );

}

export default App;
