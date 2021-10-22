import React, { Component } from "react";

export class CurResponse extends Component {
  constructor() {
    super();
    this.state = {
      env: "",
      ord_num: "",
      out: "",
      loading: false,
    };
  }

  handleEnvChange = (event) => {
    this.setState({ env: event.target.value });
  };

  ordNumChange = (event) => {
    this.setState({ ord_num: event.target.value });
  };

  postCur = () => {
    // console.log("Cur Response posted successfully");
    this.setState({
        out: "Cur Response posted successfully"
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
              // placeholder="Order Number"
              aria-label="default input example"
              value={this.state.ord_num}
              onChange={this.ordNumChange}
            ></input>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ margin: "10px 10px" }}
            onClick={this.postCur}
          >
            Post Cur Response
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

export default CurResponse;
