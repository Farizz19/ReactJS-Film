import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Lightyear from '.././assets/images/trending/lightyear.jpg'
import Everything from '.././assets/images/trending/everything.jpg';
import Dune from '.././assets/images/trending/dune.jpg';
import Morbius from '.././assets/images/trending/morbius.jpg';
import Infinite from '.././assets/images/trending/infinite.jpg';
import Joker from '.././assets/images/trending/joker.jpg';
import CardFilm from '.././components/CardFIlm';

const Trend = () => {
    return (
        <div id="trending" className="content pt-5">
            <Container className='py-3 text-center'>
                <h1 className="text-light bg-dark">TRENDING</h1>
                <Row className="mb-4">
                    <Col>
                        <CardFilm gambar={Infinite} judul="Infinite" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Joker} judul="Joker" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Dune} judul="Dune" />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <CardFilm gambar={Lightyear} judul="Lightyear" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Morbius} judul="Morbius" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Everything} judul="Everything" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Trend;