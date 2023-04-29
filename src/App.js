import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);

  const handleRowClick = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const handleColClick = (colIndex) => {
    setSelectedCol(colIndex);
  };

  return (
    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-5">Sukar</h1>
      {[...Array(3)].map((_, rowIndex) => (
        <Row key={rowIndex} className="mb-3">
          {[...Array(3)].map((_, colIndex) => (
            <Col key={colIndex}>
              <div
                className={`cell ${
                  selectedRow === rowIndex || selectedCol === colIndex
                    ? "selected"
                    : ""
                }`}
                onClick={() => {
                  handleRowClick(rowIndex);
                  handleColClick(colIndex);
                }}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default App;
