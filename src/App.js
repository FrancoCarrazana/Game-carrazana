import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import   NavBar   from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/ItemListContainer';

const appStyles = {
  height: 300,
  width: 300,
  backgraundColor: "red"
}

  function App() {
    return (
    <div className='App'>
      <NavBar />
      <h1>La tienda mas grande de latino america</h1>
      <hr/>
      <ItemListContainer  />
      <div style={appStyles}/> 
    </div>
    )
  }
  export default App;