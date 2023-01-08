import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Functional Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
