import { Outlet } from "react-router-dom";
import Navbar from '../../shared-components/main-layout/navbar/Navbar'
import { Container } from "@mui/material";


const MainLayout = () => {
    return (
        <Container sx={{margin: 0, width: '100vw', padding: 0}}>
            <Navbar />
            <Outlet />
        </Container>
    );
};

export default MainLayout;