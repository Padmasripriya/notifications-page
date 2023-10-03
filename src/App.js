import logo from './logo.svg';
import './App.css';
import Header from './modules/header';
import Notifications from './modules/notifications';

function App() {
  return (
    <div className="App container mx-auto my-auto px-4 py-4 text-left">
      <Header />
      <Notifications />
    </div>
  );
}

export default App;
