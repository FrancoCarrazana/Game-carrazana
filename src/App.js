import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from './Context/cartContext';
import Router from './router/Router';

function App() {

  return (
    <div className='App'>
     <CartProvider>
        <Router />
     </CartProvider>
    </div>
    )
  }
  export default App;