import React, { Component } from "react";

export class DataGenerator extends Component {
  constructor() {
    super();
    this.state = {
      env: "",
      data: "",
      out: "",
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      env: "",
      data: "",
      out: "",
    });
  }

  handleEnvChange = (event) => {
    this.setState({ env: event.target.value });
  };

  handleDataChange = (event) => {
    this.setState({ data: event.target.value });
  };

  fetchData = async () => {
    console.log(this.state.data);
    console.log(this.state.env);
    let url = `http://localhost:8080/getdata/${this.state.data}`;
    console.log(url);
    let output = await fetch(url);
    // console.log(output);

    let parsedOp = await output.json();
    // console.log(parsedOp);
    let targateData = this.state.data;

    this.setState({
      out: parsedOp[targateData],
    });
  };

  render() {
    return (
      <div className="container my-3 text-center">
        <div className="text-center">
          <h3>Welcome to data generator tool...!!</h3>
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
          Select the tyoe of data :
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
            style={{ width: "150px", margin: "auto" }}
            value={this.state.data}
            onChange={this.handleDataChange}
          >
            <option defaultValue="Choose env">Choose data</option>
            <option value="msisdn">msisdn</option>
            <option value="iccid">iccid</option>
            <option value="router">router</option>
            <option value="imei">imei</option>
          </select>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px 10px" }}
          onClick={this.fetchData}
        >
          Generate Data
        </button>
        <br />

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your Data :
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
    );
  }
}

export default DataGenerator;
