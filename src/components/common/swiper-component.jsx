import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "swiper/swiper-bundle.css";
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Link, Typography } from "@mui/material";
import { truncate } from "lodash";
import { renderStars } from "services/utiles";

const SwiperComponent = ({ slidesData }) => {
  return (
    <Swiper
      style={{ padding: "45px" }}
      slidesPerView={4}
      spaceBetween={50}
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {slidesData.map((slide, index) => {
        return (
          <SwiperSlide className="p-0" key={index}>
            <Box className="product-cards">
              <Box className="card-box" sx={{ height: "100%", width: "100%" }}>
                <Box
                  component="img"
                  src={slide.Image}
                  alt="cards"
                  sx={{
                    height: 150,
                    width: "100%",
                    objectFit: "contain",
                    mixBlendMode: "darken",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: 700, lineHeight: 1.3, mt: 2 }}
              >
                {truncate(slide.ProductName, { length: 50 })}
              </Typography>
              <Typography variant="body2">
                {truncate(slide.Description, { length: 25 })}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography>{renderStars(slide.Rating)}</Typography>
                <Typography variant="body2">{slide.Reviews}</Typography>
              </Box>
              <Box className="mt-4">
                <Link
                  href={`/web/product-details/${slide.id}`}
                  className="card-link"
                >
                  View Product
                  <ArrowRightAltIcon />
                </Link>
              </Box>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
