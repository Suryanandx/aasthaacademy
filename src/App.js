
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import LogIn from './components/Auth/Login';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import DashboardDesign from './components/DashboardDesgin/DashboardDesign';
import StudyMaterialDash from './components/DashboardMaterial/StudyMaterialDash';
import { AuthProvider } from './context/AuthContext';
import Advertisement from './pages/Advertisement';
import Home from './pages/Home';
import StudyMaterial from './pages/StudyMaterial';
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <AppRoute exact path='/dashboard/study-materials' component={StudyMaterialDash} layout={DashboardLayout}/>
            <AppRoute exact path='/dashboard/add_material' component={Advertisement} layout={DashboardLayout}/>
            <AppRoute exact path='/dashboard/adverts' component={StudyMaterial} layout={DashboardLayout}/>
            <Route exact path='/login' component={LogIn} />
             <Route exact path='/test' component={StudyMaterialDash} />
          </Switch>
        </Router>
      </BrowserRouter>
      
    </div>
    </AuthProvider>
    
  );
}

export default App;
