import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import imageurl from "services/images";

const SecondPageBanner = () => {
  return (
    <>
      <Box sx={{ paddingY: 1 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src={imageurl.banner1} alt="Login-logo" className="w-100" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={imageurl.banner2}
                alt="First Banner"
                className="w-100"
              />
              <Box
                sx={{
                  position: "absolute",
                  color: "#fff",
                  zIndex: 10,
                  mx: 2,
                }}
              >
                <Typography
                  sx={{ lineHeight: 1.1, mx: { xs: 0, md: 3 } }}
                  variant="h2"
                >
                  It’s Time for superior Quality & unbeatable Offers.
                </Typography>

                <Typography
                  className="mt-2"
                  variant="h4"
                  sx={{ color: "#D3D3D3", mx: { xs: 0, md: 3 } }}
                >
                  Lorem ipsum dolor sit amet,
                </Typography>
                <Button
                  className="explore-btn"
                  disableRipple={true}
                  size="small"
                  sx={{
                    mt: 3,
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    p: "10px 40px",
                    borderRadius: 2,
                    mx: { xs: 0, md: 3 },
                  }}
                >
                  Explore More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SecondPageBanner;
