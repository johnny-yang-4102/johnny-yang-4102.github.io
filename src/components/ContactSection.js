import React from "react"
import { Link, Typography, Stack, IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import './components.css'

const ContactSection = () => {
    return (
        <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="body1" className="spacing">
                Email: <Link href="#">jyang@virginia.edu</Link>
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <IconButton href="https://github.com/johnny-yang-4102" target="_blank" rel="noopener noreferrer" size="large" color="inherit">
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/johnny-yang-4102/" target="_blank" rel="noopener noreferrer" size="large" color="primary">
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default ContactSection