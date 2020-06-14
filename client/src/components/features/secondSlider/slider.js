import React, { Component } from "react";
import styles from "./slider.module.scss";
import Card from '../../common/card/card';


class HorizontalCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
        current_card:0,
    };
  }
  handleNext=()=>{
    let new_current_card = this.state.current_card +1;

    this.setState({current_card: new_current_card},()=>{
        
    });
  }
  handlePrevious=()=>{
      
}
  render() {
    return (
      <div>
        <div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default HorizontalCarousel;
