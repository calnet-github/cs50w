import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';

function Header() {
    return (
        <Box
            component={'header'}
            sx={{
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                position: 'sticky',
                top: 0,
                left: { lg: 280 },
                width: { lg: `calc(100% - 280px)` },
                zIndex: 1100,
            }}
        >
            <Navbar />
        </Box>
    );
}

export default Header;
