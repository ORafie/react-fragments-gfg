import React, { Fragment } from 'react';
/*
// App.js file code
import './App.css';

// Creating the Row component
const Row = ({ children }) => <div className="row">{children}</div>;

// Creating the Column component
const Column = ({ children }) => <div className="col">{children}</div>;

// Creating the Shadecard component
const Shadecard = ({ color, shade }) => (
  <div className="card" style={{ backgroundColor: color }}>
    {shade}
  </div>
);

const App = () => {
  return (
    <Row>
      <Column>
        <Shadecard color="rgb(224,255,255)" shade="Light Cyan" />
      </Column>
      <Column>
        <Shadecard color="rgb(175,238,238)" shade="pale turquoise" />
      </Column>
      <Column>
        <Shadecard color="rgb(0,255,255)" shade="Aqua" />
      </Column>
      <Column>
        <Shadecard color="rgb(64,224,208)" shade="Turquoise" />
      </Column>
      <Column>
        <Shadecard color="rgb(0,206,209)" shade="Dark Turquoise" />
      </Column>
      <Column>
        <Shadecard color="rgb(0,128,128)" shade="Teal" />
      </Column>
      <Column>
        <Shadecard color="rgb(95,158,160)" shade="Cadet Blue" />
      </Column>
      <Column>
        <Shadecard color="rgb(47,79,79)" shade="Slate Gray" />
      </Column>
    </Row>
  );
}

export default App;
*/

// Modifying the app.js file
import './App.css';

const Row = ({ children }) => <div className="row">{children}</div>;

const Column = ({ children }) => <div className="col">{children}</div>;

const Shadecard = ({ color, shade }) => (
  <div className="card" style={{ backgroundColor: color }}>
    {shade}
  </div>
);

// Separating the light colors into a different component
const Lightshades = () => {
  return (
    <>
      <Column>
        <Shadecard color="rgb(224,255,255)" shade="Light Cyan" />
      </Column>
      <Column>
        <Shadecard color="rgb(175,238,238)" shade="pale turquoise" />
      </Column>
      <Column>
        <Shadecard color="rgb(0,255,255)" shade="Aqua" />
      </Column>
      <Column>
        <Shadecard color="rgb(64,224,208)" shade="Turquoise" />
      </Column>
    </>
  );
};

const App = () => {
  return (
    <Row>
      <Lightshades />
      <Column>
        <Shadecard color="rgb(0,206,209)" shade="Dark Turquoise" />
      </Column>
      <Column>
        <Shadecard color="rgb(0,128,128)" shade="Teal" />
      </Column>
      <Column>
        <Shadecard color="rgb(95,158,160)" shade="Cadet Blue" />
      </Column>
      <Column>
        <Shadecard color="rgb(47,79,79)" shade="Slate Gray" />
      </Column>
    </Row>
  );
};

export default App;
