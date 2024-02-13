import { AppBar, Box, Toolbar } from "@mui/material"
import './TopBar.css'
export const TopBar = ({ open, setOpen }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" open={open}>
                <Toolbar className="top-bar">
                    <div className="top-bar-left-container">
                        <div className="top-bar-name-text">Alexa</div>
                        <div className="top-bar-ampersand-text">&</div>
                        <div className="top-bar-name-text">Luke</div>
                    </div>
                    <div className="top-bar-right-container">
                        <div>Our Story</div>
                        <div>Schedule</div>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}