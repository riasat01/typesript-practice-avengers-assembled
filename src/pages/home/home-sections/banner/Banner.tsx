import { Container, Paper } from "@mui/material";
import banner1 from '../../../../assets/avengers.jpg';
import banner2 from '../../../../assets/avengers-banner2.jpg';
import banner3 from '../../../../assets/avengers-banner3.jpg';
import { useEffect, useState } from "react";

const image: string[] = [banner1, banner2, banner3];

const Banner = () => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    // useEffect(() => {
        // setInterval( () => {
        //     const temp : number = imageIndex === image?.length - 1 ? 0 : imageIndex + 1;
        //     console.log(temp);
        //     setImageIndex(temp);
        // }, 1000)
        // return () => clearInterval(intervalId)
    // }, [])
    return (
        <Container sx={{margin: '0', width: '100%', height: {xs: '40vh',lg: '80vh'}}}>
            <Paper sx={{margin: '0'}}>
                <img style={{height: '100%', width: '100%'}} src={image[imageIndex]} alt="" />
            </Paper>
        </Container>
    );
};

export default Banner;