import SiteNavigation from './components/SiteNavigation';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className='page-wrapper'>
      <SiteNavigation/>
      <Switch>
        <Route exact path='/'>
          
        </Route>
        <Route path='/places'>
          
        </Route>
        <Route path='/links'>

        </Route>
        <Route path='/form'>

        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
