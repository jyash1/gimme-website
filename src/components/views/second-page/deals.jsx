import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productData } from "services/ProductData";
import { truncate } from "lodash";
import { renderStars } from "services/utiles";

const Deals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const topTwoProducts = productData.slice(0, 3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topTwoProducts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [topTwoProducts.length]);

  if (topTwoProducts.length === 0) {
    return <Typography variant="h6">No products found</Typography>;
  }

  const mainProduct = topTwoProducts[currentIndex];

  return (
    <>
      <Container className="mt-5" id="target-section">
        <Typography variant="h3" sx={{ color: "#000", fontWeight: 700, mb: 2 }}>
          Deals For The Day
        </Typography>
        <Grid
          container
          sx={{
            border: "1px solid black",
            borderRadius: 8,
            padding: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Grid container spacing={2}>
                  {mainProduct.multimage.map((image, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        component="img"
                        src={image.src}
                        alt="cards"
                        sx={{
                          height: 100,
                          borderRadius: 1,
                          border: "1px solid black",
                          width: 100,
                          p: 1,
                          objectFit: "contain",
                          mixBlendMode: "darken",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box
                  component="img"
                  src={mainProduct.Image}
                  alt="cards"
                  sx={{
                    height: 400,
                    width: "100%",
                    objectFit: "contain",
                    mixBlendMode: "darken",
                    marginTop: 3,
                    borderRadius: 4,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#000", fontWeight: 700, lineHeight: 1.3 }}
              >
                {truncate(mainProduct.ProductName, { length: 80 })}
              </Typography>
              <Typography variant="body2">
                {truncate(mainProduct.Description, { length: 80 })}
              </Typography>
              <Typography variant="body2">
                {renderStars(mainProduct.Rating)}
                <span className="mx-2">{mainProduct.Reviews}</span>
              </Typography>
              <Typography variant="h4" sx={{ color: "#000", fontWeight: 700 }}>
                {mainProduct.Price}
              </Typography>
              <Link
                href={`/web/product-details/${mainProduct.id}`}
                className="all-btn"
              >
                Check Now
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box className="mt-2">
          <Swiper
            className="swiper-container"
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            slidesPerView={2}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            {productData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    p: "20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #000",
                    borderRadius: 6,
                    gap: 1,
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "#000", lineHeight: 1.3 }}
                  >
                    {truncate(slide.ProductName, { length: 30 })}
                  </Typography>
                  <Typography variant="body2">
                    {truncate(slide.Description, { length: 80 })}
                  </Typography>
                  <Typography variant="body2">
                    {renderStars(slide.Rating)}
                    <span className="mx-2">{slide.Reviews}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#000", fontWeight: 700 }}
                  >
                    {slide.Price}
                  </Typography>
                  <Link
                    href={`/web/product-details/${slide.id}`}
                    className="all-btn"
                  >
                    Check Now
                  </Link>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default Deals;
