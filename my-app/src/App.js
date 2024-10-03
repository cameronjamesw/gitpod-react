import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Welcome to your website!!" name="Cam" age="24" />
      <StatefulGreeting greeting="Good day!!!" name="Cameron" />
    </div>
  );
}

export default App;
