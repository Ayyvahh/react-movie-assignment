import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import {styled} from "@mui/material/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from "../../images/actor-placeholder.png";

const StyledCard = styled(Card)(({theme}) => ({
    width: "100%",
    maxWidth: 300,
    minHeight: 400,
    backgroundColor: "#202020",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
        minHeight: 360,
    },
}));


const StyledCardMedia = styled(CardMedia)({
    height: 360,
    objectFit: "cover",
    display: "block",
    "&:hover": {
        opacity: 0.8,
    },
});

export default function ActorCard({actor}) {
    return (
        <StyledCard>
            <StyledCardMedia
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : img
                }
                alt={actor.name}
            />
            <CardContent sx={{paddingBottom: 2}}>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingTop: 1,
                    }}
                >
                    <Grid item xs={12} sx={{width: "100%", marginBottom: 1}}>
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                fontWeight: 600,
                                color: "white",
                                fontSize: "1rem",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                maxWidth: "100%",
                            }}
                        >
                            {actor.name}
                        </Typography>
                    </Grid>

                    {/* Character Name */}
                    <Grid item xs={12}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "grey",
                                fontSize: "0.8rem",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                maxWidth: "100%",
                            }}
                        >
                            as {actor.character || "Unknown"}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 500,
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                maxWidth: "100%",
                            }}
                        >
                            <StarRateIcon
                                fontSize="small"
                                sx={{marginRight: 0.5, color: "#FF3131"}}
                            />
                            Popularity: {actor.popularity.toFixed(1)}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing sx={{paddingTop: 0}}>
            </CardActions>
        </StyledCard>
    );
}
