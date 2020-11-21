import './App.css';
import Header from './Components/Header';
import Banner from './Components/BannerSection';
import CrossBorder from './Components/CrossBorder';
import PaymentCalc from './Components/Payment';
import Logistics from './Components/Logistics';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <CrossBorder/>
     <PaymentCalc/>
     <Logistics/>
    </div>
  );
}

export default App;
