import React, { Component } from "react";
import { linkData } from "./linkData";
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 2,
    links: linkData,
    cart: []
  };
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // handle sidecart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.sidebarOpen });
  };
  // close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // Open cart
  openeCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openeCart: this.openeCart
        }}
      >
        {this.props.children};
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
