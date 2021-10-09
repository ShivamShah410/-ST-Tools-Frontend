import React, { useState } from "react";

function DataGenerator() {
    
  const [env, setEnv] = useState("Choose env");
  const [data, setData] = useState("Choose Data");

  const handleEnvChange = (event) => {
    setEnv(event.target.value);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const fetchData = async () => {
    console.log(env);
    console.log(data);
    let url = `http://localhost:3000/datagenerator/${env}/environment/${data}/datatype`;
    let output = await fetch(url);

  };

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
          value={env}
          onChange={handleEnvChange}
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
          value={data}
          onChange={handleDataChange}
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
        onClick={fetchData}
      >
        Generate Data
      </button>
      <br />

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your Data :
        </label>
        <textarea
          className="form-control"
          id="outputData"
          rows="1"
          style={{ width: "300px", margin: "auto" }}
        ></textarea>
      </div>
    </div>
  );
}

export default DataGenerator;
