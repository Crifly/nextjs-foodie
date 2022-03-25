import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { padding } from "@mui/system"
import { FaDotCircle } from 'react-icons/fa'
import style from  '../styles/components.module.css'

export const AppBar = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            {
                isMatch == true ?

                    <div>
                        <Grid container  >
                            <Grid item xs={12} >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }} >
                                    <Typography style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }} >
                                        FOODIE <br />

                                    </Typography>

                                    <Typography style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }} >
                                        Menu <br />

                                    </Typography>


                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    :

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0px', width: '80%', margin: 'auto' }} >
                        <div style={{ width: '40%', padding: '10px 20px' }} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }} className={style.componentsappbarnavlinkssytle} >
                                FOODIE <br />

                            </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', width:'60%', color: 'white' }} >

                            <Typography fontWeight='bold' style={{ marginRight: '20px', fontSize: '18px' }} className={style.componentsappbarnavlinkssytle} >
                                Home <br />

                            </Typography>
                            <Typography fontWeight='bold' style={{ marginRight: '20px', fontSize: '18px' }} className={style.componentsappbarnavlinkssytle} >
                                Packages
                            </Typography>
                            <Typography fontWeight='bold' style={{ marginRight: '20px', fontSize: '18px' }} className={style.componentsappbarnavlinkssytle} >
                                About Us
                            </Typography>
                            <Typography fontWeight='bold' style={{ marginRight: '20px', fontSize: '18px' }} className={style.componentsappbarnavlinkssytle} >
                                Contact Us
                            </Typography>
                            <Typography fontWeight='bold' style={{ marginRight: '20px', fontSize: '18px' }} className={style.componentsappbarnavlinkssytle} >
                                Cart
                            </Typography>
                            <Button variant="contained" style={{ textTransform: 'capitalize', borderRadius: '50px', padding: '8px 25px', backgroundColor: '#e7ab56', color: 'white' }} className={style.componentsappbarnavlinkssytle} >
                                booking now
                            </Button>

                        </div>
                    </div>
            }


        </>
    )
}