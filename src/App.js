import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Profile} from './components/MainPage/Profile/Profile';
import {ChatRender} from './components/MainPage/ChatRender/ChatRender'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/chats' component={ChatRender} />
        <Route exact path='/chat/news' component={ChatRender} />
      </Router>
    </div>
  );
}

export default App;