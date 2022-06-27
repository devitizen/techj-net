import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";


export default function Main() {

    const dogBreedFinderDetails = (
        <Box>
            <Box> 
                Android mobile app that identifies the breed of your dog with given image.
                This takes advantage of Google Machine Learning technology.
            </Box>
            <Box sx={{ mt: 1 }}>
                You can download the Android application or visit the website for demo below.
            </Box>
            <Link
                href={"https://play.google.com/store/apps/details?id=com.devitizen.whatdog"}
                target="_blank"
                underline="none"
            >
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 3 }}
                >
                    Google Play
                </Button>
            </Link>
            <Link
                href={"https://dog-breed-finder.techj.net"}
                target="_blank"
                underline="none"
            >
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 3, ml: 1, color: "grey.400", borderColor: "grey.400" }}
                >
                    Web Site
                </Button>
            </Link>
        </Box>
    );

    const flyToFruitsDetails = (
        <Box>
            <Box> 
                Android mobile game where players control a bird to get a higher score 
                by getting fruits and passing through electrical poles as much as possible. 
                The players can tap to flap and swipe to fly the bird and have three chances for one game.
            </Box>
            <Box sx={{ mt: 1 }}>
                You can download this free game from Google Play.
            </Box>
            <Link
                href={"https://play.google.com/store/apps/details?id=com.devitizen.flytofruits"}
                target="_blank"
                underline="none"
            >
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 3 }}
                >
                    Google Play
                </Button>
            </Link>
        </Box>
    );


    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    pt: 4,
                    pb: 10,
                    fontWeight: 600,
                    borderBottom: 0.5,
                    borderColor: "grey.300",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ fontSize: [16, 18, 20], mr: 1 }}>
                        Hey there, I'm Devitizen
                    </Box>
                    <img src={"/images/hello.png"} alt="hello" width={24} />
                </Box>
                <Box sx={{ fontSize: [24, 36, 48], mt: 2 }}>
                    Developing digital products,
                    <br />
                    creating new value
                </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Box sx={{ fontSize: [22, 26, 30], fontWeight: 600, py: [2, 3, 4], ml: [0, 3, 5] }}>
                    The works I did<br />and make you happier.
                </Box>
                <Grid container>
                    <GridItem component={
                        <Work
                            image={"/images/dogBreedFinder.png"}
                            title={"Dog Breed Finder"}
                            details={dogBreedFinderDetails}
                        />
                    } />
                    <GridItem component={
                        <Box sx={{mt: [1, 2, 4]}}>
                            <Work
                                image={"/images/flyToFruits.png"}
                                title={"Fly to Fruits"}
                                details={flyToFruitsDetails}
                            />
                        </Box>
                    } />
                </Grid>
            </Box>
        </>
    );
}


function GridItem(props) {
    return (
        <Grid
            item
            sm={12}
            md={6}
            sx={{ p: [0, 2, 4] }}
        >
            {props.component}
        </Grid>
    );
}

function Work(props) {
    return (
        <Paper sx={{ mb: 3, maxWidth: 500, mx: "auto" }}>
            <Box>
                <img src={props.image} alt={props.title} width="100%" />
            </Box>
            <Box sx={{ fontFamily: "Noto Sans", p: 3 }}>
                <Box sx={{ fontSize: [16, 18, 20], fontWeight: 600 }}>{props.title}</Box>
                <Box sx={{ color: "grey.600", mt: 2, fontSize: [14, 15, 16] }}>{props.details}</Box>
            </Box>
        </Paper>
    );
}
