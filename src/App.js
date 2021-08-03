import Topbar from './components/TopBar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
