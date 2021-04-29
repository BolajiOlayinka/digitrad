import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ngnflag from "../../assets/flags/nigeria.svg";
import DT from "../../assets/DT.svg";
import jpyflag from "../../assets/flags/japan.svg";
import usdflag from "../../assets/flags/usa.svg";
import btcflag from "../../assets/flags/btc.svg";
import usdcflag from "../../assets/flags/usdc.svg";
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
      fixedRates: 0,
      amountConvert: 0,
    };
    this.input = "";
  }

  fetchApi = () => {
    axios({
      method: "get",
      url: `http://stg.app.digitrad.world/api/master/currency/rate/${this.state.ButtonValueOne}/${this.state.ButtonValueTwo}`,
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue < 100000
        ) {
          this.setState({
            fixedRates: Number(0.02 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 100000 &&
          this.state.defaultValue < 500000
        ) {
          this.setState({
            fixedRates: Number(0.015 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue > 500000
        ) {
          this.setState({
            fixedRates: Number(0.01 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue < 100000
        ) {
          this.setState({
            fixedRates: Number(0.02 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 100000 &&
          this.state.defaultValue < 500000
        ) {
          this.setState({
            fixedRates: Number(0.015 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue > 500000
        ) {
          this.setState({
            fixedRates: Number(0.01 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue < 500000
        ) {
          this.setState({
            fixedRates: Number(0.03 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue >= 500000 &&
          this.state.defaultValue < 5000000
        ) {
          this.setState({
            fixedRates: Number(0.015 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue >= 5000000 &&
          this.state.defaultValue < 10000000
        ) {
          this.setState({
            fixedRates: Number(0.01 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue > 10000000
        ) {
          this.setState({
            fixedRates: Number(0.007 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue < 500000
        ) {
          this.setState({
            fixedRates: Number(0.03 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue >= 500000 &&
          this.state.defaultValue < 5000000
        ) {
          this.setState({
            fixedRates: Number(0.015 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue >= 5000000 &&
          this.state.defaultValue < 10000000
        ) {
          this.setState({
            fixedRates: Number(0.01 * this.state.defaultValue),
          });
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue > 10000000
        ) {
          this.setState({
            fixedRates: Number(0.007 * this.state.defaultValue),
          });
        } else {
          this.setState({
            fixedRates: Number(0.007 * this.state.defaultValue),
          });
        }

        if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN"
        ) {
          let RealTimePrice =
            res.data.rate.toFixed(3) - 0.05 * res.data.rate.toFixed(3);

          let Amount = Number(this.state.defaultValue - this.state.fixedRates);
          const result = Number(Amount * RealTimePrice).toFixed(4);
          this.setState({
            realtimePrice: RealTimePrice,
            result: result,
            amountConvert: Amount,
          });
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN"
        ) {
          let RealTimePrice =
            (res.data.rate - 0.05 * res.data.rate).toFixed(3);

          let Amount = Number(this.state.defaultValue - this.state.fixedRates);
          const result = Number(Amount * RealTimePrice).toFixed(4);
          this.setState({
            realtimePrice: RealTimePrice,
            result: result,
            amountConvert: Amount,
          });
        }else if (
          this.state.ButtonValueOne === "USDC" &&
          this.state.ButtonValueTwo === "NGN"
        ) {
          let RealTimePrice =
            (res.data.rate - 0.05 * res.data.rate).toFixed(3);

          let Amount = Number(this.state.defaultValue - this.state.fixedRates);
          const result = Number(Amount * RealTimePrice).toFixed(4);
          this.setState({
            realtimePrice: RealTimePrice,
            result: result,
            amountConvert: Amount,
          });
        }else if (
          
          this.state.ButtonValueTwo === "BTC"
        ) {
          let RealTimePrice =
            (res.data.rate - 0.05 * res.data.rate).toFixed(8);
            let Amount = Number(this.state.defaultValue - this.state.fixedRates);
            const result = Number(Amount * RealTimePrice).toFixed(8);
          this.setState({
            realtimePrice: RealTimePrice,
            result: result,
            amountConvert: Amount,
          });
        }else{
          let RealTimePrice = res.data.rate.toFixed(3);
          let Amount = Number(this.state.defaultValue - this.state.fixedRates);
          const result = Number(Amount * RealTimePrice).toFixed(4);
          this.setState({
            result: result,
            realtimePrice: RealTimePrice,
            amountConvert: Amount,
          });
        }
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
  calculateRate = (rate) => {
    const fixedRates = Number(rate * this.state.defaultValue).toFixed(3);
    const amountConvert = this.state.defaultValue - fixedRates;
    const result = (amountConvert * this.state.realtimePrice).toFixed(4);
    this.setState({
      fixedRates: fixedRates,
      amountConvert: amountConvert,
      result: result,
    });
  };
  calculateJPYRate = (rate) => {
    const fixedRates = Number(rate * this.state.defaultValue);
    const amountConvert = this.state.defaultValue - fixedRates;
    const realTime = this.state.realtimePrice.toFixed(4);

    const result = (amountConvert * realTime).toFixed(4);
    this.setState({
      fixedRates: fixedRates,
      amountConvert: amountConvert,
      result: result,
    });
  };

  handleInput = (e) => {
    this.setState(
      {
        defaultValue: e.target.value,
      },
      () => {
        if (this.state.defaultValue.length === 0) {
          this.setState({
            fixedRates: 0,
            amountConvert: 0,
            result: 0,
          });
        } else if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue < 100000
        ) {
          this.calculateJPYRate(0.02);
        } else if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 100000 &&
          this.state.defaultValue < 500000
        ) {
          this.calculateJPYRate(0.015);
        } else if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 500000 &&
          this.state.defaultValue < 10000000
        ) {
          this.calculateJPYRate(0.01);
        } else if (
          this.state.ButtonValueOne === "JPY" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 10000000
        ) {
          this.calculateJPYRate(0.007);
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue < 100000
        ) {
          this.calculateRate(0.02);
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 100000 &&
          this.state.defaultValue < 500000
        ) {
          this.calculateRate(0.015);
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 500000 &&
          this.state.defaultValue < 10000000
        ) {
          this.calculateRate(0.01);
        } else if (
          this.state.ButtonValueOne === "USD" &&
          this.state.ButtonValueTwo === "NGN" &&
          this.state.defaultValue >= 10000000
        ) {
          this.calculateRate(0.007);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue < 500000
        ) {
          this.calculateRate(0.03);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue >= 500000 &&
          this.state.defaultValue < 5000000
        ) {
          this.calculateRate(0.015);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue >= 5000000 &&
          this.state.defaultValue < 10000000
        ) {
          this.calculateRate(0.01);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "JPY" &&
          this.state.defaultValue >= 10000000
        ) {
          this.calculateRate(0.007);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue < 500000
        ) {
          this.calculateRate(0.03);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue >= 500000 &&
          this.state.defaultValue < 5000000
        ) {
          this.calculateRate(0.015);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue >= 5000000 &&
          this.state.defaultValue < 10000000
        ) {
          this.calculateRate(0.01);
        } else if (
          this.state.ButtonValueOne === "NGN" &&
          this.state.ButtonValueTwo === "USD" &&
          this.state.defaultValue >= 10000000
        ) {
          this.calculateRate(0.007);
        } else {
          this.calculateRate(0.007);

          // if (this.state.defaultValue < this.state.fixedRates) {
          //   alert(
          //     `You cannot send less than ${this.state.fixedRates} ${this.state.ButtonValueOne}`
          //   );
          // }
        }
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
    setTimeout(() => {
      this.fetchApi();
    }, 1000);
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

  optionsOne = [
    {
      text: "Japanese Yen",
      flagImg: jpyflag,
      flagAlt: "Japanese Flag",
      action: () => {
        this.JPYButtonOneSelect();
        this.toggleModalOne();
      },
    },
    {
      text: "Bitcoin",
      flagImg: btcflag,
      flagAlt: "Bitcoin Flag",
      action: () => {
        this.BTCButtonOneSelect();
        this.toggleModalOne();
      },
    },
    {
      text: "USD Coin",
      flagImg: usdcflag,
      flagAlt: "USDC Flag",
      action: () => {
        this.USDCButtonOneSelect();
        this.toggleModalOne();
      },
    },
    {
      text: "Nigerian Naira",
      flagImg: ngnflag,
      flagAlt: "Nigerian Flag",
      action: () => {
        this.NGNButtonOneSelect();
        this.toggleModalOne();
      },
    },
    {
      text: "USD United States Dollar",
      flagImg: usdflag,
      flagAlt: "Bitcoin Flag",
      action: () => {
        this.USDButtonOneSelect();
        this.toggleModalOne();
      },
    },
  ];

  optionsTwo = [
    {
      text: "Japanese Yen",
      flagImg: jpyflag,
      flagAlt: "Japanese Flag",
      action: () => {
        this.JPYButtonTwoSelect();
        this.toggleModalTwo();
      },
    },
    {
      text: "Bitcoin",
      flagImg: btcflag,
      flagAlt: "Bitcoin Flag",
      action: () => {
        this.BTCButtonTwoSelect();
        this.toggleModalTwo();
      },
    },
    {
      text: "USD Coin",
      flagImg: usdcflag,
      flagAlt: "USDC Flag",
      action: () => {
        this.USDCButtonTwoSelect();
        this.toggleModalTwo();
      },
    },
    {
      text: "Nigerian Naira",
      flagImg: ngnflag,
      flagAlt: "Nigerian Flag",
      action: () => {
        this.NGNButtonTwoSelect();
        this.toggleModalTwo();
      },
    },
    {
      text: "USD United States Dollar",
      flagImg: usdflag,
      flagAlt: "U.S Flag",
      action: () => {
        this.USDButtonTwoSelect();
        this.toggleModalTwo();
      },
    },
  ];
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <CalculatorHeader>
            <img src={DT} alt="Digitrad Icon" />
            <HeaderText>Instant Estimate</HeaderText>
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
                {this.optionsOne.map((option) => (
                  <li onClick={option.action}>
                    <img src={option.flagImg} alt={option.flagAlt} />
                    {option.text}
                  </li>
                ))}
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

                <Amount className="roboto">
                  {this.state.fixedRates} {this.state.ButtonValueOne}
                </Amount>
                <AmountDesc>Transfer Fee (Fixed)</AmountDesc>
              </RatesItemsWrapper>
              <RatesItemsWrapper>
                <IconContainer>
                  <StyledLineIcons icon={faWallet} />
                </IconContainer>
                <Amount className="roboto">
                  {this.state.amountConvert} {this.state.ButtonValueOne}
                </Amount>
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
                {this.optionsTwo.map((option) => (
                  <li onClick={option.action}>
                    <img src={option.flagImg} alt={option.flagAlt} />
                    {option.text}
                  </li>
                ))}
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
    margin: auto;
  }
`;
const Wrapper = styled.div`
  @media (max-width: 426px) {
    width:290px;
    margin:auto;
    ${"" /* width: 100%;
    margin: auto; */}
  }
`;
const ReceiveSection = styled.div`
  display: flex;
  margin-top: -15px;
  @media (max-width: 425px) {
    width: 100%;
    margin: auto;
    margin-top: -15px;
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
    @media (max-width: 425px) {
      width: 150px;
    }
  }
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
    @media (max-width: 425px) {
      width: 150px;
    }
  }
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
  @media (max-width: 425px) {
    width: 100px;
    img {
      width: 20px;
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
  height: 45px;
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
  @media (max-width: 425px) {
    margin-left: -25px;
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
  @media (max-width: 425px) {
    height: 180px;
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
