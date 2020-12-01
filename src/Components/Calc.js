import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ngnflag from "../assets/flags/nigeria.svg";
import DT from "../assets/DT.png";
import jpyflag from "../assets/flags/japan.svg";
import usdflag from "../assets/flags/usa.svg";
import btcflag from "../assets/flags/btc.svg";
import usdcflag from "../assets/flags/usdc.svg";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";

export default class Calc extends Component {
  constructor() {
    super();
    this.state = {
      ButtonValueOne: "JPY",
      ButtonValueTwo: "NGN",
      ButtonFlagOne: jpyflag,
      ButtonFlagTwo: ngnflag,
      defaultValue: 1000,
      modalone: false,
      modaltwo: false,
      BTCPrice: "",
      USDCPrice: "",
      realtimePrice: "",
      realTimePriceTwo: 350,
      result: "",
    };
    this.input = "";
  }

  fetchApi = () => {
    axios({
      method: "get",
      url: `https://rest.coinapi.io/v1/exchangerate/${this.state.ButtonValueOne}/${this.state.ButtonValueTwo}?apiKey=79F91BDD-E04F-4EBE-97E2-BC69E155373A`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        let RealTimePrice = res.data.rate.toFixed(8);
        let result = Number(this.state.defaultValue * RealTimePrice).toFixed(5);
        this.setState({
          result: result,
          realtimePrice: RealTimePrice,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchApi();
  }

  toggleModalOne = () => {
    this.setState({ modalone: !this.state.modalone });
  };
  toggleModalTwo = () => {
    this.setState({ modaltwo: !this.state.modaltwo });
  };

  handleSelect = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleInput = (e) => {
    this.setState(
      {
        defaultValue: e.target.value,
      },
      () => {
        let result = (
          this.state.defaultValue * this.state.realtimePrice
        ).toFixed(5);
        this.setState({
          result: result,
        });
      }
    );
  };

  JPYButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "JPY",
      ButtonFlagOne: jpyflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };
  JPYButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "JPY",
      ButtonFlagTwo: jpyflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };
  BTCButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "BTC",
      ButtonFlagOne: btcflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };
  BTCButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "BTC",
      ButtonFlagTwo: btcflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };
  USDCButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "USDC",
      ButtonFlagOne: usdcflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };
  USDCButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "USDC",
      ButtonFlagTwo: usdcflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };
  NGNButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "NGN",
      ButtonFlagOne: ngnflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };

  NGNButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "NGN",
      ButtonFlagTwo: ngnflag,
    });
  };
  USDButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "USD",
      ButtonFlagOne: usdflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };

  USDButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "USD",
      ButtonFlagTwo: usdflag,
    });
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <CalculatorHeader>
            <img src={DT} alt="Digitrad Icon" />
            <HeaderText>計算してみましょう</HeaderText>
          </CalculatorHeader>
          <SendSection>
            <InputSection>
              <p>You send</p>
              <input
                type="number"
                value={this.state.defaultValue}
                onChange={this.handleInput}
                autoComplete="off"
                placeholder="1000"
              />
            </InputSection>
            <StyledSelect>
              <StyledButton onClick={this.toggleModalOne}>
                <img src={this.state.ButtonFlagOne} alt="Currencies Flags" />{" "}
                {this.state.ButtonValueOne}
                <FontAwesomeIcon icon={faChevronDown} />
              </StyledButton>
            </StyledSelect>
          </SendSection>

          <CurrencyModal
            isOpen={this.state.modalone}
            toggle={this.toggleModalOne}
          >
            <StyledModalHeader toggle={this.toggleModalOne}>
              Available Currencies
            </StyledModalHeader>
            <StyledModalBody>
              <ul>
                <li
                  onClick={() => {
                    this.JPYButtonOneSelect();
                    this.toggleModalOne();
                  }}
                >
                  <img src={jpyflag} alt="Japanese Flag" />
                  Japanese Yen
                </li>
                <li
                  onClick={() => {
                    this.BTCButtonOneSelect();
                    this.toggleModalOne();
                  }}
                >
                  <img src={btcflag} alt="British Flag" />
                  Bitcoin
                </li>
                <li
                  onClick={() => {
                    this.USDCButtonOneSelect();
                    this.toggleModalOne();
                  }}
                >
                  <img src={usdcflag} alt="USDC Coin" />
                  USD Coin
                </li>
                <li
                  onClick={() => {
                    this.NGNButtonOneSelect();
                    this.toggleModalOne();
                  }}
                >
                  <img src={ngnflag} alt="Nigerian Flag" />
                  Nigerian Naira
                </li>
                <li
                  onClick={() => {
                    this.USDButtonOneSelect();
                    this.toggleModalOne();
                  }}
                >
                  <img src={usdflag} alt="America Flag" />
                  USD United States Dollar
                </li>
              </ul>
            </StyledModalBody>
          </CurrencyModal>

          <RatesSection>
            <LineSection>
              <StyledLine />
            </LineSection>

            <FixedRates className="my-auto">
              <RatesItemsWrapper>
                <IconContainer>
                  <StyledLineIcons icon={faCheck} />
                </IconContainer>

                <Amount className="roboto">000,000</Amount>
                <AmountDesc>Transfer rate (Fixed)</AmountDesc>
              </RatesItemsWrapper>
              <RatesItemsWrapper>
                <IconContainer>
                  <StyledLineIcons icon={faWallet} />
                </IconContainer>
                <Amount className="roboto">000,000</Amount>
                <AmountDesc>Amount We will convert</AmountDesc>
              </RatesItemsWrapper>
              <RatesItemsWrapper>
                <IconContainer>
                  <StyledLineIcons icon={faExchangeAlt} />
                </IconContainer>
                <Amount className="roboto">{this.state.realtimePrice}</Amount>
                <AmountDesc>Guaranteed Rates (10 mins)</AmountDesc>
              </RatesItemsWrapper>
            </FixedRates>
          </RatesSection>

          <ReceiveSection>
            <OutputSection className="roboto">
              <p>You receive</p>
              <input
                type="number"
                autoComplete="off"
                disabled
                defaultValue={this.state.result}
              />
            </OutputSection>
            <StyledSelect>
              <StyledButton onClick={this.toggleModalTwo}>
                <img src={this.state.ButtonFlagTwo} alt="Currencies Flags" />{" "}
                {this.state.ButtonValueTwo}
                <FontAwesomeIcon icon={faChevronDown} />
              </StyledButton>
            </StyledSelect>
          </ReceiveSection>

          <OutputCurrencyModal
            isOpen={this.state.modaltwo}
            toggle={this.toggleModalTwo}
          >
            <StyledModalHeader toggle={this.toggleModalTwo}>
              Available Currencies
            </StyledModalHeader>
            <StyledModalBody>
              <ul>
                <li
                  onClick={() => {
                    this.JPYButtonTwoSelect();
                    this.toggleModalTwo();
                  }}
                >
                  <img src={jpyflag} alt="Japanese Flag" />
                  Japanese Yen
                </li>
                <li
                  onClick={() => {
                    this.BTCButtonTwoSelect();
                    this.toggleModalTwo();
                  }}
                >
                  <img src={btcflag} alt="Bitcoin Flag" />
                  Bitcoin
                </li>
                <li
                  onClick={() => {
                    this.USDCButtonTwoSelect();
                    this.toggleModalTwo();
                  }}
                >
                  <img src={usdcflag} alt="USD Coin" />
                  USD Coin
                </li>
                <li
                  onClick={() => {
                    this.NGNButtonTwoSelect();
                    this.toggleModalTwo();
                  }}
                >
                  <img src={ngnflag} alt="Nigerian Flag" />
                  Nigerian Naira
                </li>
                <li
                  onClick={() => {
                    this.USDButtonTwoSelect();
                    this.toggleModalTwo();
                  }}
                >
                  <img src={usdflag} alt="America Flag" />
                  USD United States Dollar
                </li>
              </ul>
            </StyledModalBody>
          </OutputCurrencyModal>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const SendSection = styled.div`
  display: flex;
  @media (max-width: 425px) {
    width: 100%;
    margin:auto;
  }
`;
const Wrapper = styled.div`
  @media (max-width: 426px) {
    ${'' /* width: 100%;
    margin: auto; */}
  }
`;
const ReceiveSection = styled.div`
  display: flex;
  margin-top: -15px;
  @media (max-width: 425px) {
    width: 100%;
    margin:auto;
    margin-top:-15px;
  }
`;
const InputSection = styled.div`
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;

  input {
    border-left-width: 1px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    height: 36px;
    ${"" /* padding: 28px 12px 4px; */}
    font-size: 22px;
    line-height: 32px;
    outline: 0;
    border: none;
    font-family: "Roboto", sans-serif;
    -moz-outline-style: none;
    :active {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    :focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    @media(max-width:425px){
      width:150px;
    }  }
  p {
    margin-bottom: 5px;

    padding-top: 7px;
    padding-left: 3px;
    height: 20px;
    color: var(--color-accent);
  }
  @media (max-width: 426px) {
    width: 200px;
    font-size: 16px;
  }
`;
const OutputSection = styled.div`
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;

  input {
    border-left-width: 1px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    height: 36px;
    font-family: "Roboto", sans-serif;
    ${"" /* padding: 28px 12px 4px; */}
    font-size: 22px;
    line-height: 32px;
    outline: 0;
    border: none;
    -moz-outline-style: none;
    :active {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    :focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    @media(max-width:425px){
      width:150px;
    }  }
  p {
    margin-bottom: 5px;

    padding-top: 7px;
    padding-left: 3px;
    height: 20px;
    color: var(--color-accent);
  }
  @media (max-width: 426px) {
    width: 200px;
    font-size: 16px;
  }
`;
const StyledSelect = styled.div`
  background-color: #2e4369;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  width: 120px;
  background-color: black;
  border: #2e4369;
  justify-content: space-around;
  font-weight: bold;
  color: white;
  outline: 0;
  border: none;
  -moz-outline-style: none;
  img {
    width: 30px;
  }
  :hover {
    border: 0.5px solid white;
  }
  :focus {
    outline: 0;
    border: 0.5px solid white;
  }
  @media(max-width:425px){
    width:100px;
    img{
      width:20px;
    }
  }
`;
const CurrencyModal = styled(Modal)`
  background-color: white;
  width: 380px;
  text-align: left !important;
  position: relative;
  z-index: 100;
  margin-top: 200px;
  margin-right: 220px;

  font-weight: 400;
  border-radius: 3px;
  ul {
    text-decoration: none;
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  li {
    padding: 13px 16px 11px;

    width: 100%;
    font-size: 0.9375rem;
    :hover {
      cursor: pointer;
      background-color: var(--mainBlue);
      outline: 0;
      color: white;
    }
  }
  img {
    width: 30px;
    padding-right: 10px;
  }
  @media (min-height: 592px) {
    max-height: 592px;
  }
`;
const OutputCurrencyModal = styled(Modal)`
  background-color: white;
  width: 380px;
  text-align: left !important;
  position: relative;
  z-index: 100;
  margin-top: 200px;
  margin-right: 220px;

  font-weight: 400;
  border-radius: 3px;
  ul {
    text-decoration: none;
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  li {
    padding: 13px 16px 11px;

    width: 100%;
    font-size: 0.9375rem;
    :hover {
      cursor: pointer;
      background-color: var(--mainBlue);
      outline: 0;
      color: white;
    }
  }
  img {
    width: 30px;
    padding-right: 10px;
  }
  @media (min-height: 592px) {
    max-height: 592px;
  }
`;
const StyledModalHeader = styled(ModalHeader)`
  height: 30px;
  padding: 13px 16px 11px;

  color: black;
  h5 {
    font-size: 14px !important;
  }
  button {
    font-size: 14px !important;
  }
`;
const StyledModalBody = styled(ModalBody)`
  padding-top: 0px;
  h5 {
    font-size: 14px !important;
  }
  button {
    font-size: 14px !important;
  }
`;
const RatesSection = styled.div`
  display: flex;
  margin-top: -15px;
  ${"" /* align-items:center; */}
`;
const RatesItemsWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const IconContainer = styled.div`
  text-align: center;
  margin-right: 20px;
  margin-left: -30px;
  z-index: 10;
  @media(max-width:425px){
    margin-left:-25px;
  }
`;
const StyledLineIcons = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--mainGreen);
  background-color: black;
  padding: 5px;
  border-radius: 3px;
`;
const LineSection = styled.div`
  width: 10%;
`;
const StyledLine = styled.hr`
  background-color: black;
  height: 170px;
  border: 0.5px solid black;
  width: 0.5px;

  position: relative;
  z-index: 0;
  @media(max-width:425px){
    height:180px;
  }
`;
const FixedRates = styled.div`
  padding-top: 15px;
  width: 90%;
  @media (max-width: 425px) {
    width: 90%;
  }
`;
const Amount = styled.p`
  width: 30%;
  color: white;
  letter-spacing: 1px;
  :second-child {
    color: #d3d5d8;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    
  }
`;
const AmountDesc = styled.p`
  color: #eaeaea;
  margin-left: 20px;
  :second-child {
    color: #d3d5d8;
  }
  :last-child() {
    color: #00b9ff;
  }
  @media (max-width: 425px) {
    
    font-size: 14px;
  }
`;
const CalculatorHeader = styled.div`
  margin-bottom: 20px;
  @media (max-width: 426px) {
    width: 100%;
  }
`;
const HeaderText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 65px;
  color: white;
  margin-top: 10px;
  @media (max-width: 425px) {
    font-size: 26px;
    line-height: 36px;
  }
`;
