import React from "react";
import Slider from "../../features/slider/slider";
import Banner from "../../features/banner/banner";
import ProductSlider from "../../features/productSlider/productSlider";
import BottomBanner from '../../features/bottomBanner/bottomBanner';

const Home = () => (
  <section>
    <Slider />
    <Banner />
    <ProductSlider title='Polecane produkty' />
    <ProductSlider  title='Nowości'/>
    <BottomBanner/>
  </section>
);

export default Home;
