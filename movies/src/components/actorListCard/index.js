import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import img from '../../images/actor-placeholder.png';
import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {styled} from "@mui/material/styles";
import {ActorsContext} from "../../contexts/actorsContext";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import {Box} from '@mui/material';

const StyledCard = styled(Card)({
    minHeight: 360,
    width: '100%',
    backgroundColor: '#202020',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',


    },
});


const StyledCardMedia = styled(CardMedia)({
    height: 380,
    objectFit: 'contain',
    display: 'block',
    '&:hover': {
        opacity: '0.8',
    }

})


export default function ActorCard({actor, action}) {
    const {favorites} = useContext(ActorsContext);

    if (favorites.find((id) => id === actor.id)) {
        actor.favorite = true;
    } else {
        actor.favorite = false;
    }

    const genderIcon = actor.gender === 1 ? <FemaleIcon sx={{color: '#FF3131'}}/> : <MaleIcon sx={{color: '#FF3131'}}/>;

    return (
        <StyledCard>
            <Link to={`/actors/${actor.id}`} style={{textDecoration: 'none'}}>
                <StyledCardMedia
                    image={
                        actor.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                            : img
                    }
                />
            </Link>

            <CardContent sx={{paddingBottom: 2}}>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'flex-start',
                        paddingTop: 1,
                    }}
                >
                    <Grid item xs={12} sx={{width: '100%', marginBottom: 1}}>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 600,
                                color: 'white',
                                fontSize: '1.2rem',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                maxWidth: '100%',
                            }}
                        >
                            {actor.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey',
                                fontSize: '1rem',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                paddingTop: '2px',
                            }}
                        >
                            Actor
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 1,
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 500,
                                marginRight: 2,
                            }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                {genderIcon}
                                <Typography
                                    variant="body1"
                                    sx={{marginLeft: 1}}
                                >
                                    {actor.gender === 1 ? 'Female' : 'Male'}
                                </Typography>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions disableSpacing sx={{paddingTop: 0}}>
                {action(actor)}
            </CardActions>
        </StyledCard>
    );
}
