import React, { Component } from "react";

import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="page-container">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
