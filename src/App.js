import './App.css';
import {Message} from './components/message/message.js'

function App() {

  const userMessage = prompt('Введите ваше сообщение')

  return (
    <div className="App">
      <Message props={userMessage} />
    </div>
  );
}

export default App;
