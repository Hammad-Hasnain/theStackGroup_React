// scrolling overflow problem
// ERROR: data-aos="fade-left"

import React, { useState } from 'react'
import styles from './home.module.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import navV from '../../assets/videos/navV.mp4'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';
import phones3 from '../../assets/images/phones3.webp';
import customWeb from '../../assets/images/customWeb.webp';
import responsiveWeb from '../../assets/images/responsiveWeb.webp'
import fastWeb from '../../assets/images/fastWeb.webp'
import secureWeb from '../../assets/images/secureWeb.webp'
import webStats from '../../assets/images/webStats.webp'
import preHosting from '../../assets/images/preHosting.webp'
import webEditor from '../../assets/images/webEditor.webp'
import handsFreeUpate from "../../assets/images/handsFreeUpate.webp"
import step1Coffee from "../../assets/images/step1Coffee.webp"
import step2Design from "../../assets/images/step2Design.webp"
import step3FullSite from "../../assets/images/step3FullSite.webp"
import step4Launch from "../../assets/images/step4Launch.webp"
import webDPortfolio from "../../assets/images/webDPortfolio.webp"
import apps from "../../assets/images/apps.jpeg"
import siteManagement from "../../assets/images/siteManagement.png"
import contentMarketing from "../../assets/images/contentMarketing.jpeg"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link, NavLink } from 'react-router-dom'
import googleBusiness from "../../assets/images/googleBusiness.webp"
import boostingBusiness from "../../assets/images/boostingBusiness.webp"
import needOfWeb from "../../assets/images/needOfWeb.webp"
import webQA from "../../assets/images/webQA.webp"
import AddIcon from '@mui/icons-material/Add';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import navLogo from '../../assets/images/theStackGroupLogo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ResponsiveNav from '../../components/navbar/ResponsiveNav.jsx'





const Home = () => {

    const [navResponsiver, setNavResponsiver] = useState(false)
    const [faq1Ans, setFaq1Ans] = useState(false)
    const [faq2Ans, setFaq2Ans] = useState(false)
    const [faq3Ans, setFaq3Ans] = useState(false)
    const [faq4Ans, setFaq4Ans] = useState(false)
    const [faq5Ans, setFaq5Ans] = useState(false)



    const navResponsiveBtn = () => {
        setNavResponsiver(prev => !prev)
    }

    const faqAns1Handler = () => {
        setFaq1Ans(prev => !prev)
    }
    const faqAns2Handler = () => {
        setFaq2Ans(prev => !prev)
    }
    const faqAns3Handler = () => {
        setFaq3Ans(prev => !prev)
    }
    const faqAns4Handler = () => {
        setFaq4Ans(prev => !prev)
    }
    const faqAns5Handler = () => {
        setFaq5Ans(prev => !prev)
    }




    // Animation init
    Aos.init()

    return (
        <div>
            {/* ================ NAVBAR ================  */}
            <header>
                <Box>
                    {!navResponsiver && <Navbar onClick={navResponsiveBtn} />}
                </Box>
                <Box>
                    {/* sx={{ position: 'fixed', top: 0, left: 0 }} */}
                    {navResponsiver && <ResponsiveNav onClick={navResponsiveBtn} />}
                </Box>
            </header>

            {/* ================ MAIN ================  */}
            <main >
                {/* Section 1 */}
                <Box sx={{ position: 'relative', marginTop: { xs: '68px', sm: '0' } }}>
                    <Box width={'100%'}>
                        <video src={navV} autoPlay loop muted width={'100%'} > </video>
                    </Box>
                    <Stack data-aos={'zoom-in'} data-aos-duration={'1000'} sx={{ position: 'absolute', top: '0', height: '100%', justifyContent: 'center' }}>
                        <Box sx={{
                            marginLeft: { md: '0', lg: '10em' },
                            paddingLeft: { xs: '10px' }
                        }}>
                            <Typography sx={{ fontSize: { xs: '20px', md: '2.2em' }, color: '#fff' }}>
                                <Box component={'span'} sx={{ display: { md: '', lg: 'block' } }} >
                                    Innovative Web Design
                                </Box>
                                <Box component={'span'} sx={{ fontWeight: 'bold' }}>
                                    That Drives Growth
                                </Box>
                            </Typography>
                            <Typography sx={{
                                color: '#fff', minWidth: 'auto', maxWidth: '25em',
                                fontSize: { xs: '12px', sm: '16px' }
                                // display: { xs: 'none', sm: 'block' }
                            }}  >
                                Our web design services focus on designing and creating innovative and intuitive
                                websites that wow your visitors and grow your business.
                            </Typography>
                            <Button data-aos="zoom-out" data-aos-duration="500" data-aos-delay='500'
                                sx={{
                                    color: '#fff', fontWeight: '600', borderRadius: 0, padding: '1em 2em ',
                                    mt: { xs: 0, sm: 5 },
                                    fontSize: { xs: '8px', sm: '12px', md: '16px' },
                                    boxShadow: '0 0 10px #000', "&:hover": { background: '#FFA700', boxShadow: 'none' }
                                }}>
                                Start Your Project!
                            </Button>
                        </Box>
                    </Stack >
                </Box >

                {/* Section 2 */}
                {/* Comment Button fixed */}
                <Button sx={{
                    background: '#FFA700',
                    borderRadius: '50%',
                    padding: '12px',
                    color: '#fff',
                    position: 'fixed',
                    bottom: 0,
                    right: '5px',
                    m: 1, zIndex: 3
                    // "&:hover":{
                    //     padding:'30px'
                    // }
                }}>
                    <CommentIcon sx={{ fontSize: '40px' }} />
                </Button >

                {/* Section 3 */}
                <Grid container sx={{ justifyContent: 'center', padding: '6em 0' }}>
                    <Grid data-aos="flip-left" data-aos-duration="500" item xs={12} lg={5}
                        sx={{ padding: { xs: 0, sm: '4em' }, color: '#333333', }}>
                        <Box sx={{ p: 1 }}>
                            <Typography sx={{ fontSize: { xs: '2em', sm: '3em' }, }}>
                                Creative <span style={{ fontWeight: '600' }}> Web Design </span> Agency in Massachusetts
                            </Typography>
                            <Typography >
                                At Stack Group, we believe that good website design is more than just aesthetics.
                                A well-designed website should be easy to navigate, informative, and engaging.
                                Our team of experienced designers works closely with our clients to create custom
                                websites that meet their unique needs. Whether you're looking for a simple online
                                presence or a complex e-commerce solution, we can help. Our goal is to help you
                                grow your business by providing you with a state-of-the-art website that will
                                attract new customers and help you increase sales.  So if you're in need of a
                                new website or you're looking to update your current one, contact us to schedule
                                a project consultation.
                                We'll be happy to discuss your project and provide you with a free quote.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid data-aos="flip-right" data-aos-duration="700" item xs={12} lg={5} >
                        <img src={phones3} alt="" width={'100%'} />
                    </Grid>
                </Grid>

                {/* Section 4 */}
                <Grid container sx={{
                    background: '#000', color: '#fff', padding: { xs: '4em 0em', lg: '4em' },
                    maxWidth: { xs: '60em', xl: '100%' }
                }}>
                    <Grid data-aos="zoom-in-up" item xs={12} lg={3} p={2}>
                        <Typography sx={{ fontSize: { xs: '2em', sm: '3em' }, textAlign: 'end' }}>
                            Website Features & Benefits
                        </Typography>
                    </Grid>
                    <Grid item lg={9} >
                        <Grid container sx={{ p: 0 }}>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-in" width={'3em'}>
                                    <img src={customWeb} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-in" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-in">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-out" width={'3em'}>
                                    <img src={responsiveWeb} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-out-right" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-out-right">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-in" width={'3em'}>
                                    <img src={fastWeb} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-in" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-in">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-out-right" width={'3em'}>
                                    <img src={secureWeb} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-out-right" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-out-right">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ mt: { xs: 0, lg: '3em' }, p: 0 }}>
                            <Grid item lg={3} p={1} >
                                <Box data-aos="zoom-in" width={'3em'}>
                                    <img src={webStats} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-in" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-in">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-out-right" width={'3em'}>
                                    <img src={preHosting} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-out-right" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-out-right">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-in" width={'3em'}>
                                    <img src={webEditor} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-in" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-in">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                            <Grid item lg={3} p={1}>
                                <Box data-aos="zoom-out-right" width={'3em'}>
                                    <img src={handsFreeUpate} alt="" width={'100%'} />
                                </Box>
                                <Typography data-aos="zoom-out-right" sx={{ fontWeight: '600', py: 1 }}>Custom Web Design</Typography>
                                <Typography data-aos="zoom-out-right">Unique designs (not templates) built around your business and your business goals.</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid >

                {/* Section 5 */}
                {/* visible on md "WEB DESIGN PROCESS" */}
                <Box data-aos="fade-in" data-aos-duration="500" sx={{ textAlign: 'center', p: 3, color: '#333333', display: { xs: 'block', lg: 'none' } }}>
                    <Typography sx={{ fontSize: '2em', }}>
                        Our <span style={{ fontWeight: '600' }}>Web Design</span> Process
                    </Typography>
                    <Typography>
                        At The Stack Group, we understand that designing a new website can be
                        a daunting task. There are so many things to consider, from the layout
                        and navigation to the content and branding. However, we also know that a
                        well-designed website can be a powerful tool for businesses of all sizes.
                        That's why we've made it our mission to simplify the website design process.
                        We work closely with our clients to understand their needs and goals, and then
                        we create custom websites that are both user-friendly and visually appealing.
                        Plus, our team is always available to answer any questions or provide support along the way.
                    </Typography>
                </Box >

                {/* Section 6 */}
                <Box data-aos={'zoom-in'}
                    sx={{ maxWidth: { xs: '60em', lg: '90vw ' }, margin: { xs: 'auto', lg: '0  0 0 auto  ' }, background: '#000', color: '#fff', p: 1 }}>
                    <Typography sx={{ p: 1, fontWeight: '600', fontSize: { xs: '1.7em', sm: '2em' } }}>Our Web Design Process</Typography>
                    <Typography sx={{ p: 1 }}>Designing your new site shouldn't be complicated.
                        We make it simple and fun :)</Typography>
                </Box>

                {/* Section 7 */}
                {/* =============== STEPS =========== */}
                {/*Step 1  */}
                <Grid container data-aos="zoom-in-up" justifyContent={'center'} padding={'0em'} my={'5em'}>
                    <Grid item md={12} lg={5} sx={{ p: 1 }}>
                        <Typography data-aos="fade-right" sx={{ fontSize: '1.7em', fontWeight: '600', color: '#FFA700' }}>Step 1</Typography>
                        <Typography data-aos="fade-right" sx={{ fontSize: '1.8em', fontWeight: '600' }}>Client Meeting & Onboarding</Typography>
                        <Typography data-aos="fade-right">The first step in our web design process is to meet with the client
                            (get some caffeine) and learn more about their business. This meeting helps
                            us to understand the client's goals and objectives, and it also gives us an
                            opportunity to ask questions about the project. After the meeting, we provide
                            the client with a proposal that outlines our suggested approach. Once the proposal
                            is approved and the 50% deposit is made, we move on to the next step in the process,
                            which is onboarding. During onboarding, we gather all of the necessary information
                            and materials from the client, including their logo, brand guidelines, social media accounts, and
                            content. Once onboarding is completed, we're ready to begin designing the website.</Typography>
                    </Grid>
                    <Grid item md={12} lg={5} padding={'0 0 0 4em  '} display={{ xs: 'none', lg: 'block' }}>
                        <Box data-aos="zoom-in">
                            <img src={step1Coffee} alt="" width={'100%'} />
                        </Box>
                    </Grid>


                </Grid>
                {/*Step 2  */}
                <Grid container data-aos="zoom-in-down" justifyContent={'center'} padding={'0em'} my={'5em'}>
                    <Grid item md={12} lg={5} sx={{ padding: { xs: 0, lg: '0 4em 0 0' } }} >
                        <Box data-aos="zoom-in" sx={{ height: { xs: '200px', md: '300px', lg: '100%' }, overflow: 'hidden' }}>
                            <img src={step2Design} alt="" width={'100%'} />
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={5}
                        sx={{ padding: { xs: '8px', lg: '0 4em 0 0' } }}                    >
                        <Typography data-aos="fade-right" sx={{ fontSize: '1.7em', fontWeight: '600', color: '#FFA700' }}>Step 2</Typography>
                        <Typography data-aos="fade-right" sx={{ fontSize: '1.8em', fontWeight: '600' }}>Design Concept</Typography>
                        <Typography data-aos="fade-right">The next step in our web design process is to create a concept for the website.
                            This concept is based on the information we gathered during the onboarding process, and
                            it includes a proposed layout, design, color scheme, and overall look and feel for the
                            site. We then share this concept with the client and make any necessary revisions before
                            moving on to the full site build.  You can expect a live site design proof within 5
                            business days of when we kick off your design!
                        </Typography>
                    </Grid>
                </Grid>
                {/*Step 3  */}
                <Grid container data-aos="zoom-in-up" justifyContent={'center'} padding={'0em'} my={'5em'}>
                    <Grid item md={12} lg={5}
                        sx={{ p: 1 }}                    >
                        <Typography data-aos="fade-right" sx={{ fontSize: '1.7em', fontWeight: '600', color: '#FFA700' }}>Step 3</Typography>
                        <Typography data-aos="fade-right" sx={{ fontSize: '1.8em', fontWeight: '600' }}>Full Site Build Out</Typography>
                        <Typography data-aos="fade-right" >The first step in our web design process is to meet with the client
                            (get some caffeine) and learn more about their business. This meeting helps
                            us to understand the client's goals and objectives, and it also gives us an
                            opportunity to ask questions about the project. After the meeting, we provide
                            the client with a proposal that outlines our suggested approach. Once the proposal
                            is approved and the 50% deposit is made, we move on to the next step in the process,
                            which is onboarding. During onboarding, we gather all of the necessary information
                            and materials from the client, including their logo, brand guidelines, social media accounts, and
                            content. Once onboarding is completed, we're ready to begin designing the website.</Typography>
                    </Grid>
                    <Grid item md={12} lg={5} padding={'0 0 0 4em'} display={{ xs: 'none', lg: 'block' }}>
                        <Box data-aos="zoom-in" height={'100%'}>
                            <img src={step3FullSite} alt="" height={'100%'} width={'100%'} />
                        </Box>
                    </Grid>
                </Grid>
                {/*Step 4  */}
                <Grid container data-aos="zoom-in-down" justifyContent={'center'} padding={'0em'} my={'5em'}>
                    <Grid item md={12} lg={5} sx={{ padding: { xs: '0', lg: '0 4em 0 0' } }} >
                        <Box data-aos="fade-right" sx={{ height: { xs: '200px', md: '300px', lg: '100%' }, overflow: 'hidden' }}>
                            <img src={step4Launch} alt="" width={'100%'} />
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={5}
                        sx={{ padding: { xs: '8px', lg: '0 4em 0 0' } }}                    >
                        <Typography data-aos="zoom-in" sx={{ fontSize: '1.7em', fontWeight: '600', color: '#FFA700' }}>Step 4</Typography>
                        <Typography data-aos="zoom-in" sx={{ fontSize: '1.8em', fontWeight: '600' }}>Website Launch & Support</Typography>
                        <Typography data-aos="zoom-in" >The next step in our web design process is to create a concept for the website.
                            This concept is based on the information we gathered during the onboarding process, and
                            it includes a proposed layout, design, color scheme, and overall look and feel for the
                            site. We then share this concept with the client and make any necessary revisions before
                            moving on to the full site build.  You can expect a live site design proof within 5
                            business days of when we kick off your design!
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 8 */}
                <Stack data-aos="zoom-in" sx={{
                    backgroundImage: `url(${webDPortfolio})`, backgroundSize: 'cover', padding: { xs: '2em 1em', md: '12em 10em ' },
                    flexDirection: 'row'
                }}>
                    <Box sx={{ flexBasis: '50%', display: { xs: 'none', lg: 'block' } }}></Box>
                    <Box offset="0" sx={{ flexBasis: '50%', color: '#fff' }}>
                        <Typography data-aos="zoom-in-up" sx={{ fontSize: '3.5em', }}>Web Design <span style={{ fontWeight: '600', }}>Portfolios</span> </Typography>
                        <Typography data-aos="zoom-in-up" >
                            We've designed hundreds of websites over the years. We've done everything from corporate sites to e-commerce platforms to personal blogs.  Our work is creative, original, clean, and tailored to each client's specific needs.
                        </Typography>
                        <Button data-aos="zoom-in-up" sx={{
                            color: '#fff', fontWeight: '600', borderRadius: 0, padding: '1em 2em ', mt: 5,
                            boxShadow: '0 0 10px #000', "&:hover": { background: '#FFA700', boxShadow: 'none' }
                        }}>
                            View Portfolio
                        </Button>
                    </Box>
                </Stack>

                {/* Section 9 */}
                <Box data-aos="fade-right" sx={{ maxWidth: '90em', background: '#000', color: '#fff', padding: { xs: '7px', md: '3em 10em' } }}>
                    <Typography sx={{ p: 1, fontWeight: '600', fontSize: '2em' }}>  Grow Your Site</Typography>
                    <Typography sx={{ p: 1, width: { xs: '100%', lg: '20em' }, }}>Websites should not only look good - they should grow your business - we got ya!</Typography>
                </Box >

                {/* Section 10 */}
                <Grid container justifyContent={"center"} my={5} px={1}>
                    <Grid item xs={12} lg={3} sx={{ p: 2 }}>
                        <Box data-aos="flip-right" data-aos-duration="600" sx={{ maxWidth: { xs: '700px', lg: '100%' }, m: 'auto', height: '250px' }}>
                            <img src={apps} height={'100%'} width={'100%'} alt="" />
                        </Box>
                        <Box data-aos="zoom-in" sx={{ textAlign: 'center', }}>
                            <Typography sx={{
                                fontSize: '1.5em', fontWeight: "600",
                                color: '#2D2E32', p: 2
                            }}>Apps</Typography>
                            <Typography color={'#313131'}>
                                Leverage the latest technologies with fully integrated apps to enrich your websites functionality and effectiveness.  We feature apps such as accessibility and compliance, web chat, site search, advanced form builders, AMP to boost mobile speed, embed google reviews and more.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{ p: 2 }}>
                        <Box data-aos="flip-right" data-aos-duration="600" sx={{ maxWidth: { xs: '700px', lg: '100%' }, m: 'auto', height: '250px', }}>
                            <img src={siteManagement} height={'100%'} width={'100%'} alt="" />
                        </Box>
                        <Box data-aos="zoom-in" sx={{ textAlign: 'center', }}>
                            <Typography sx={{
                                fontSize: '1.5em', fontWeight: "600",
                                color: '#2D2E32', p: 2
                            }}>Site Management</Typography>
                            <Typography color={'#313131'}>
                                A website should not just be designed well, it should evolve and grow with your company. Our site management service includes site updates, tech support, site statistic reporting, content updates, site development and more! Focus on your business and let us grow your site!                        </Typography>s
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{ p: 2 }}>
                        <Box data-aos="flip-right" data-aos-duration="600" sx={{ maxWidth: { xs: '700px', lg: '100%' }, m: 'auto', height: '250px' }}>
                            <img src={contentMarketing} height={'100%'} width={'100%'} alt="" />
                        </Box>
                        <Box data-aos="zoom-in" sx={{ textAlign: 'center', }}>
                            <Typography sx={{
                                fontSize: '1.5em', fontWeight: "600",
                                color: '#2D2E32', p: 2
                            }}>Content Marketing</Typography>
                            <Typography color={'#313131'}>
                                The compentition online continues to grow - and content marketing is more important than ever.  We offer additional content services including website page copy, automated blog content, SEO optimized articles and more.  All designed to keep your website content fresh, help you rank for more search terms and ultimately create more leads.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Section 11 */}
                <Box data-aos="zoom-in" sx={{ maxWidth: '90em', marginLeft: 'auto', background: '#000', color: '#fff', padding: { xs: '7px', md: '3em 10em' } }}>
                    <Typography sx={{ p: 1, fontWeight: '600', fontSize: '2em' }}>Web Design Reviews</Typography>
                    <Typography sx={{ p: 1, width: { xs: '100%', lg: '35em' }, }}>We love hearing from our clients. We know people search web designer near me and want to see real customer reviews - check out what they are saying about The Stack Group</Typography>
                </Box >

                {/* Section 12 */}
                <Grid container justifyContent={'center'} sx={{ p: 5 }}>
                    <Grid data-aos="zoom-in"
                        item xs={12} lg={3} sx={{ justifyContent: 'center', textAlign: 'center', m: 2, boxShadow: '0 0 10px #313131ab', borderRadius: '7px', padding: '1em' }}>
                        <Box sx={{ pt: 3 }}>
                            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', color: '#FFA700', fontSize: '3em' }} />
                        </Box>
                        <Typography sx={{ color: '#686565', pt: 3, margin: 'auto', width: { xs: '15em', lg: '100%' } }}>
                            “Thoughtful, creative, responsive and a top-tier website for us. I would highly recommend to any one looking for a new website.”
                        </Typography>
                        <Typography sx={{ fontWeight: '600', pt: 3, fontSize: '1.5em', color: '#333333' }}>Sam Fortsch</Typography>
                        <Typography sx={{ color: '#111111', fontWeight: '600', paddingBottom: '3.5em' }}>HVAC, Plumbing, Insulation Contractor Web Design in Massachusetts</Typography>
                    </Grid>
                    <Grid data-aos="zoom-in" item xs={12} lg={3} sx={{ justifyContent: 'center', textAlign: 'center', m: 2, boxShadow: '0 0 10px #313131ab', borderRadius: '7px', padding: '1em' }}>
                        <Box sx={{ pt: 3 }}>
                            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', color: '#FFA700', fontSize: '3em' }} />
                        </Box>
                        <Typography sx={{ color: '#686565', pt: 3, margin: 'auto', width: { xs: '15em', lg: '100%' } }}>
                            “Thoughtful, creative, responsive and a top-tier website for us. I would highly recommend to any one looking for a new website.”
                        </Typography>
                        <Typography sx={{ fontWeight: '600', pt: 3, fontSize: '1.5em', color: '#333333' }}>Sam Fortsch</Typography>
                        <Typography sx={{ color: '#111111', fontWeight: '600', paddingBottom: '3.5em' }}>HVAC, Plumbing, Insulation Contractor Web Design in Massachusetts</Typography>
                    </Grid>
                    <Grid data-aos="zoom-in" item xs={12} lg={3} sx={{ justifyContent: 'center', textAlign: 'center', m: 2, boxShadow: '0 0 10px #313131ab', borderRadius: '7px', padding: '1em' }}>
                        <Box sx={{ pt: 3 }}>
                            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', color: '#FFA700', fontSize: '3em' }} />
                        </Box>
                        <Typography sx={{ color: '#686565', pt: 3, margin: 'auto', width: { xs: '15em', lg: '100%' } }}>
                            “Thoughtful, creative, responsive and a top-tier website for us. I would highly recommend to any one looking for a new website.”
                        </Typography>
                        <Typography sx={{ fontWeight: '600', pt: 3, fontSize: '1.5em', color: '#333333' }}>Sam Fortsch</Typography>
                        <Typography sx={{ color: '#111111', fontWeight: '600', paddingBottom: '3.5em' }}>HVAC, Plumbing, Insulation Contractor Web Design in Massachusetts</Typography>
                    </Grid>
                </Grid >

                {/* Section 14 */}
                {/* Button */}
                <Box data-aos="fade-down" sx={{ padding: '5px', textAlign: 'center', py: 5, maxWidth: '100%', }}>
                    <Button sx={{
                        width: { xs: '100%', sm: 'auto' },
                        color: '#fff', fontWeight: '600', borderRadius: 0, padding: '1em 2em ',
                        boxShadow: '0 0 10px #31313191', background: '#FFA700', "&:hover": { background: '#000', boxShadow: 'none' }
                    }}>
                        Read Latest Reviews
                    </Button>
                </Box >

                {/* Section 15 */}
                <Box data-aos="fade-right" sx={{ maxWidth: '90em', my: 5, background: '#000', color: '#fff', padding: { xs: '7px', md: '3em 10em' } }}>
                    <Typography sx={{ p: 1, fontWeight: '600', fontSize: '2em' }}>  Web Design Thoughts</Typography>
                    <Typography sx={{ p: 1, width: { xs: '100%', lg: '20em' }, }}>From creativity and design to technical development and functionality....our latest thoughts on all things web design.</Typography>
                </Box >

                {/* Section 16 */}
                <Box sx={{ maxWidth: '80em', margin: 'auto', p: 1 }}>
                    <Grid data-aos="flip-left" data-aos-duration="500" container sx={{ justifyContent: 'center', boxShadow: '0 0 10px #00000073', my: 5, paddingTop: { xs: '10px', sm: '0' } }}>
                        <Grid item xs={6} sm={3} md={7} lg={5}  >
                            <Box paddingRight={'0em'} height={'100%'} >
                                <img src={googleBusiness} height={'100%'} width={'100%'} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={9} md={5} lg={7}>
                            <Box sx={{ padding: { xs: '1em', sm: '2em', lg: '4em' } }}>
                                <Typography sx={{ fontWeight: '600', fontSize: { xs: '1.5em', lg: '2.5em' }, lineHeight: '1.3em' }}>End of an Era: Google Business Profiles to Retire Website Functionality Soon!</Typography>
                                <Typography py={2}>End of an Era: Google Business Profiles to Retire Website Functionality Soon. In March, 2024 google business profile website will be turned off. Learn what this means and the steps you need to take right away.</Typography>
                                <Link to={''} style={{ color: '#FFA700', fontWeight: '600', fontSize: '1.2em' }}>Read More →</Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid data-aos="flip-right" data-aos-duration="500" container sx={{ justifyContent: 'center', boxShadow: '0 0 10px #00000073', my: 5, paddingTop: { xs: '10px', sm: '0' } }}>
                        <Grid item xs={6} sm={3} md={7} lg={5}>
                            <Box paddingRight={'0em'} height={'100%'} overflow={'hidden'}>
                                <img src={boostingBusiness} height={'100%'} width={'100%'} alt="" />
                            </Box>

                        </Grid>
                        <Grid item xs={9} md={5} lg={7}>
                            <Box sx={{ padding: { xs: '1em', sm: '2em', lg: '4em' } }}>
                                <Typography sx={{ fontWeight: '1000', fontSize: { xs: '1.5em', lg: '2.5em' }, lineHeight: '1.3em' }}>End of an Era: Google Business Profiles to Retire Website Functionality Soon!</Typography>
                                <Typography py={2}>End of an Era: Google Business Profiles to Retire Website Functionality Soon. In March, 2024 google business profile website will be turned off. Learn what this means and the steps you need to take right away.</Typography>
                                <Link to={''} style={{ color: '#FFA700', fontWeight: '600', fontSize: '1.2em' }}>Read More →</Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid data-aos="flip-left" data-aos-duration="500" container sx={{ justifyContent: 'center', boxShadow: '0 0 10px #00000073', my: 5, paddingTop: { xs: '10px', sm: '0' } }}>
                        <Grid item xs={6} sm={3} md={7} lg={5}>
                            <Box paddingRight={'0em'} height={'100%'} overflow={'hidden'}>
                                <img src={needOfWeb} height={'100%'} width={'100%'} alt="" />
                            </Box>

                        </Grid>
                        <Grid item xs={9} md={5} lg={7}>
                            <Box sx={{ padding: { xs: '1em', sm: '2em', lg: '4em' } }}>
                                <Typography sx={{ fontWeight: '600', fontSize: { xs: '1.5em', lg: '2.5em' }, lineHeight: '1.3em' }}>End of an Era: Google Business Profiles to Retire Website Functionality Soon!</Typography>
                                <Typography py={2}>End of an Era: Google Business Profiles to Retire Website Functionality Soon. In March, 2024 google business profile website will be turned off. Learn what this means and the steps you need to take right away.</Typography>
                                <Link to={''} style={{ color: '#FFA700', fontWeight: '600', fontSize: '1.2em' }}>Read More →</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Section 17 */}
                {/* Button */}
                <Box data-aos="fade-down" sx={{ textAlign: 'center', p: 1, my: 5 }}>
                    <Button sx={{
                        color: '#fff', fontWeight: '600', borderRadius: 0, padding: '1em 2em ',
                        boxShadow: '0 0 10px #31313191', background: '#FFA700', "&:hover": { background: '#000', boxShadow: 'none' }
                        , width: { xs: '100%', md: 'initial' }
                    }}>
                        Check Out More
                    </Button>
                </Box>

                {/* Section 18 */}
                <Box data-aos="flip-left" sx={{ backgroundImage: `url(${webQA})`, width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: '#fff', }} >
                    <Box data-aos="fade-right" data-aos-delay="100" sx={{ padding: { xs: '10em 0.7em', md: '7em' }, backgroundColor: '#00000080' }}>
                        <Typography sx={{ fontSize: '2em' }}>
                            Web Design
                            <span style={{ fontWeight: '600', display: 'block' }}>Q & A</span>
                        </Typography>
                        <Typography sx={{ maxWidth: '350px', minWidth: '250px' }}>
                            Check out some common questions and answer below.  If you have questions, you can ask us online or text us at
                            <span style={{ fontWeight: '600' }}>(857) 256-1295</span>
                        </Typography>
                    </Box>
                </Box>

                {/* Section 19 */}
                {/* FAQs */}
                <Box p={{ xs: 1, sm: 5 }}>
                    <Box sx={{ boxShadow: '0 0 10px #00000078', borderRadius: '5px', p: { xs: 1, sm: 5 }, my: 5 }}>
                        <Stack data-aos="zoom-in-up" data-aos-duration="500" sx={{
                            flexDirection: 'row', borderBottom: "1px solid #818181 ",
                            justifyContent: 'space-between', alignItems: 'center', p: 1

                        }} >
                            <Typography sx={{ fontWeight: '900', fontSize: '20px', color: '#333333' }}>Do I own the sites you build?</Typography>
                            <button onClick={faqAns1Handler} style={{ display: 'contents', color: '#FFA700', cursor: 'pointer' }}><AddIcon className={faq1Ans ? styles.faqIconActive : styles.faqIconDeActive} /></button>
                        </Stack>
                        <Box sx={{
                            borderBottom: "1px solid #818181", p: 1,
                            display: faq1Ans ? 'block' : 'none',
                        }}>
                            <Typography sx={{ fontSize: '20px', color: '#333333' }}>Yes!  You own 100% of the site design and content.  All text, photos, files, layout - it's all yours!</Typography>
                        </Box>
                        <Stack data-aos="zoom-in-up" data-aos-duration="500" sx={{
                            flexDirection: 'row', borderBottom: "1px solid #818181 ",
                            justifyContent: 'space-between', alignItems: 'center', p: 1

                        }} >
                            <Typography sx={{ fontWeight: '900', fontSize: '20px', color: '#333333' }}>Do I own the sites you build?</Typography>
                            <button onClick={faqAns2Handler} style={{ display: 'contents', color: '#FFA700', cursor: 'pointer' }}><AddIcon className={faq2Ans ? styles.faqIconActive : styles.faqIconDeActive} /></button>
                        </Stack>
                        <Box sx={{
                            borderBottom: "1px solid #818181", p: 1,
                            display: faq2Ans ? 'block' : 'none'
                        }}>
                            <Typography sx={{ fontSize: '20px', color: '#333333' }}>Yes!  You own 100% of the site design and content.  All text, photos, files, layout - it's all yours!</Typography>
                        </Box>
                        <Stack data-aos="zoom-in-up" data-aos-duration="500" sx={{
                            flexDirection: 'row', borderBottom: "1px solid #818181 ",
                            justifyContent: 'space-between', alignItems: 'center', p: 1

                        }} >
                            <Typography sx={{ fontWeight: '900', fontSize: '20px', color: '#333333' }}>Do I own the sites you build?</Typography>
                            <button onClick={faqAns3Handler} style={{ display: 'contents', color: '#FFA700', cursor: 'pointer' }}><AddIcon className={faq3Ans ? styles.faqIconActive : styles.faqIconDeActive} /></button>
                        </Stack>
                        <Box sx={{
                            borderBottom: "1px solid #818181", p: 1,
                            display: faq3Ans ? 'block' : 'none',
                        }}>
                            <Typography sx={{ fontSize: '20px', color: '#333333' }}>Yes!  You own 100% of the site design and content.  All text, photos, files, layout - it's all yours!</Typography>
                        </Box>
                        <Stack data-aos="zoom-in-up" data-aos-duration="500" sx={{
                            flexDirection: 'row', borderBottom: "1px solid #818181 ",
                            justifyContent: 'space-between', alignItems: 'center', p: 1

                        }} >
                            <Typography sx={{ fontWeight: '900', fontSize: '20px', color: '#333333' }}>Do I own the sites you build?</Typography>
                            <button onClick={faqAns4Handler} style={{ display: 'contents', color: '#FFA700', cursor: 'pointer' }}><AddIcon className={faq4Ans ? styles.faqIconActive : styles.faqIconDeActive} /></button>
                        </Stack>
                        <Box sx={{
                            borderBottom: "1px solid #818181", p: 1,
                            display: faq4Ans ? 'block' : 'none',
                        }}>
                            <Typography sx={{ fontSize: '20px', color: '#333333' }}>Yes!  You own 100% of the site design and content.  All text, photos, files, layout - it's all yours!</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Section 21 */}
                <Box sx={{ position: 'relative', }}>
                    <Box >
                        <video src={navV} autoPlay muted loop width='100%' ></video>
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        left: 0, right: 0, top: 0, height: '100%', width: '100%',
                        textAlign: 'center', color: '#fff',
                    }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center', height: '100%', width: 'fit-content', m: 'auto'
                        }}>

                            <Typography data-aos="fade-down" sx={{
                                fontSize: { xs: '1em', sm: '2em', md: '3em' },
                            }}>
                                Read to Start
                                <span style={{ fontWeight: '900', display: 'block' }}> Your Next Web Design Project?</span>
                            </Typography>

                            <Typography data-aos="zoom-in" sx={{
                                my: { xs: 0, sm: 5 },
                            }}>This could be a start of something....creative.</Typography>

                            <Button sx={{
                                color: '#fff', fontWeight: '600', borderRadius: 0, padding: '1em 2em ',
                                boxShadow: '0 0 10px #31313191', background: 'transparent',
                                fontSize: { xs: '8px', sm: '12px', md: '16px' },

                                "&:hover": { background: '#FFA700', boxShadow: 'none', color: '#fff' }

                            }}>
                                Let's Get To Work
                            </Button>
                        </Box>

                    </Box>
                </Box >

            </main >

            {/* ================ FOOTER ================  */}
            < footer >
                {/* Section 20 */}
                <Box Box sx={{ backgroundColor: '#000', }}>
                    <Stack sx={{ maxWidth: '70em', margin: 'auto', flexDirection: { xs: 'column', md: 'row' }, p: 3 }}>
                        <Box sx={{ flexBasis: '25%', px: 1 }}>
                            <Box my={3}>
                                <Box data-aos="zoom-in" sx={{ color: '#fff', py: 2 }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '900' }}>SERVICES</Typography>
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Web Design</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >SEO</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Copywriting</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Social Media Management</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Graphic Design</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Marketing Audit</NavLink>
                                </Box>
                            </Box>
                            <Box my={3}>
                                <Box data-aos="zoom-in" sx={{ color: '#fff', py: 2 }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '900' }}>RESOURCES</Typography>
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Website Portfolio</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Website Audit</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Blog</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Site Map</NavLink>
                                </Box>
                            </Box>
                        </Box>


                        <Box sx={{ flexBasis: '25%', px: 1 }}>
                            <Box my={3}>
                                <Box data-aos="zoom-in" sx={{ color: '#fff', py: 2 }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '900' }}>INDUSTRIES</Typography>
                                </Box>
                                <Box >
                                    <Stack data-aos="zoom-in" sx={{ flexDirection: 'row', justifyContent: { xs: 'start', md: 'space-between' }, padding: '10px 0', gap: '10px' }}>
                                        <Box sx={{ color: '#fff' }}>
                                            <AddIcCallIcon />
                                        </Box>
                                        <Typography sx={{ color: '#FFA700' }}>(857) 256-1295</Typography>
                                    </Stack>
                                    <Stack data-aos="zoom-in" sx={{ flexDirection: 'row', justifyContent: { xs: 'start', md: 'space-between' }, gap: '10px' }}>
                                        <Box sx={{ color: '#fff' }}>
                                            <LocalPostOfficeOutlinedIcon />
                                        </Box>
                                        <Typography sx={{ color: '#fff' }}>info@thestackgrp.com</Typography>
                                    </Stack>                            </Box>

                            </Box>
                        </Box>


                        <Box sx={{ flexBasis: '25%', px: 1 }}>
                            <Box my={3}>
                                <Box data-aos="zoom-in" sx={{ color: '#fff', py: 2 }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '900' }}>CONTACT</Typography>
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Web Design</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >SEO</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Copywriting</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Social Media Management</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Graphic Design</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Marketing Audit</NavLink>
                                </Box>
                            </Box>
                            <Box my={3}>
                                <Box data-aos="zoom-in" sx={{ color: '#fff', py: 2 }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '900' }}>CUSTOMER SUPPORT</Typography>
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <NavLink to={'/'} data-aos="zoom-in" className={styles.navLink} >Content</NavLink>
                                    <NavLink to={'/'} data-aos="zoom-in" className={styles.navLink} >Website Client</NavLink>
                                    <NavLink to={'/'} data-aos="zoom-in" className={styles.navLink} >SEO Client Login</NavLink>
                                    <NavLink to={'/'} data-aos="zoom-in" className={styles.navLink} >Website Editor Support</NavLink>
                                </Box>
                            </Box>
                            <Box my={3}>
                                <Box data-aos="zoom-in" sx={{ color: '#fff', py: 2 }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '900' }}>ONBOARDING</Typography>
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Logo Design Onboarding</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >SEO Onboarding</NavLink>
                                    <NavLink data-aos="zoom-in" to={'/'} className={styles.navLink} >Website Onboarding</NavLink>
                                </Box>
                            </Box>
                        </Box>


                        <Box sx={{ flexBasis: '25%', }}>
                            <Box my={3} sx={{ px: 1 }}>
                                <Stack sx={{ alignItems: { xs: 'center', md: 'start' } }}>
                                    <Box data-aos="zoom-in" sx={{ width: { xs: '50%', md: '70%', } }}>
                                        <img src={navLogo} alt="logo" width={'100%'} />
                                    </Box>
                                    <Box sx={{ display: 'flex', my: 3, justifyContent: 'space-between', width: { xs: '20em', md: '100%' } }}>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><FacebookOutlinedIcon /></NavLink>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><XIcon /></NavLink>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><InstagramIcon /></NavLink>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><LinkedInIcon /></NavLink>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><XIcon /></NavLink>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><InstagramIcon /></NavLink>
                                        <NavLink data-aos="zoom-in" to={'/'} className={styles.navLinkIcon} ><PinterestIcon /></NavLink>
                                    </Box>
                                </Stack>
                                <Box data-aos="fade-right" sx={{ color: '#fff', textAlign: 'center' }}>
                                    <Typography>© 2024 The Stack Group, Inc | Since 2005</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Stack >
                </Box >
            </footer >




        </div >

    )


}

export default Home