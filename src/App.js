import logo from './logo.svg';
import './App.css';
import './font.css';
import Notifications from './modules/notifications';

function App() {
  return (
    <div className="app container mx-auto my-auto px-4 py-4 text-left">
      <Notifications />
    </div>
  );
}

export default App;
