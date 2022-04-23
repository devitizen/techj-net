import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

function Footer() {
    const [openCredits, setOpenCredits] = useState(false);

    const creditsOpenHandler = () => {
        setOpenCredits(true);
    };

    const creditsCloseHandler = () => {
        setOpenCredits(false);
    };

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        fontSize: 14
    };

    return (
        <>
            <Box
                sx={{
                    my: 5,
                    borderTop: 1,
                    borderColor: "grey.200",
                    fontSize: 10,
                    color: "grey.500",
                }}
            >
                <Box sx={{ ml: 5 }}>
                    <Button onClick={creditsOpenHandler}>
                        <Box sx={{ fontSize: 10, color: "grey.400" }}>
                            Credits
                        </Box>
                    </Button>
                </Box>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                    © Devitizen 2022. All Rights Reserved.
                </Box>
            </Box>
            <Modal
                open={openCredits}
                onClose={creditsCloseHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Box>This website uses wonderful icons from</Box>
                    <Box sx={{ mt: 1}}>
                        <a
                            href="https://www.flaticon.com/free-icons/hello"
                            title="hello icons"
                        >
                            Hello icons created by Freepik - Flaticon
                        </a>
                    </Box>
                    <Box sx={{ mt: 4, textAlign: "center" }}>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={creditsCloseHandler}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

export default Footer;
