import { Box, Typography } from '@mui/material';

const LoremText = () => (
    <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Typography>
);

function Dashboard() {
    return (
        <>
            <Box sx={{ p: 1, typography: 'h3', color: 'green' }}>
                This is the dashboard page
            </Box>
            <LoremText />
        </>
    );
}

export default Dashboard;
