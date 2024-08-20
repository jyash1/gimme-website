import React from "react";
import { Box, Typography } from "@mui/material";
import SwiperComponent from "components/common/swiper-component";
import EastIcon from "@mui/icons-material/East";
import { Container } from "react-bootstrap";
import { productData } from "services/ProductData";

const RelatedProducts = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#000", fontWeight: 600 }}>
          Other Products
        </Typography>
      </Box>
      <SwiperComponent slidesData={productData} />
    </Container>
  );
};

export default RelatedProducts;
