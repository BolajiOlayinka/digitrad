import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faWallet } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCoins } from "@fortawesome/free-solid-svg-icons";
// import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { faWallet } from "@fortawesome/free-solid-svg-icons";
import ngnflag from "../assets/flags/nigeria.svg";

import jpyflag from "../assets/flags/japan.svg";
import usdflag from "../assets/flags/usa.svg";
import btcflag from "../assets/flags/btc.svg";
import usdcflag from "../assets/flags/usdc.svg";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";

export default class Calc extends Component {
  state = {
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
  componentDidMount() {
    // axios.get("https://api.nomics.com/v1/currencies/ticker?key=faad65ad538a46ad1a3a66a3db9b6386&ids=BTC,USDC,USD,JPY")
    // .then((res)=>{
    //   let BTCPrice= (Number(res.data['0']['price'])).toFixed(3)
    //   let USDCPrice=res.data['1']['price']
    //   let RealTimePrice=(Number(res.data['1']['price'])).toFixed(3)

    //   this.setState({
    //     BTCPrice:BTCPrice,
    //     USDCPrice:USDCPrice,
    //     realtimePrice:RealTimePrice
    //   })

    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    axios
    .get(
      `http://rest.coinapi.io/v1/exchangerate/BTC/NGN?apiKey=79092290-DA92-406B-BA02-E1D84B48AA18`
    )

    .then((res) => {
     
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });



    axios
      .get(
        `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`
      )

      .then((res) => {
        let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
        if (this.state.defaultValue){
          let result = Number(this.state.defaultValue * RealTimePrice).toFixed(2);
          this.setState({
            result: result,
            realtimePrice: RealTimePrice,
          });
        }else{
          let result = Number(0 * RealTimePrice).toFixed(2);
          this.setState({
            result: result,
            realtimePrice: RealTimePrice,
          });
        }
        
        // console.log(result)
        
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.realTimePrice);
    this.calculate();
  }

  calculate = () => {
    if (this.state.defaultValue === isNaN) {
      return;
    } else {
      const result = this.state.defaultValue * this.state.realtimePrice;
      //   axios.get(`https://api.nomics.com/v1/currencies/ticker?key=faad65ad538a46ad1a3a66a3db9b6386&ids=${this.state.ButtonValueOne}`)
      //   .then((res)=>{
      //     const result = (res.data['0']['price'] * this.state.defaultValue).toFixed(2)
      //     console.log(result)
      this.setState({
        result: result,
      });
      //   })
      // }
      console.log(this.state.result);
    }
  };
  CalcBTC = () => {
    let realTimePrice = this.state.BTCPrice;
    let result = Number(this.state.defaultValue * realTimePrice);
    // console.log(result)
    this.setState({
      result: result,
    });
  };

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
    this.setState({
      defaultValue: e.target.value,
      
    });
    console.log(this.state.defaultValue)
    this.calculate();
  };

  JPYButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "JPY",
      ButtonFlagOne: jpyflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
            let result = Number(
              this.state.defaultValue * RealTimePrice
            ).toFixed(2);

            this.setState({
              result: result,
              realtimePrice: RealTimePrice,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
  };
  JPYButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "JPY",
      ButtonFlagTwo: jpyflag,
    });
     const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
            let result = Number(
              this.state.defaultValue * RealTimePrice
            ).toFixed(2);

            this.setState({
              result: result,
              realtimePrice: RealTimePrice,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
  };
  BTCButtonOneSelect = () => {
    

    this.setState({
      ButtonValueOne: "BTC",
      ButtonFlagOne: btcflag,
      
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `http://rest.coinapi.io/v1/exchangerate/${this.state.ButtonValueOne}/${this.state.ButtonValueTwo}?apiKey=79092290-DA92-406B-BA02-E1D84B48AA18`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.data.rate) {
              return
            }else{
              let RealTimePrice = res.data.rate
              let result = Number(
                this.state.defaultValue * RealTimePrice
              ).toFixed(2);
              this.setState({
                result: result,
                realtimePrice: RealTimePrice,
            }) 
            }
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
   
  };
  BTCButtonTwoSelect = () => {
   
    this.setState({
      ButtonValueTwo: "BTC",
      ButtonFlagTwo: btcflag,
      
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `http://rest.coinapi.io/v1/exchangerate/${this.state.ButtonValueOne}/${this.state.ButtonValueTwo}?apiKey=79092290-DA92-406B-BA02-E1D84B48AA18`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.data.rate) {
              return
            }else{
              let RealTimePrice = res.data.rate
              let result = Number(
                this.state.defaultValue * RealTimePrice
              ).toFixed(2);
              this.setState({
                result: result,
                realtimePrice: RealTimePrice,
            }) 
            }
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
   
  };
  USDCButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "USDC",
      ButtonFlagOne: usdcflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `http://rest.coinapi.io/v1/exchangerate/${this.state.ButtonValueOne}/${this.state.ButtonValueTwo}?apiKey=79092290-DA92-406B-BA02-E1D84B48AA18`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.data.rate) {
              return
            }else{
              let RealTimePrice = res.data.rate
              let result = Number(
                this.state.defaultValue * RealTimePrice
              ).toFixed(2);
              this.setState({
                result: result,
                realtimePrice: RealTimePrice,
            }) 
            }
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
   
  };
  USDCButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "USDC",
      ButtonFlagTwo: usdcflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `http://rest.coinapi.io/v1/exchangerate/${this.state.ButtonValueOne}/${this.state.ButtonValueTwo}?apiKey=79092290-DA92-406B-BA02-E1D84B48AA18`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.data.rate) {
              return
            }else{
              let RealTimePrice = res.data.rate
              let result = Number(
                this.state.defaultValue * RealTimePrice
              ).toFixed(2);
              this.setState({
                result: result,
                realtimePrice: RealTimePrice,
            }) 
            }
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
   
  };
  NGNButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "NGN",
      ButtonFlagOne: ngnflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log(this.state.ButtonValueOne);
            let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
            let result = Number(
              this.state.defaultValue * RealTimePrice
            ).toFixed(2);
            console.log(result);
            this.setState({
              result: result,
              realtimePrice: RealTimePrice,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
  };

  NGNButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "NGN",
      ButtonFlagTwo: ngnflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
            let result = Number(
              this.state.defaultValue * RealTimePrice
            ).toFixed(2);

            this.setState({
              result: result,
              realtimePrice: RealTimePrice,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
  };
  USDButtonOneSelect = () => {
    this.setState({
      ButtonValueOne: "USD",
      ButtonFlagOne: usdflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
            let result = Number(
              this.state.defaultValue * RealTimePrice
            ).toFixed(2);
            console.log(result);
            this.setState({
              result: result,
              realtimePrice: RealTimePrice,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
  };

  USDButtonTwoSelect = () => {
    this.setState({
      ButtonValueTwo: "USD",
      ButtonFlagTwo: usdflag,
    });
    const waitTime = 1000;
    setTimeout(
      () =>
        axios({
          method: "get",
          url: `https://free.currconv.com/api/v7/convert?q=${this.state.ButtonValueOne}_${this.state.ButtonValueTwo}&compact=ultra&apiKey=9509b95cfecfc65f9740`,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            let RealTimePrice = Number(Object.values(res.data)[0]).toFixed(4);
            let result = Number(
              this.state.defaultValue * RealTimePrice
            ).toFixed(2);

            this.setState({
              result: result,
              realtimePrice: RealTimePrice,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }),
      waitTime
    );
  };

  render() {
    return (
      <React.Fragment>
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
            
              <Amount>780,000</Amount>
              <AmountDesc>Transfer rate (Fixed)</AmountDesc>
            </RatesItemsWrapper>
            <RatesItemsWrapper>
            <IconContainer>
            <StyledLineIcons icon={faWallet} />
            </IconContainer>
              <Amount>980,000</Amount>
              <AmountDesc>Amount We will convert</AmountDesc>
            </RatesItemsWrapper>
            <RatesItemsWrapper>
            <IconContainer>
            <StyledLineIcons icon={faExchangeAlt} />
            </IconContainer>
              <Amount>{this.state.realtimePrice}</Amount>
              <AmountDesc>Guaranteed Rates (10 mins)</AmountDesc>
            </RatesItemsWrapper>
          </FixedRates>
        </RatesSection>

        <ReceiveSection>
          <OutputSection>
            <p>You receive</p>
            <input
              type="number"
              autoComplete="off"
              disable="true"
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
      </React.Fragment>
    );
  }
}

const SendSection = styled.div`
  display: flex;
`;
const ReceiveSection = styled.div`
  display: flex;
  margin-top: -15px;
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
  }
  p {
    margin-bottom: 5px;

    padding-top: 7px;
    padding-left: 3px;
    height: 20px;
    color: var(--color-accent);
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
  }
  p {
    margin-bottom: 5px;

    padding-top: 7px;
    padding-left: 3px;
    height: 20px;
    color: var(--color-accent);
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
const StyledModalHeader = styled(ModalHeader) `

${'' /* padding-left:40px;
padding-bottom:15px;
padding-top:5px; */}
height:30px;
padding:13px 16px 11px;


color:black;
h5{
  font-size:14px!important;
}
button{
  font-size:14px!important;
}
`
const StyledModalBody = styled(ModalBody) `

padding-top:0px;
h5{
  font-size:14px!important;
}
button{
  font-size:14px!important;
}
`
const RatesSection = styled.div`
  display: flex;
  margin-top: -15px;
  ${"" /* align-items:center; */}
`;
const RatesItemsWrapper = styled.div `
display:flex;
margin-top:10px;
margin-bottom:10px;
`
const IconContainer = styled.div `

text-align:center;
margin-right:20px;
margin-left:-30px;
z-index:10;

`
const StyledLineIcons = styled(FontAwesomeIcon) `
font-size:20px;
color:var(--mainGreen);
background-color:black;
padding:5px;
border-radius:3px;
`
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
`;
const FixedRates = styled.div`
  padding-top: 15px;
  width: 90%;
`;
const Amount = styled.p`
  width: 30%;
  color: white;
  :second-child {
    color: #d3d5d8;
  }
`;
const AmountDesc = styled.p`
  color: #eaeaea;
  :second-child {
    color: #d3d5d8;
  }
  :last-child() {
    color: #00b9ff;
  }
`;
