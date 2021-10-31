 
import './App.css'; 
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './components/Home';
import CreateForm from './components/CreateForm'; 
import PageNotFound from './components/PageNotFound';

const App = () => { 

  return (
    // <CreateForm /> 
    <Router>
            <div className="App"> 
              <div id="page-body">
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/createform" component={CreateForm} exact/>  
                <Route component={PageNotFound}/>
                </Switch>
              </div>
            </div>
          </Router> 
  );
};

export default App;
