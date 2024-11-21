import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const StyledCard = styled("div")({
    minHeight: "100%",
    width: "100%",
    borderRadius: "15px",
    backgroundColor: "#202020",
    padding: "20px",
});

const formControl = {
    margin: 1,
    minWidth: 220,
    borderRadius: "12px",
    width: {xs: "100%", sm: "auto"},
};

export default function FilterActorsCard() {
    return (
        <StyledCard>
            <CardContent>
                <Box sx={{display: "flex", alignItems: "center", marginBottom: 2}}>
                    <SearchIcon fontSize="large" color="primary"/>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{marginLeft: 1, color: "white"}}
                    >
                        Search Actors
                    </Typography>
                </Box>

                <TextField
                    sx={formControl}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    disabled
                />

                <Box sx={{display: "flex", alignItems: "center", marginTop: 3}}>
                    <FilterAltIcon fontSize="large" color="primary"/>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{marginLeft: 1, color: "white"}}
                    >
                        Filter Placeholder
                    </Typography>
                </Box>

                <FormControl sx={formControl}>
                    <Select
                        labelId="filter-placeholder-label"
                        id="filter-placeholder-select"
                        defaultValue=""
                        disabled
                    >
                        <MenuItem value="" disabled>
                            No Filters Available
                        </MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{display: "flex", alignItems: "center", marginTop: 3}}>
                    <SortIcon fontSize="large" color="primary"/>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{marginLeft: 1, color: "white"}}
                    >
                        Sort Placeholder
                    </Typography>
                </Box>
            </CardContent>
        </StyledCard>
    );
}
