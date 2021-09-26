import './App.css'
import CreateUserFirst from './component/CreateUserFirst'
import CreateUserSecond from './component/CreateUserSecond'
import UserList from './component/UserList'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
        <Switch >
          
          <Route path="/secondpage" component={CreateUserSecond}/>
          <Route path="/allusers" component={UserList}/>
          <Route path="/" component={CreateUserFirst} />
        </Switch>

    </Router>

  );
}

export default App;
