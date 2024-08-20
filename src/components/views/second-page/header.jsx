import { Box } from "@mui/material";
import React from "react";
import SecondPageBanner from "./banner";
import Deals from "./deals";
import TrendingProducts from "./trending-products";
import AllProduct from "./all-product";
import Footer from "./footer";
import imageurl from "services/images";

const HeaderSecond = () => {
  return (
    <>
      <Box>
        <img
          src={imageurl.secondLogo}
          alt="Login-logo"
          style={{
            margin: "auto",
            padding: 10,
            maxWidth: "90%",
            mixBlendMode: "darken",
          }}
        />
      </Box>
      <SecondPageBanner />
      <Deals />
      <TrendingProducts />
      <AllProduct />
      <Footer />
    </>
  );
};

export default HeaderSecond;
