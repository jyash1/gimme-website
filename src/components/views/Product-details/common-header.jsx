import React from "react";
import { Box } from "@mui/material";
import imageurl from "services/images";

const CommonHeader = () => {
    return (
        <>
            <Box sx={{
                background: "#375C65",
                color: "white",
                textAlign: "center",
            }}>

                <img
                    src={imageurl.frameLogo}
                    alt="Login-logo"
                    style={{
                        margin: "auto",
                        padding: 12,
                        width: "40%",
                        maxWidth: "250px"
                    }}
                />
            </Box>
        </>
    );
};

export default CommonHeader;
