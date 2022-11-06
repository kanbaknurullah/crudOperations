import './App.css';
import MainPanel from './components/main-panel/main-panel';
import PanelTop from './components/panel-top/panel-top';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className='main-panel-container'>
        <PanelTop />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
