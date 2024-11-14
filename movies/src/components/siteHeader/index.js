import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from '../../images/headerLogo.png';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// https://www.smashingmagazine.com/2020/07/styled-components-react/
const StyledAppBar = styled(AppBar)({
    backgroundColor: "black",
    color: "white",
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
});

const StyledTypography = styled(Typography)({
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
});

const StyledImg = styled('img')(({ theme }) => ({
    height: 50,
    padding: 1,
    marginRight: '8px',
    marginBottom: '3px',
    [theme.breakpoints.down("md")]: {
        height: 50,

    },
    [theme.breakpoints.down("sm")]: {
        height: 40,
    },
}));

const StyledButton = styled(Button)({
     color: 'white',
    '&:hover':{
        color:'#FF3131',
        transform: 'scale(1.2)',
        marginLeft: 3,
        transition: 'all 0.2s ease',
    }
});




const SiteHeader
= ({ history }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();

    const menuOptions = [
        { label: "Home", path: "/" },
        { label: "Favorites", path: "/movies/favorites" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Must Watch", path: "/" },
    ];

    const handleMenuSelect = (pageURL) => {
        navigate(pageURL, { replace: true });
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <StyledAppBar position="fixed">
                <Toolbar>
                    <StyledTypography variant="h4">
                        <StyledImg
                            src={img}
                            alt="Logo"
                            onClick={() => navigate('/')}
                        />
                    </StyledTypography>

                    {isMobile ? (
                        <>
                            <IconButton
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuOptions.map((opt) => (
                                    <MenuItem
                                        key={opt.label}
                                        onClick={() => handleMenuSelect(opt.path)}
                                    >
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <>
                            {menuOptions.map((opt) => (
                                <StyledButton
                                    key={opt.label}
                                    color="inherit"
                                    onClick={() => handleMenuSelect(opt.path)}
                                >
                                    {opt.label}
                                </StyledButton>
                            ))}
                        </>
                    )}
                </Toolbar>
            </StyledAppBar>
            <Offset />
        </>
    );
};

export default SiteHeader;