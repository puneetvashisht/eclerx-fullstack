
import Alert from './Alert';
import './App.css';
import Badge from './Badge';
import Card from './Card';
import Message from './Message';

function App() {
  return (
    <div>
      <h2 className="box">Test</h2>
       <Message/>
       <Badge caption="Inbox"/>
       <Badge caption="Sent"/>
       <Alert message="Sample message"></Alert>
       <Card/>
    </div>
  );
}

export default App;
