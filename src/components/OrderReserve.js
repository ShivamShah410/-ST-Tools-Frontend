import React, { Component } from "react";

export class OrderReserve extends Component {
  constructor() {
    super();
    this.state = {
      env: "",
      ord_num: "",
      out: "",
      msisdnIsCheck: false,
      iccidIsCheck: false,
      orderIsCheck: false,
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      env: "",
      ord_num: "",
      out: "",
      msisdnIsCheck: false,
      iccidIsCheck: false,
      orderIsCheck: false,
      loading: false,
    });
  }

  handleEnvChange = (event) => {
    this.setState({ env: event.target.value });
  };

  ordNumChange = (event) => {
    this.setState({ ord_num: event.target.value });
  };

  msisdnSet = () => {
    this.setState({ msisdnIsCheck: !this.state.msisdnIsCheck });
  };

  iccidSet = () => {
    this.setState({ iccidIsCheck: !this.state.iccidIsCheck });
  };

  orderSet = () => {
    this.setState({ orderIsCheck: !this.state.orderIsCheck });
  };

  reserveData = () => {
    // console.log("Order reserved successfully");
    this.setState({
        out: "Order reserved successfully"
    })
  }

  render() {
    return (
      <div>
        <div className="container my-3 text-center">
          <div className="text-center">
            <h3>Welcome to Order Reserve tool...!!</h3>
            <br />
          </div>
          <div className="mb-3">
            Select environment :
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
              style={{ width: "150px", margin: "auto" }}
              value={this.state.env}
              onChange={this.handleEnvChange}
            >
              <option defaultValue="Choose env">Choose env</option>
              <option value="E2">E2</option>
              <option value="E8">E8</option>
              <option value="C4">C4</option>
            </select>
          </div>

          <div className="mb-3">
            Enter your Order No. :
            <input
              className="form-control"
              type="text"
              style={{ width: "300px", margin: "auto" }}
              placeholder="Order Number"
              aria-label="default input example"
              value={this.state.ord_num}
              onChange={this.ordNumChange}
            ></input>
          </div>

          <div className="mb-3" style={{ width: "100px", margin: "auto" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={this.state.msisdnIsCheck}
                onChange={this.msisdnSet}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                msisdn
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked={this.state.iccidIsCheck}
                onChange={this.iccidSet}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                iccid
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked={this.state.orderIsCheck}
                onChange={this.orderSet}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                order
              </label>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ margin: "10px 10px" }}
            onClick={this.reserveData}
          >
            Reserve
          </button>
          <br />

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Output :
            </label>
            <textarea
              className="form-control text-center"
              id="outputData"
              rows="1"
              style={{ width: "300px", margin: "auto" }}
              value={this.state.out}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderReserve;
