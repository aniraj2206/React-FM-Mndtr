import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Hf extends Component {
  isHeader = true;

  render() {
    this.isHeader = this.props.typeHF;

    return (
        <div>
        { this.isHeader === true &&
            <Header />
        }
        { this.isHeader === false &&
            <Footer />
        }
        </div>
      );
  }
}

export default Hf;
