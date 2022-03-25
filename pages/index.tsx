import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/appbar'
import { Avatar, Button, Grid, IconButton, TabsUnstyled, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import burger1 from '../public/burger1.jpg'
import burger2 from '../public/burger2.png'
import burger4 from '../public/burger4.png'
import burger5 from '../public/burger5.png'
import burger6 from '../public/burger6.png'
import nuggets from '../public/nuggets.png'
import avatar from '../public/avatar.jpg'
import avatar2 from '../public/avatar2.jpg'
import avatar3 from '../public/avatar3.jpg'
import pizza1 from '../public/pizza1.png'
import pizza2 from '../public/pizza2.png'
import pizza3 from '../public/pizza3.png'
import pizza4 from '../public/pizza4.png'
import shake1 from '../public/shake1.png'
import shake2 from '../public/shake2.png'
import shake3 from '../public/shake3.png'
import chicken3 from '../public/chicken3.png'
import nuggets2 from '../public/nuggets2.png'
import burger7 from '../public/burger7.png'
import n3 from '../public/n3.png'
import ice1 from '../public/ice1.png'
import ice2 from '../public/ice2.png'
import ice3 from '../public/ice3.png'
import ice4 from '../public/ice4.png'
import { FaArrowRight, FaClock, FaFacebookF, FaLocationArrow, FaPhoneSquareAlt, FaPlayCircle, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa'
import { MdDeliveryDining, MdFavoriteBorder, MdFoodBank, MdSelectAll, MdStar, MdStarOutline } from 'react-icons/md'
import { BsBasket } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { fontSize } from '@mui/system'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'





interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





const Home: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className={styles.container}>
      <div className={styles.firstSectionContainerDiv} style={{ height: isMatch == true ? 'auto' : '' }} >
        <AppBar />
        <div className='firstSectionContainerDivContent'  >

          <div style={{ paddingLeft: isMatch == true ? '30px' : '80px', marginLeft: isMatch == true ? '10px' : '50px', marginTop: isMatch == true ? '30%' : '10%', width: isMatch == true ? "70%" : '30%' }} >
            <p style={{ color: 'whitesmoke', fontSize: '50px', fontWeight: '700' }} >
              Your Favourite Food
              Delivered Hot &
              Fresh
            </p>
            <p style={{ color: 'whitesmoke', marginTop: '-20px' }} >
              Healthy switcher chefs do all the prep work,like peeding,
              chopping & marinating,so you you can cook a fresh food.
            </p>
            <button  style={{ backgroundColor: '#FF9F19', padding:'8px 25px' ,display: 'flex', justifyContent:'space-evenly' ,alignItems: 'center', color: 'white', textTransform: 'capitalize', borderRadius: '40px', marginTop: '40px' }} >
              <div>
                <p style={{margin:'0px'}} >
                  order Now
                </p>
              </div>
              <div>
                <FaArrowRight style={{ marginLeft: '25px' }} />
              </div>
            </button>
            
          </div>


        </div>
        <div style={{ height: 'auto', display: 'flex', alignItems: 'center', padding: '30px 0px', marginTop: '50px' }} >
          <div style={{ width: isMatch == true ? "100" : '90%', margin: 'auto', marginBottom: '0px', padding: '15px' }} >
            <Grid container spacing={4} >
              <Grid item xs={12} md={4} >
                <div style={{ textAlign: 'center', lineHeight: '15px' }} >
                  <FaClock color='#FF9F19' fontSize="50px" />
                  <p style={{ color: 'white' }} >
                    Today 10:00 am - 7:00 pm
                  </p>
                  <p style={{ fontSize: '14px', color: 'white' }} >
                    working hours
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ textAlign: 'center', lineHeight: '15px' }} >
                  <FaLocationArrow color='#FF9F19' fontSize="50px" />
                  <p style={{ color: 'white' }} >
                    Velyka Vasylkivska 100
                  </p>
                  <p style={{ fontSize: '14px', color: 'white' }} >
                    Get Direction
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ textAlign: 'center', lineHeight: '15px' }} >
                  <FaPhoneSquareAlt color='#FF9F19' fontSize="50px" />
                  <p style={{ color: 'white' }} >
                    +38(063)8332915
                  </p>
                  <p style={{ fontSize: '14px', color: 'white' }} >
                    Call online
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      {/* 2nd section */}



      {/* 3rd section  */}

      <div className={styles.thirdsectioncontainer} style={{ marginTop: '-17px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0px 15px' }} >
        <div style={{ display: 'flex', flexDirection: 'column', height: '30rem', marginRight: isMatch == true ? "0px" : '120px', paddingRight: isMatch == true ? '0px' : '120px', }} >
          <p style={{ fontWeight: 'bold' }} >
            <span style={{ color: '#db8102', }} > Abuot </span> <br />
            <span style={{ textTransform: 'capitalize', fontSize: '30px', fontWeight: 'bold', lineHeight: '45px' }} > food is an important part of <br /> our balanced diet </span>
          </p>
          <p  >
            They actually assured me over and over that take <br /> little time off and come back and work.Fast <br /> forward two weaks after <br /> we are going for a new project
          </p>
          <p style={{ fontWeight: '400' }} >
            I wrote to let them know ready to come back they <br /> cicked <br /> me of their team slack all of are make company <br /> email
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }} >
            <Button variant='contained' style={{ backgroundColor: '#FF9F19', display: 'flex', alignItems: 'center', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
              Lern more
            </Button>
            <Button variant='text' style={{ display: 'flex', alignItems: 'center', padding: ' 8px 25px', textTransform: 'capitalize' }} >
              <FaPlayCircle fontSize="40px" style={{ color: '#db8102',marginRight:'10px' }} />
              <p style={{ color: 'black',margin:'0px' }} >
                watch video
              </p>
            </Button>
          </div>

        </div>


      </div>


      {/* fourth section work */}


      <div>
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#FAF8F3' }} >
              <p style={{ textAlign: 'center', padding: '20px 0px' }} >
                <span style={{ color: '#db8102', lineHeight: '40px' }} >  work </span> <br />
                <span style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '40px' }} > How it Works </span> <br /> <br />
                <span  > its through mistakes that you acctually can grow you get rid of <br />  everything that is not make have to get bad </span>
              </p>

            </div>
          </Grid>

        </Grid>
      </div>

      <div style={{ backgroundColor: '#FAF8F3', padding: '20px 0px' }} >
        <div style={{ width: isMatch == true ? '90%' : '60%', margin: 'auto', marginTop: '30px', paddingBottom: '40px' }} >
          <Grid container spacing={5}  >
            <Grid item xs={12} md={4} >
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                <MdFoodBank fontSize="60px" color='#db8102' />
                <p style={{ fontSize: '22px', fontWeight: '500' }} >
                  Pick Meals
                </p>
                <p style={{ textAlign: 'center', color: '#9A9A9A' }} >
                  Chose your meals from our diverse weekly menu.Find Gluten or dairy free,low carbs and veggie options
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} >
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                <MdSelectAll fontSize="60px" color='#db8102' />
                <p style={{ fontSize: '22px', fontWeight: '500' }} >
                  Chose How Often
                </p>
                <p style={{ textAlign: 'center', color: '#9A9A9A' }} >
                  Chose your meals from our diverse weekly menu.Find Gluten or dairy free,low carbs and veggie options
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} >
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                <MdDeliveryDining fontSize="60px" color='#db8102' />
                <p style={{ fontSize: '22px', fontWeight: '500' }} >
                  Fast Deliveries
                </p>
                <p style={{ textAlign: 'center', color: '#9A9A9A' }} >
                  Chose your meals from our diverse weekly menu.Find Gluten or dairy free,low carbs and veggie options
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* menu */}





      <div style={{ padding: '40px 30px', backgroundColor: '#FAF8F3' }} >
        <div style={{ width: isMatch == true ? '90%' : '60%', margin: 'auto', }} >

          <Grid container spacing={2} >
            <Grid item xs={12} >
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', margin: '0px', paddingBottom: '25px', padding: '0px 15px' }} >
                <p style={{ textAlign: 'center', paddingTop: '20px', margin: '0px' }} >
                  <span style={{ color: '#db8102', fontWeight: 'bold', margin: '0px' }} >  menu </span> <br />
                  <span style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '15px' }} > Explore Our Best Menu </span> <br /> <br />

                </p>
                <p style={{ margin: '0px', textAlign: 'center', marginTop: '-10px' }} >
                  <span  > its through mistakes that you acctually can grow you get rid of <br />  everything that is not make have to get bad </span>
                </p>

              </div>
            </Grid>
          </Grid>


          <div style={{ paddingTop: '50px', paddingBottom: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            {/* <Grid container spacing={1} >
              <Grid item xs={4} md={2}  >
                <Button className={styles.menuesbtnstyle} fullWidth variant='contained'  >
                  all categories
                </Button>
              </Grid>
            </Grid> */}

            <Tabs value={value} indicatorColor='primary' onChange={handleChange} aria-label="basic tabs example" orientation={isMatch == true ? 'vertical' : 'horizontal'}   >

              <Tab disableRipple={true} label="All category"{...a11yProps(0)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 0 ? '#FF8E28' : '', color: value == 0 ? 'white' : '' }} />

              <Tab disableRipple={true} label="pizza" {...a11yProps(1)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 1 ? '#FF8E28' : '', color: value == 1 ? 'white' : '' }} />
              <Tab disableRipple={true} label="burger" {...a11yProps(2)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 2 ? '#FF8E28' : '', color: value == 2 ? 'white' : '' }} />
              <Tab disableRipple={true} label="bluebarry shake"{...a11yProps(3)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 3 ? '#FF8E28' : '', color: value == 3 ? 'white' : '' }} />

              <Tab disableRipple={true} label="chicken chup" {...a11yProps(4)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 4 ? '#FF8E28' : '', color: value == 4 ? 'white' : '' }} />
              <Tab disableRipple={true} label="ice cream"{...a11yProps(5)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 5 ? '#FF8E28' : '', color: value == 5 ? 'white' : '' }} />

              <Tab disableRipple={true} label="drinks" {...a11yProps(6)} className={styles.TabsHoverStyle} style={{ backgroundColor: value == 6 ? '#FF8E28' : '', color: value == 6 ? 'white' : '' }} />

            </Tabs>


          </div>
          <TabPanel value={value} index={0} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="280px=" height="250px" src={burger2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger5} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger6} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={nuggets} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="180px=" height="250px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="280px=" height="250px" src={pizza1} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={pizza2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={pizza3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={pizza4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={nuggets} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="180px=" height="250px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="280px=" height="250px" src={burger2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger5} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger6} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={nuggets} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="180px=" height="250px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>

          <TabPanel value={value} index={3} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="250px=" height="250px" src={shake1} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      blueberry shake
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="250px=" height="250px" src={shake2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      blueberry shake
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="250px=" height="250px" src={shake3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      blueberry shake
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="180px=" height="250px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>

          <TabPanel value={value} index={4} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="200px=" height="200px" src={chicken3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="200px=" height="200px" src={chicken3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="200px=" height="200px" src={chicken3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="200px=" height="200px" src={chicken3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="200px=" height="200px" src={burger4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="150px=" height="200px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>


          <TabPanel value={value} index={5} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="220px=" height="220px" src={ice1} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="220px=" height="220px" src={ice2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="220px" height="220px" src={ice3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="100%px=" height="100%px" src={ice4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="180px=" height="250px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>

          <TabPanel value={value} index={6} >
            <Grid container spacing={2} >


              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <BsBasket fontSize="17px" />
                    </IconButton>
                    <IconButton className={styles.cardsIconHoverStyle} style={{ borderRadius: '10px', margin: '5px' }} >
                      <MdFavoriteBorder fontSize="17px" />
                    </IconButton>
                    <IconButton style={{ borderRadius: '10px', backgroundColor: '#03A850', margin: '5px', padding: '0px 7px' }} >
                      <IoMdEye fontSize="18px" color='white' />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem' }} >
                    <Image width="220px=" height="220px" src={ice1} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="220px=" height="220px" src={ice2} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="220px" height="220px" src={ice3} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="100%px=" height="100%px" src={ice4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      chicken chup
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '17px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '2.7rem' }} >

                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="280px=" height="250px" src={burger4} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} >
                <div style={{ paddingTop: '2px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'white', borderRadius: '15px' }} >
                  <div style={{ height: '3.6rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                    <p style={{ padding: '2px 10px ', borderRadius: '5px', color: 'white', fontSize: '10px', margin: '0px', backgroundColor: '#ED3468' }} >10%-</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', paddingTop: '2px', height: '15.7rem', }} >
                    <Image width="180px=" height="250px" src={burger7} alt='pic' />
                  </div>
                  <div style={{ padding: '5px 5px' }} >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0px' }} >
                      <div  >
                        <p style={{ fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} > FULL BURGAR </p>
                      </div>
                      <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                        <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <p style={{ textTransform: 'uppercase', fontSize: '16px', fontWeight: '500', margin: '0px' }} >
                      double stuck burger
                    </p>
                    <p style={{ marginTop: '1px' }} >
                      <span style={{ fontSize: '12px', color: '#9E9B95', fontWeight: '700' }} >price-</span> <span style={{ fontSize: '11px', color: '#F37498', fontWeight: '500' }} >$325.00</span> <span style={{ textDecoration: 'line-through', fontSize: '11px', color: '#9E9B95', fontWeight: '500' }} >/$348</span>
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }} >
                  <Button variant='contained' style={{ backgroundColor: '#FF8E28', padding: ' 8px 25px', color: 'white', textTransform: 'capitalize', borderRadius: '40px', }} >
                    Load More
                  </Button>
                </div>
              </Grid>


            </Grid>
          </TabPanel>

        </div>
      </div>

      {/* testomonial */}

      <div style={{ paddingTop: '20px', backgroundColor: '#FAF8F3', paddingBottom: '50px' }} >
        <div style={{ width: isMatch == true ? '90%' : '40%', margin: 'auto', height: isMatch == true ? 'auto' : '10rem', padding: '80px 20px' }} >
          <Grid container spacing={2} >
            <Grid item xs={12} >
              <div className={styles.sectionBelowMenuContentDiv} >
                <p style={{ margin: '0px', color: '#FF962A', fontWeight: '500' }} >
                  testimonial
                </p>
                <h1 style={{ margin: '7px', fontWeight: '700' }} >
                  What They Are Saying
                </h1>
                <p style={{ margin: '5px', letterSpacing: '-0.5px' }} >
                  Its through mistakes that you actually that you acctually can grow you get rid of everything that is not essential to make have to get
                  back.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* CAROUSEL */}

      <div style={{ paddingTop: '80px', backgroundColor: '#FAF8F3', paddingBottom: '10px', }} >
        <div style={{ width: isMatch == true ? '90%' : '40%', margin: 'auto', padding: '80px 20px' }} >
          <Carousel variant="dark"  >
            <Carousel.Item className={styles.carouselItem} style={{ height: 'auto', padding: '30px 50px' }} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '30px 0px' }} >
                <Avatar style={{ width: '100px', height: '100px' }}  >
                  <Image src={avatar} alt='pic' />
                </Avatar>
                <p style={{ textAlign: 'center', color: '#9E9B95', marginTop: '5px' }} >
                  They are enganged communicators and dedicated problem solvers regardless of time constraints
                </p>
                <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                  <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                </div>
                <p style={{ color: '#9E9B95', marginTop: '7px', fontWeight: '600' }} >
                  <span> Sakib</span> <span style={{ fontSize: '9px', marginLeft: '3px' }} >Bangladesh</span>
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item className={styles.carouselItem} style={{ height: '17rem', padding: '20px 50px' }} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                <Avatar style={{ width: '100px', height: '100px' }} >
                  <Image src={avatar2} alt='pic' />
                </Avatar>
                <p style={{ textAlign: 'center', color: '#9E9B95', marginTop: '5px' }} >
                  They are enganged communicators and dedicated problem solvers regardless of time constraints
                </p>
                <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                  <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                </div>
                <p style={{ color: '#9E9B95', marginTop: '7px', fontWeight: '600' }} >
                  <span> Sakib</span> <span style={{ fontSize: '9px', marginLeft: '3px' }} >Bangladesh</span>
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item className={styles.carouselItem} style={{ height: '17rem', padding: '20px 50px' }} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                <Avatar style={{ width: '100px', height: '100px' }} >
                  <Image src={avatar3} alt='pic' />
                </Avatar>
                <p style={{ textAlign: 'center', color: '#9E9B95', marginTop: '5px' }} >
                  They are enganged communicators and dedicated problem solvers regardless of time constraints
                </p>
                <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }} >
                  <MdStar color='#F3BC23' /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStar color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} /> <MdStarOutline color='#F3BC23' style={{ marginLeft: '3px' }} />
                </div>
                <p style={{ color: '#9E9B95', marginTop: '7px', fontWeight: '600' }} >
                  <span> Sakib</span> <span style={{ fontSize: '9px', marginLeft: '3px' }} >Bangladesh</span>
                </p>
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>

      {/* FOOTER */}

      <div style={{ paddingTop: '20px', backgroundColor: '#FAF8F3', paddingBottom: '50px', padding: '80px 20px' }} >
        <div style={{ width: '100%', margin: 'auto', height: isMatch == true ? 'auto' : '15rem', backgroundColor: 'white' }} >
          <Grid container spacing={2} columns={16} >
            <Grid item xs={16} md={4} >
              <p className={styles.footerDivStyle} style={{ fontSize: '22px', fontWeight: '500', textTransform: 'capitalize' }} >
                foodie
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <FaFacebookF fontSize="20px" /> <FaYoutube fontSize="20px" color='#FF8E28' style={{ marginLeft: '10px' }} /> <FaVimeoV fontSize="20px" style={{ marginLeft: '10px' }} /> <FaTwitter fontSize="20px" style={{ marginLeft: '10px' }} />
              </div>
            </Grid>

            <Grid item xs={8} md={3} >
              <div className={styles.footerDivStyle} >
                <p>
                  Home
                </p>
              </div>
            </Grid>

            <Grid item xs={8} md={3} >
              <div className={styles.footerDivStyle2} >
                <p>
                  Packages
                </p>
                <p style={{ color: '#9E9B95' }} >
                  quality <br />
                  help <br />
                  share <br />
                  careers
                </p>
              </div>
            </Grid>

            <Grid item xs={8} md={3} >
              <div className={styles.footerDivStyle2}  >
                <p>
                  About Us
                </p>
                <p style={{ color: '#9E9B95' }} >
                  244-552-1542 <br />
                  hello@food.com <br />
                  press@food.com <br />

                </p>
              </div>
            </Grid>

            <Grid item xs={8} md={3} >
              <div className={styles.footerDivStyle2}  >
                <p>
                  Contact Us
                </p>
                <p style={{ color: '#9E9B95' }} >
                  terms & conditions <br />
                  privacy policy <br />


                </p>
              </div>
            </Grid>

            <Grid item xs={16} >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                <p style={{ fontSize: '14px' }} >
                  2020 &copy; All rights reserved by <span style={{ color: '#FF8E28' }} > Mr. Zohaib  </span>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>




      {/* practice */}





    </div>



  )
}

export default Home
