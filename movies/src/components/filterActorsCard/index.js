import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const StyledCard = styled("div")({
    minHeight: "100%", width: "100%", borderRadius: "15px", backgroundColor: "#202020", padding: "20px",
});

const formControl = {
    margin: 1, minWidth: 220, borderRadius: "12px", width: {xs: "100%", sm: "auto"},
};

export default function FilterActorsCard(props) {

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenderChange = (e) => {
        handleChange(e, "gender", e.target.value);
    };

    return (
        <StyledCard>
            <CardContent>
                <Box sx={{display: "flex", alignItems: "center", marginBottom: 2}}>
                    <SearchIcon fontSize="large" color="primary"/>
                    <Typography variant="h5" component="h2" sx={{marginLeft: 1, color: "white"}}>
                        Search Actors
                    </Typography>
                </Box>

                <TextField
                    sx={formControl}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    value={props.titleFilter}
                    onChange={handleTextChange}
                />

                <Box sx={{display: "flex", alignItems: "center", marginTop: 3}}>
                    <FilterAltIcon fontSize="large" color="primary"/>
                    <Typography variant="h5" component="h3" sx={{marginLeft: 1, color: "white"}}>
                        Filter By Gender
                    </Typography>
                </Box>

                <FormControl sx={formControl}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender-select"
                        value={props.genderFilter}
                        onChange={handleGenderChange}
                    >
                        <MenuItem value="0">All</MenuItem>
                        <MenuItem value="2">Male</MenuItem>
                        <MenuItem value="1">Female</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{display: "flex", alignItems: "center", marginTop: 3}}>
                    <SortIcon fontSize="large" color="primary"/>
                    <Typography variant="h5" component="h3" sx={{marginLeft: 1, color: "white"}}>
                        Sort Actors
                    </Typography>
                </Box>

                <FormControl sx={formControl}>
                    <InputLabel id="sort-label">Sort By</InputLabel>
                    <Select
                        labelId="sort-label"
                        id="sort-select"
                        value={props.sortFilter}
                        onChange={(e) => props.onUserInput("sort", e.target.value)}
                    >
                        <MenuItem value="0">No Sorting</MenuItem>
                        <MenuItem value="popularity-asc">Popularity (Asc)</MenuItem>
                        <MenuItem value="popularity-desc">Popularity (Desc)</MenuItem>

                    </Select>
                </FormControl>

            </CardContent>
        </StyledCard>
    );
}
