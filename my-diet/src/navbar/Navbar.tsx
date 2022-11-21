import { Grid, MenuItem } from "@mui/material"
import { useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { ROUTE_TYPES } from "../common/RouteTpes";
import logo from "../images/logo.png"

const Navbar = () => {
    const [paddingRight] = useState(9);
    const [fontSize] = useState(20);
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
            backgroundColor: "rgb(193, 193, 191, 1)"
        }}
      >
        <Grid item textAlign={"left"} xs={5}>
        <img src={logo} alt={"logo"} width="100px"/>
        </Grid>
          <Grid item paddingRight={paddingRight} textAlign={"right"} xs={1}>
            <MenuItem
            sx={{
                '&:hover': {
                    backgroundColor: 'inherit'
                }  
            }}
                style={{
                color: location.pathname === `/${ROUTE_TYPES.HOME}` ? 'black' : 'gray' , fontSize:fontSize, fontWeight: 'bold'}} onClick={() => navigate(`/${ROUTE_TYPES.HOME}`)} >Home</MenuItem>
        </Grid>
        <Grid item paddingRight={paddingRight} xs={1}>
            <MenuItem 
            sx={{
                '&:hover': {
                    backgroundColor: 'inherit'
                }  
            }}
            style={{color: location.pathname === `/${ROUTE_TYPES.CALCULATION}` ? 'black' : 'gray' , fontSize:fontSize, fontWeight: 'bold'}} onClick={() => navigate(`/${ROUTE_TYPES.CALCULATION}`)} >About Me</MenuItem>
        </Grid>
        <Grid item xs={5}/>
        </Grid>
      <Outlet/>
      </>
    )

}
export default Navbar