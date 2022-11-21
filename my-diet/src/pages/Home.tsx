import { Grid, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Home = () => {

    const openFB = () => {
        window.open("https://www.facebook.com/dominik.kubala", '_blank', 'noopener,noreferrer');
    };

    const openGit = () => {
        window.open("https://github.com/Dom-Kub", '_blank', 'noopener,noreferrer');
    };

    const openIG = () => {
        window.open("https://www.instagram.com/domikub/", '_blank', 'noopener,noreferrer');
    };


    return(
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            paddingTop={10}
            sx={{
                backgroundColor:"white"
            }}

        >
            <Grid item
                  marginLeft={15}
                  marginRight={15}
                  sx={{
                      borderRadius : "40px",
                backdropFilter : "blur(20px)",
                      backgroundColor: "hsl(0deg 0% 9% / 30%)"
            }}
            >
                <Typography className="Name" fontSize={60}
                            marginTop={5}
                            style={{
                    fontWeight: 'bold',
                            }}>Ahoj, sem bude moje predstavennie</Typography>
                <Typography
                    marginTop={5}
                    marginLeft={10}
                    marginRight={10}
                    className="Name" fontSize={20}
                                            style={{
                                                fontWeight: 'bold',
                                            }} >Tu bbude obsah o mne a tomto projekte Cupcake ipsum dolor sit amet. Caramels cupcake halvah I love apple pie. Chocolate sesame snaps liquorice topping sweet roll I love jelly. Candy canes pastry lemon drops candy canes gummi bears. I love muffin bonbon carrot cake jelly bear claw gummi bears marshmallow candy. Cake chocolate cake biscuit chocolate ice cream chocolate bar pudding sweet roll. Sugar plum danish bonbon candy canes macaroon I love. Tart sugar plum cake cheesecake marzipan chocolate bar cookie. Dragée jujubes sweet roll chocolate cake tart. Gummi bears powder donut dessert tart I love icing. Chocolate bar fruitcake sweet roll pie croissant caramels muffin. Cake jelly cookie carrot cake caramels shortbread jelly beans gingerbread wafer.

                                            Cake fruitcake sesame snaps I love I love. Muffin gummies cheesecake powder marzipan. 
                                            
                                            </Typography>

<Grid item marginTop={20}>
                    <FacebookIcon sx={{fontSize:"48px", marginRight:2}} onClick={openFB}/>
                    <InstagramIcon sx={{fontSize:"48px"}} onClick={openIG}/>
                </Grid>
            </Grid>

        </Grid>
    )

}
export default Home