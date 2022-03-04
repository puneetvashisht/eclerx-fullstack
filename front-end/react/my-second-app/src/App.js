
import './App.css';
import AddEmployee from './components/AddEmployee';
import Badge from './components/Badge';
import Dropdown from './components/Dropdown';
import ViewEmployees from './components/ViewEmployees';

function App() {

  // useState --- 

  return (
    <div>
      {/* <Badge caption="Votes"/>
      <Dropdown label="Select Courses" /> */}
      <ViewEmployees/>
      <AddEmployee/>
    </div>
  );
}

export default App;
