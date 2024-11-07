import logo17 from '../images/ola-driver.png';
import logo16 from '../images/olalogo.png';
import logo15 from '../images/indigenous-cell.png';
import logo14 from '../images/pli-agreement.png';
import logo13 from '../images/ola-to-invest.png';
import logo12 from '../images/foods-variety.png';
import logo11 from '../images/foods-discount.png';
import logo10 from '../images/foods-delivery.png';
import logo9 from '../images/mother-son.png';
import logo8 from '../images/womens.png';
import logo7 from '../images/donating.png';
import logo6 from '../images/insure-daily.png';
import logo5 from '../images/insure-hospicash.png';
import logo4 from '../images/insure-trips.png';
import logo1 from '../images/insurance-1.png';
import logo2 from '../images/insurance-3.png';
import logo3 from '../images/insurance-2.png';
import insurance from '../images/insurance-shop-img.png';
import Video from '../images/video.mp4';
import Budget from '../images/ride-budget.png';
import Distance from '../images/ride-distance.png';
import Duration from '../images/ride-duration.png';
import city from '../images/cts-covered.png';
import year from '../images/year-rides.png';
import kms from '../images/kms-covered.png';
import Mobile from '../images/index_banner_mobile.png';
import { Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web from '../images/index_banner.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import './styles.css';

function Login() {
    return (
        <>
            {/* introduce m&w */}
            <Row className='l2'>
                <Col lg={2}></Col>
                <Col lg={8}> <img src={Web} className='a1' />
                    <img src={Mobile} className='a2' /></Col>
                <Col lg={2}></Col>
            </Row>
            {/* Global */}
            <Row className='l2'>
                <Col lg={2}></Col>
                <Col lg={8}><h1 className='b1'>Global mobility ecosystem driving<br />communities forward</h1></Col>
                <Col lg={2}></Col>
            </Row>
            {/* 3 logos for web */}
            <div className='w1'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={4}>
                                <img src={city} className='c1' />
                                <p className='s1'>250+</p>
                                <p className='s2'>cities covered</p>
                                <p className='s3'>Across India, Australia, New Zealand and the UK</p></Col>
                            <Col lg={4}>

                                <img src={year} className='c1' />
                                <p className='s1'>55 Cr+</p>
                                <p className='s2'>Yearly rides</p>
                                <p className='s3'>Booked by our customers every year</p></Col>
                            <Col lg={4}>

                                <img src={kms} className='c1' />
                                <p className='s1'>12 Cr+</p>
                                <p className='s2'>Kilometers on S1</p>
                                <p className='s3'>Distance covered on Ola S1 scooters within a year of launch</p></Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row >
            </div>
            {/* 3 logos for mob */}
            <div className='p1'>
                <Row>
                    <Col xs={4} >
                        <img src={city} className='q1' />
                        <img src={year} className='q1' />
                        <img src={kms} className='q1' />

                    </Col>
                    <Col xs={8}>
                        <p className='m1'>250+cities</p>
                        <p className='r3'>Across India, Australia,<br /> New Zealand and the UK</p>
                        <p className='m1'>55Crore+ Yearly rides</p>
                        <p className='r3'>Booked by our<br /> customers every year</p>
                        <p className='m1'>12crore+ km  on S1</p>
                        <p className='r3'>Distance covered on Ola<br /> S1 scooters within a year<br /> of launch</p>

                    </Col>
                </Row>
            </div>
            {/* ola ride */}
            <Row className='l2'>
                <Col lg={2}></Col>
                <Col lg={8}><p className='d1'>There's an ola ride for everyone </p>
                    < p className='d2'>There's an ola ride for everyone </p></Col>

                <Col lg={2}></Col>
            </Row >
            {/* 3 logos for web */}
            <div className='k1'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row><Col lg={4}>
                            <img src={Budget} className='p2' />
                            <p className='p22'> For any budget</p>
                            <p className='p222'>From Bikes and Autos to Prime<br />
                                Sedans and Prime SUVs, you<br />
                                will find a ride in your budget at<br />your convenience any time.</p>
                        </Col>
                            <Col lg={4}><img src={Distance} className='p2' />
                                <p className='p22'> For any distance</p>
                                <p className='p222'>Book rides within the city with<br />
                                    Daily, or take a trip to your<br />
                                    favourite destinations outside<br />
                                    the city with Outstation.</p>
                            </Col>
                            <Col lg={4}> <img src={Duration} className='p2' />
                                <p className='p22'>For any duration</p>
                                <p className='p222'>Easily plan a day out without<br />
                                    having to worry about<br />
                                    conveyance with an hour-based<br />
                                    package from Rental.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </div >
            {/* 3 logos for mob */}
            <div className='z2'>
                <Row className='l2'>
                    <Col xs={4}> <img src={Budget} className='p3' /></Col>
                    <Col xs={8}> <p className='p4'> For any budget</p><br />
                        <p className='p5'>From Bikes and Autos to Prime Sedans<br />
                            and Prime SUVs, you will find a ride in<br />
                            your budget at your convenience any<br />
                            time.</p></Col>
                </Row>
                <Row className='l2'>
                    <Col xs={4}> <img src={Distance} className='p3' /></Col>
                    <Col xs={8}> <p className='p4'> For any distance</p><br />
                        <p className='p5'>Book rides within the city with<br />
                            Daily, or take a trip to your<br />
                            favourite destinations outside<br />
                            the city with Outstation.</p></Col>
                </Row>
                <Row className='l2'>
                    <Col xs={4}> <img src={Duration} className='p3' /></Col>
                    <Col xs={8}> <p className='p4'>For any duration</p><br />
                        <p className='p5'>Easily plan a day out without<br />
                            having to worry about<br />
                            conveyance with an hour-based<br />
                            package from Rental.</p></Col>
                </Row >
            </div >
            {/* slide video for web */}
            <div className='w2'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={4} ><video src={Video} width="450" height="750" controls className='b2' />
                    </Col>
                    <Col lg={4} >
                        <div className='f22'>
                            <Row><p className='b3'>Making<br />innovations<br />since 2011</p>
                                <p className='b4'>For Riders</p>
                                <p className='b5'>We constantly experiment to<br />
                                    come up with industry-first<br />
                                    features for our riders that<br />
                                    eventually become a norm.</p>
                                <br />
                                <p className='b4'>For Drivers</p>
                                <p className='b5'>Our drivers get real time stats to<br />
                                    help optimize their rides better<br />
                                    and earn more, straight from the<br />
                                    app.</p>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </div>
            {/* making innovations for mob */}
            <div className='m11'>
                <Row className='m2'>Making innovations<br />since 2011</Row>
            </div>
            {/* slide video for mob */}
            <div className='v12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide ><video src={Video} width="390" height="700" controls />
                        <Row ><p className='v13'> For Riders</p>
                            <p className='v14'>We constantly experiment to come up with<br />industry-first
                                features for our riders that<br />eventually become a norm.</p>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide><video src={Video} width="390" height="700" controls />
                        <Row><p className='v13'>For Driver</p>
                            <p className='v14'>Our drivers get real time stats to help optimize<br />
                                their rides better and earn more, straight from<br />the app.</p>

                        </Row>
                    </SwiperSlide>




                </Swiper>
            </div>
            {/* Experience line */}
            <div className='e1'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <p className='v15'>Experience the<br />smarter way to pay</p>
                        <p className='v16'>Experience the<br />smarter way to pay</p>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </div>
            <div className='c12'>
                {/* next pic */}
                <div className='l1'>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <Row>
                                <Col lg={6}>< img src={insurance} className='l2' /></Col>
                                <Col lg={6}><p className='l3'>Postpaid+</p>
                                    <p className='l4'> Trusted by 40 lakh+ users</p>
                                    <p className='l5'> Buy now, pay later for all<br />
                                        spends once a month</p>
                                    < img src={insurance} className='l7' />
                                    <Row>
                                        <Col xs={4}>
                                            <img src={logo1} />
                                            <p className='l6'>Buy now, pay after 30 days</p></Col>
                                        <Col xs={4}>
                                            <img src={logo2} />
                                            <p className='l6'>Shop across 20,000 apps</p></Col>
                                        <Col xs={4}>
                                            <img src={logo3} />
                                            <p className='l6'>Credit limit upto ₹100,000</p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </div>
                <br />
                <br />
                <br />
                {/* insurance row */}
                <div className='l12'>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={4}>
                            <hr className='c13' />
                            <p className='l8'>Insurance</p>
                            <p className='l9'>Effective insurances for all<br />your risks</p>
                            <br />
                            <a className='l10' href='https://www.olacabs.com/'>Explore more on the ola app→</a>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={4}>< img src={logo4} className='l11' /></Col>
                                <Col lg={4}>< img src={logo6} className='l11' /></Col>
                                <Col lg={4}>< img src={logo5} className='l11' /></Col>
                            </Row>
                            <p className='l18'>+Much more</p>
                        </Col>

                        <br />
                        <div className='l17'>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide> < img src={logo4} className='l15' /></SwiperSlide>
                                <SwiperSlide>< img src={logo6} className='l15' /></SwiperSlide>
                                <SwiperSlide> < img src={logo5} className='l15' /><br /></SwiperSlide>
                            </Swiper>
                        </div>
                        <a className='l19' href='https://www.olacabs.com/'>Explore more on the ola app→</a>
                    </Row>
                </div>
            </div>


















































































































































            
            
            {/* making and pics */}
            <div className='m9'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={4}> <p className='m0'>Making a difference</p>
                        <p className='m7'>Ola Foundation, the social welfare arm of Ola, is an outcome of a belief based on real interactions,
                            research, and extensive study on the far-reaching impact of enabling and equipping people.</p>
                        <img src={logo8} className='m2' /><br />
                        <img src={logo7} className='m21' />
                        <img src={logo9} className='m31' />

                    </Col>

                    <Col lg={4}>
                        <Row>
                            <div className='m23'>
                                <Col lg={6}>
                                    <p className='m4'>1 Lakh+</p>
                                    <p className='m5'>Families impacted in<br />FY 2020-21</p>
                                </Col>
                                <Col lg={6}>
                                    <p className='m4'>93 Lakh+</p>
                                    <p className='m5'>Meals enabled across India in FY 2020-21</p>
                                </Col>
                            </div>
                        </Row>

                        <img src={logo9} className='m3' />

                    </Col>

                    <Col lg={2}></Col>
                </Row>
            </div>
            {/* 1 lakh line for Mobile */}
            <div className='m22'>
                <Row>
                    <Col xs={6}>
                        <p className='m4'>1 Lakh+</p>
                        <p className='m5'>Families impacted in<br />FY 2020-21</p>
                    </Col>
                    <Col xs={6}>
                        <p className='m4'>93 Lakh+</p>
                        <p className='m5'>Meals enabled across India in FY 2020-21</p></Col>
                </Row>
            </div>
            < a className='m8' href='https://www.ola.foundation/'>More about Ola foundation→</a>
            <br />
            {/* Experience */}
            <div className='t11'>
                <p className='r1'>Experience a new<br />way to order food</p>
                <hr className='r2' />
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={3} className='t1'>
                        < p className='t2'>ONDC Food</p>
                        < p className='t3'>Make hunger disappear with your go to comfort food.</p>
                        < a className='t4' href='https://play.google.com/store/apps/details?id=com.olacabs.customer&hl=en_IN&gl=US&pli=1'>
                            Explore more on the ola app→</a>
                    </Col>
                    <Col lg={5}> < img src={logo12} className='t5' />
                        < img src={logo11} className='t5' />
                        < img src={logo10} className='t5' />
                        <br />
                        <br />
                        < p className='t6'>Powered by Ola Stores Technologies Private Limited</p>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row className='t10'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide>< img src={logo12} className='t8' /></SwiperSlide>
                        <SwiperSlide> < img src={logo11} className='t8' /></SwiperSlide>
                        <SwiperSlide>< img src={logo10} className='t8' /></SwiperSlide>
                    </Swiper>
                </Row>
                < a className='t9' href='https://play.google.com/store/apps/details?id=com.olacabs.customer&hl=en_IN&gl=US&pli=1'>
                    Explore more on the ola app →</a>
            </div>
            {/* recent line */}
            <Row className='t21 l2'>
                <Col lg={2}></Col>
                <Col lg={8} className='t12'><p>Recent from our blogs</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            {/* ola signs pli for web  */}
            <div className='t19'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={4}>
                                < img src={logo13} className='t14' /><p className='t15'>Ola signs PLI agreement</p>
                                <a href='https://blog.olaelectric.com/ola-signs-pli-agreement-with-ministry-of
                        -heavy-industries-for-local-battery-cell-manufacturing/'></a><p className='t16'>know more→</p></Col>
                            <Col lg={4}>
                                < img src={logo14} className='t14' /><p className='t15'>Ola to invest $500 million</p>
                                <a href='https://blog.olaelectric.com/ola-signs-pli-agreement-with-ministry-of
                        -heavy-industries-for-local-battery-cell-manufacturing/'></a><p className='t16'>know more→</p></Col>
                            <Col lg={4}>
                                < img src={logo15} className='t14' /><p className='t15'>India's first indigenous cell</p>
                                <a href='https://blog.olaelectric.com/ola-signs-pli-agreement-with-ministry-of
                        -heavy-industries-for-local-battery-cell-manufacturing/'></a><p className='t16'>know more→</p></Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row >
            </div>
            {/* ola signs pli for mob */}
            <div className='t17'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>< img src={logo14} className='t18' /><p className='t15'>Ola signs PLI agreement</p>
                        <a href='https://blog.olaelectric.com/ola-signs-pli-agreement-with-ministry-of
                        -heavy-industries-for-local-battery-cell-manufacturing/'></a><p className='t16'>know more→</p></SwiperSlide>
                    <SwiperSlide>< img src={logo13} className='t18' /><p className='t15'>Ola to invest $500 million</p>
                        <a href='https://blog.olaelectric.com/ola-signs-pli-agreement-with-ministry-of
                        -heavy-industries-for-local-battery-cell-manufacturing/'></a><p className='t16'>know more→</p></SwiperSlide>
                    <SwiperSlide>< img src={logo15} className='t18' /><p className='t15'>India's first indigenous cell</p>
                        <a href='https://blog.olaelectric.com/ola-signs-pli-agreement-with-ministry-of
                        -heavy-industries-for-local-battery-cell-manufacturing/'></a><p className='t16'>know more→</p></SwiperSlide>
                </Swiper>
            </div>
            <br />
            <Row className='l2'>
                <Col lg={2}></Col>
                <Col lg={8}><p className='d4'>Download our apps to<br />get the best experience</p></Col>
                <Col lg={2}></Col>
            </Row>
            <Row className='l2'>
                <Col lg={2}></Col>
                <Col lg={8}><p className='d5'>Download our apps </p></Col>
                <Col lg={2}></Col>
            </Row>
            <div className='o1' href='https://chatgpt.com/'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body className='o2'>
                        <Card.Title ><img src={logo16} className='o5' /></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><br /></Card.Subtitle>
                        <Card.Text><p className='o4'>Ola</p>
                            <p className='o3'>→</p>
                            <p className='o6'>Book cabs, buy insurance,<br />access Ola Money and much more</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='o11' href='https://chatgpt.com/'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body className='o22'>
                        <Card.Title ><img src={logo17} className='o55' /></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><br /></Card.Subtitle>
                        <Card.Text><p className='o44'>Ola Driver</p>
                            <p className='o33'>→</p>
                            <p className='o66'>Register as a driver to take rides, see your earnings and incentives</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Card body className='ola3'><img src={logo16} /> <p className='ola2'> Ola</p>Book cabs, buy insurance,access Ola Money and much more→</Card>;
            <Card body className='ola3'><img src={logo17} /> <p className='ola2'> Ola Driver</p>Register as a driver to take rides, see your earnings and incentives→</Card>;
            {/* <div className='ola11'>
            <Card body><img src={logo17} /><p className='ola2'>Ola Driver</p><br/>Register as a driver to take rides, see your earnings and incentives→</Card>;
            </div> */}



        </>
    );
}
export default Login;