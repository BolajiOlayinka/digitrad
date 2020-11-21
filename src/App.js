import './App.css';
import Header from './Components/Header';
import Banner from './Components/BannerSection';
import CrossBorder from './Components/CrossBorder';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <CrossBorder/>
    </div>
  );
}

export default App;
