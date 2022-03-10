import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee'
import ViewEmployee from './components/ViewEmployee'
import ListEmployee from './components/ListEmployee';
import ViewProducts from './components/ViewProducts';

function App() {
  return (
    <div >
      <AddEmployee />
      <hr />
      <ListEmployee />
      <hr />
      <ViewEmployee></ViewEmployee>
      <hr />
      <ViewProducts></ViewProducts>

    </div>
  );
}

export default App;
