import { Component, Fragment } from "react";
import Hero from "../../components/hero/Hero";
import Header from "../../components/layouts/header/Header";
import Products from "../../components/products/Products";
import Footer from "../../components/layouts/footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Hero />
          <Products />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
