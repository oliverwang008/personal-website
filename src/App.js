import SiteNavigation from './components/SiteNavigation';
import Profile from './components/Profile';
import PlacesLived from './components/PlacesLived';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className='page-wrapper'>
      <SiteNavigation/>
      <Switch>
        <Route exact path='/'>
          <Profile />
        </Route>
        <Route path='/places'>
          <PlacesLived />
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
