
import './App.css';
import Badge from './components/Badge';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div>
      <Badge caption="Votes"/>
      <Dropdown label="Select Courses" />
    </div>
  );
}

export default App;
