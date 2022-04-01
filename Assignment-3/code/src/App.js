import React from "react";
import "./App.css";
import Header from "./component/Header";
import CustomerInfo from "./component/CustomerInfo";
import OrderInfo from "./component/OrderInfo";
import ProductList from "./component/ProductList";

var arrow = "<";
function App() {
  return (
    <div className="site-container">
      <Header arrow={arrow} />
      <CustomerInfo />
      <OrderInfo />
      <ProductList />
    </div>
  );
}

export default App;
