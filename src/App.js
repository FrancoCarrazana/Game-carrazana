import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import   NavBar   from './components/navbar/NavBar';
// import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailCountainer   from './components/item-detail-countainer/ItemDetailCountainer';

  function App() {
    
    
  return (
    <div className='App'>
      <NavBar />
      {/* <ItemListContainer  /> */}
      <ItemDetailCountainer />
    </div>
    )
  }
  export default App;