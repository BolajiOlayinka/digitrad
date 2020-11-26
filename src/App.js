import './App.css';
import Header from './Components/Header';
import Banner from './Components/BannerSection';
import CrossBorder from './Components/CrossBorder';
import PaymentCalc from './Components/Payment';
import Logistics from './Components/Logistics';
import Finance from './Components/FinanceTools';
import SubFooter from './Components/SubFooter';
import Footer from './Components/Footer';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
    <Wrapper>
     <Header/>
     <Banner/>
     <CrossBorder/>
     <PaymentCalc/>
     <Logistics/>
     <Finance/>
     <SubFooter/>
     <Footer/>
     </Wrapper>
    </div>
    
  );
}

export default App;

const Wrapper = styled.div `
@media(min-width:1200px){
  width:1200px;
  margin:auto;
}
`