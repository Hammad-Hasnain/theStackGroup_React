import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import navLogo from '../../assets/images/theStackGroupLogo.png'
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';


const Navbar = ({ onClick }) => {
    return (
        <Stack sx={{
            backgroundColor: '#070402eb', flexDirection: 'row',
            justifyContent: 'space-between', padding: '10px',
            position: 'fixed', top: 0, left: 0,
            width: '100%', zIndex: 1
        }}>

            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: { xs: 'left', sm: 'space-evenly', lg: 'start', }, flexGrow: 1 }} >
                <Button sx={{ display: { xs: 'none', sm: 'block', lg: 'none' }, color: '#fff' }}>
                    <CallIcon sx={{ fontSize: '40px' }} />
                </Button>

                <Box >
                    <Link to="/
                    " >
                        <img src={navLogo} alt="" width={'200px'} />
                    </Link>
                </Box>
            </Box>
            <Button onClick={onClick}
                sx={{ backgroundColor: '#ffa700', padding: 0, borderRadius: 0, color: '#fff', }}>
                <MenuIcon />
            </Button>
        </Stack >


    )
}

export default Navbar




// import React from 'react'

// const Navbar = () => {
//     return (
//         <div>Navbar</div>
//     )
// }

// export default Navbar