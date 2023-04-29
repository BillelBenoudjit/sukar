import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);

  const handleRowClick = (rowIndex) => {
    setSelectedRow(rowIndex);
    setSelectedCol(null);
  };

  const handleColClick = (colIndex) => {
    setSelectedRow(null);
    setSelectedCol(colIndex);
  };

  return (
    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-5">Sukar</h1>
      {[...Array(3)].map((_, rowIndex) => (
        <Row key={rowIndex} className="mb-3 align-items-center">
          <Col xs="auto" className="pr-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rowRadio"
                id={`rowRadio${rowIndex}`}
                checked={selectedRow === rowIndex}
                onChange={() => handleRowClick(rowIndex)}
              />
              <label className="form-check-label" htmlFor={`rowRadio${rowIndex}`}>
                Row {rowIndex + 1}
              </label>
            </div>
          </Col>
          {[...Array(3)].map((_, colIndex) => (
            <Col key={colIndex}>
              <div
                className={`cell ${
                  selectedRow === rowIndex || selectedCol === colIndex
                    ? "selected"
                    : ""
                }`}
                onClick={() => {
                  setSelectedRow(null);
                  setSelectedCol(colIndex);
                }}
              />
            </Col>
          ))}
        </Row>
      ))}
      <Row className="mb-3 justify-content-center">
        {[...Array(3)].map((_, colIndex) => (
          <Col xs="auto" key={colIndex} className="pr-3" style={{marginRight: 50}}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="colRadio"
                id={`colRadio${colIndex}`}
                checked={selectedCol === colIndex}
                onChange={() => handleColClick(colIndex)}
              />
              <label className="form-check-label" htmlFor={`colRadio${colIndex}`}>
                Column {colIndex + 1}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
