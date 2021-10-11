import './App.css';
import {MainPage} from './components/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Profile} from './components/MainPage/NavPage/Profile/Profile';
import {NavPage} from './components/MainPage/NavPage/NavPage';
import {Chats} from './components/MainPage/NavPage/Chats/Chats';
import {ChatsInfo} from './components/MainPage/NavPage/ChatsInfo/ChatsInfo';
import {useSelector} from 'react-redux';
import { StarWars } from './components/MainPage/NavPage/StarWars/StarWars';
import { PrivateRoute } from './components/MainPage/NavPage/SecureRouter/SecureRouter';
import { PrivateChat } from './components/MainPage/NavPage/Chats/PrivateChat/PrivateChat';

function App() {

  const todo = useSelector(state => state.todoList)

  return (
    <div className="App">
      <Router basename='/#/'>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/starwars' component={StarWars}/>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/navpage' component={NavPage} />
          <Route exact path='/chats' component={Chats} />
          <Route exact path='/chats/:id' component={ChatsInfo} />
          <Route component={Chats} />
          <PrivateRoute path='/chats/private' component={PrivateChat}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;