import React from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Header() {
    return (
        <Box sx={{ mt: 3, mb: 5, maxWidth: 140 }}>
            <Link href="/">
                <img src="icons/logo.png" alt="logo" width="140px" />
            </Link>
        </Box>
    );
}

export default Header;
