import React, { Component } from "react";
import styles from "./slider.module.scss";
import PropTypes from "prop-types";
import Container from "../../layout/container/container";
import Arrow from "../../common/arrow/arrow";
import Card from "../../common/card/card";
import data from "../../../data/data";

class Slider extends Component {
  state = {
    image: data.slider,
    activeImage: 0,
    transform: 0,
    interval: false,
  };
  handleSliderChange(newImage) {
    this.setState({ activeImage: newImage });
  }
  componentDidMount() {
    setInterval(() => {
      this.nextSlider();
    }, 3000);
  }
  onMouseEnter = () => {
    this.setState({
      interval: true,
    });
    console.log(this.state.interval);
  };
  onMouseOut = () => {
    console.log("działa1");
    this.setState({
      interval: false,
    });
    console.log(this.state.interval);
  };
  
  nextSlider = () => {
    if (
      this.state.activeImage < this.state.image.length - 1 &&
      this.state.interval === false
    ) {
      const i = this.state.activeImage;

      this.setState(
        {
          activeImage: i + 1,
        },
        () => {
          this.card_container.style.transitionDuration = "0.5s";
          this.card_container.style.transform = `translate(-${
            1220 * this.state.activeImage
          }px)`;
        }
      );
      console.log(i);
    } else if (this.state.interval === false) {
      this.setState({ activeImage: 0 }, () => {
        this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${
          1220 * this.state.activeImage
        }px)`;
      });
    } else {
      return;
    }
  };
  prevSlider = () => {
    if (this.state.activeImage > 0) {
      const i = this.state.activeImage;
      this.setState({ activeImage: i - 1 }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${
          1220 * this.state.activeImage
        }px)`;
      });
    } else {
      this.setState({ activeImage: this.state.image.length - 1 }, () => {
        this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${
          1220 * this.state.activeImage
        }px)`;
      });
    }
  };

  render() {
    const { image, activeImage } = this.state;
    const sliderCount = Math.ceil(image.length - 1);

    const dots = [];
    for (let i = 0; i <= sliderCount; i++) {
      dots.push(
        <li>
          <button
            onClick={() => this.handleSliderChange(i)}
            className={i === activeImage && styles.active}
          >
            image{i}
          </button>
        </li>
      );
    }

    return (
      <div className={styles.sliderBgc}>
        <Container>
          <div id="main-slider" className={styles.slider}>
            <div className={styles.show}>
              <Arrow
                direction="left"
                color="light"
                handleClick={this.prevSlider}
              />
            </div>

            <div className={styles.slick_list}>
              <div
                className={styles.slick_track}
                style={style.card_container}
                ref={(ref_id) => (this.card_container = ref_id)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseOut}
              >
                {image.map((elem) => (
                  <Card key={elem.id} cardSrc={elem.image} />
                ))}
              </div>
            </div>
            <ul className={styles.slick_dots}>{dots}</ul>
            <div className={styles.show}>
              <Arrow
                direction="right"
                color="light"
                handleClick={this.nextSlider}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
const style = {
  card_container: {},
};

Slider.propTypes = {
  children: PropTypes.node,
  imageSlider: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};
Slider.defaultProps = {
  imageSlider: [],
};
export default Slider;
