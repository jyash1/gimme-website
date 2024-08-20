import EastIcon from "@mui/icons-material/East";
import { Box, Container, Typography } from "@mui/material";
import SwiperComponent from "components/common/swiper-component";
import { productData } from "services/ProductData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const AllProduct = () => {
  return (
    <>
      <Container className="mt-4">
        <Typography variant="h3" sx={{ color: "#000", fontWeight: 700 }}>
          Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography variant="h3" sx={{ color: "#000", fontWeight: 600 }}>
            All Products
          </Typography>
        </Box>
        <SwiperComponent slidesData={productData} />
      </Container>
    </>
  );
};

export default AllProduct;
