import React, {useState} from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import FilterCard from "../filterActorsCard";
import Grid from "@mui/material/Grid2";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";

function ActorListPageTemplate({actors, title}) {
    const [nameFilter, setNameFilter] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);

    let displayedActors = actors.filter((actor) => {
        return actor.name.toLowerCase().includes(nameFilter.toLowerCase());
    });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
    };

    return (
        <>
            <Grid container>
                <Grid size={12} sx={{marginTop: "17px"}}>
                    <Header title={title}/>
                </Grid>
                <Grid container item spacing={3} sx={{flex: "1 1 500px", padding: "30px"}}>
                    <ActorList actors={displayedActors}></ActorList>
                </Grid>
            </Grid>
            <Fab
                color="primary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={{
                    marginTop: 11,
                    position: "fixed",
                    top: 2,
                    right: 10,
                }}
            >
                Filter Actors
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={handleChange}
                    nameFilter={nameFilter}
                />
            </Drawer>
        </>
    );
}

export default ActorListPageTemplate;