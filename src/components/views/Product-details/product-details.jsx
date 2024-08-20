import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import CommonHeader from "./common-header";
import Footer from "../second-page/footer";
import ReviewsComponent from "./reviews";
import RelatedProducts from "./related-products";
import { useParams } from "react-router-dom";
import { productData } from "services/ProductData";
import { truncate } from "lodash";
import { renderStars } from "services/utiles";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <CommonHeader />
      <Container>
        <Grid
          container
          sx={{
            border: "1px solid black",
            borderRadius: 8,
            padding: 4,
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={7}>
            <Grid container>
              {/* <Grid item xs={12} md={3}>
                <Grid container spacing={3}>
                  {productData.map((image, index) => (
                    <Grid item xs={12} key={index}>
                      <img
                        style={{
                          border: "1px solid black",
                          borderRadius: 8,
                          padding: 1,
                        }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid> */}
              <Grid item xs={12} md={9}>
                <Box
                  component="img"
                  src={product.Image}
                  alt="cards"
                  sx={{
                    height: 400,
                    width: "100%",
                    objectFit: "contain",
                    mixBlendMode: "darken",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1.2 }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#000", fontWeight: 700, lineHeight: 1.3 }}
              >
                {product.ProductName}
              </Typography>
              <Typography variant="body2">
                {truncate(product.ProductName, { length: 200 })}
              </Typography>
              <Typography variant="body2">
                {renderStars(product.Rating)}
                <span className="mx-2">{product.Reviews}</span>
              </Typography>
              <Typography variant="h4" sx={{ color: "#000", fontWeight: 700 }}>
                {product.Price}
              </Typography>
              <Link
                href={`${product.ProductUrl}?id=customId`}
                className="all-btn"
                target="_blank"
              >
                Buy Now
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h4" sx={{ color: "#000", mt: 3 }}>
            Colour
          </Typography>
          {/* <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {product.map((slide, index) => (
              <Box key={index}>
                <img
                  style={{
                    border: "1px solid #E3E3E3",
                    borderRadius: 8,
                    padding: 3,
                  }}
                  src={image.src}
                  alt={image.alt}
                />
              </Box>
            ))}
          </Box> */}
          <Typography variant="body2" sx={{ color: "#000", fontWeight: 700 }}>
            {product.Color}
          </Typography>
        </Box>
        {/* <Box>
          <Typography variant="h4" sx={{ color: "#000", mt: 4 }}>
            Size
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {sizes.map((size, index) => (
              <Box key={index} sx={{ border: "1px solid #E3E3E3", p: 1 }}>
                <Typography sx={{ color: "#000", fontWeight: 700 }}>
                  {size.sizemain}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box> */}
        <Box>
          {/* <Typography variant="h4" sx={{ color: "#000", mt: 4 }}>
            Product details
          </Typography> */}
          {/* <Grid container>
            <Grid item xs={12} md={6} sx={{ padding: 4 }}>
              {Productlist.map((lists, index) => (
                <ul
                  key={index}
                  style={{ display: "flex", marginBottom: "8px", gap: 10 }}
                >
                  <li style={{ color: "#000", fontWeight: 700 }}>
                    {lists.Question}
                  </li>
                  <Typography variant="body1">{lists.answer}</Typography>
                </ul>
              ))}
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: 4 }}>
              {Productlist2.map((lists, index) => (
                <ul
                  key={index}
                  style={{ display: "flex", marginBottom: "8px", gap: 10 }}
                >
                  <li style={{ color: "#000", fontWeight: 700 }}>
                    {lists.Question}
                  </li>
                  <Typography variant="body1">{lists.answer}</Typography>
                </ul>
              ))}
            </Grid>
          </Grid> */}
          {/* <Typography variant="h6" sx={{ mt: 2 }}>
            {product.Details}
          </Typography> */}
        </Box>
        <Box>
          <Typography variant="h4" sx={{ color: "#000", mt: 4 }}>
            About Product
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "column",
              padding: 5,
            }}
          >
            {Aboutlist.map((abouts, index) => (
              <ul key={index}>
                <Box>
                  <li style={{ color: "#000", fontWeight: 700 }}>
                    {abouts.Question}
                  </li>
                  <Typography variant="body1">{abouts.answer}</Typography>
                </Box>
              </ul>
            ))}
          </Box> */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            {truncate(product.About, { length: 1000 })}
          </Typography>
        </Box>
        <ReviewsComponent />
        <RelatedProducts />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
