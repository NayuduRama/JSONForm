 
import './App.css'; 
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './components/Home';
import CreateForm from './components/CreateForm'; 
import ListOfForms from './components/ListOfForms';
import NewComponent from './components/newComponent';
import PageNotFound from './components/PageNotFound';

const App = () => {  

  return ( 
    <Router>
            <div className="App"> 
              <div id="page-body">
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/createform" component={CreateForm} exact/>   
                <Route path="/newcomponent" component={NewComponent} exact />
                <Route component={PageNotFound}/>
                </Switch>
              </div>
            </div>
          </Router> 
  );
};

export default App;
