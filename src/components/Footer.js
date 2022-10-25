import { Container, Row, Col } from 'react-bootstrap';
import XXI from '.././assets/images/bg/xxi.png';
import CGV from '.././assets/images/bg/cgv.png';
import PRM from '.././assets/images/bg/premiere.png';
import './style.css';

const Footer = () => {
    return (
        <div className='bg-black text-muted py-5 footer' id="footer">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <img src={XXI} width="600" />
                        <br />
                        <img src={CGV} width="350" />
                        <img src={PRM} width="400" />
                        <p className='text-center text-light mt-4'>
                            © 2022. RPL-Film21. All Rights Reserved.
                            Designed, developed & Maintained by Fariz
                            <br />
                            Copyright  &copy; Fariz-2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;