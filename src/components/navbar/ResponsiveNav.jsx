import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './responsiveNav.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';


const ResponsiveNav = ({ onClick }) => {
    return (
        <Box className={styles.navResp} >
            <Box sx={{ textAlign: 'end' }}>
                <Button onClick={onClick} sx={{
                    color: '#fff', fontWeight: 600, fontSize: '1.2em',
                    "&:hover": { transform: "Scale(1.2)" }

                }} ><span >X</span></Button>
            </Box>
            <Box sx={{ maxWidth: '100%', textAlign: 'center',padding:'0 1.5em' }}>
                <Box >
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Home</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Services </Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Website Portfolio</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Reviews</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Resources</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> About</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Contact</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Login</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Get Started</Link>
                    </Box>
                </Box>

            </Box>
            {/* <Box sx={{ maxWidth: '100%' }}>
                <Box border={"2px solid red"}>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Home</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Services </Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Website Portfolio</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Reviews</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Resources</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> About</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Contact</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Login</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Get Started</Link>
                    </Box>
                </Box>

            </Box> */}
            {/* <Grid container sx={{ color: '#fff' }}>
                <Grid item xs={12} lg={5} border={"2px solid red"} p={5}>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Home</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Services </Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Website Portfolio</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Reviews</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Resources</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> About</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Contact</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Login</Link>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link to={''} className={styles.resNavLink}> Get Started</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5} border={"2px solid red"} p={5}>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link className={styles.resNavLink}> FOLLOW US</Link>
                        <Box sx={{}}>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><FacebookOutlinedIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><XIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><InstagramIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><LinkedInIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><XIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><InstagramIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><PinterestIcon /></NavLink>
                        </Box>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Typography className={styles.resNavNotLink}> Client Login</Typography>
                    </Box>
                    <Box>
                        <Typography>Contact Us</Typography>
                        <Typography>Phone</Typography>
                        <Typography>
                            <span> Text or Call</span>
                            <Link style={{ color: '#FFA700', fonteWeight: 600, textDecoration: 'none' }}>(857) 256-1295</Link>
                        </Typography>
                        <Typography>
                            <span> Hours:</span>
                            <span>M-F 8am - 6pm</span>
                        </Typography>
                        <Typography>
                            <span> Location:</span>
                            <span>Agawam, MA 01001</span>
                        </Typography>
                    </Box>


                </Grid>
            </Grid> */}

            {/* <Grid container>
                <Grid item xs={12} lg={5} border={"2px solid red"} p={5}>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Link className={styles.resNavLink}> FOLLOW US</Link>
                        <Box sx={{}}>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><FacebookOutlinedIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><XIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><InstagramIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><LinkedInIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><XIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><InstagramIcon /></NavLink>
                            <NavLink data-aos="zoom-in" to={'/'} style={{ color: '#FFA700', margin: '5px' }} ><PinterestIcon /></NavLink>
                        </Box>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #ffa70096' }} >
                        <Typography className={styles.resNavNotLink}> Client Login</Typography>
                    </Box>
                    <Box>
                        <Typography>Contact Us</Typography>
                        <Typography>Phone</Typography>
                        <Typography>
                            <span> Text or Call</span>
                            <Link style={{ color: '#FFA700', fonteWeight: 600, textDecoration: 'none' }}>(857) 256-1295</Link>
                        </Typography>
                        <Typography>
                            <span> Hours:</span>
                            <span>M-F 8am - 6pm</span>
                        </Typography>
                        <Typography>
                            <span> Location:</span>
                            <span>Agawam, MA 01001</span>
                        </Typography>
                    </Box>


                </Grid>
            </Grid> */}

        </Box >


    )
}

export default ResponsiveNav