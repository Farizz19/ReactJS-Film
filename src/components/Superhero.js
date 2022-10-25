import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Antman from '.././assets/images/superhero/antman.jpg';
import Avenger from '.././assets/images/superhero/avenger.jpg';
import Spiderman from '.././assets/images/superhero/spiderman-cover.jpg';
import Batman from '.././assets/images/superhero/batman.jpg';
import Robinhood from '.././assets/images/superhero/robinhood.jpg';
import Superman from '.././assets/images/superhero/superman.jpg';
import CardFilm from '.././components/CardFIlm';

const Superhero = () => {
    return (
        <div id="superhero" className="content pt-5">
            <Container className='py-3 text-center'>
                <h1 className="text-light bg-dark">
                    SUPERHERO
                </h1>
                <Row className="mb-4">
                    <Col>
                        <CardFilm gambar={Avenger} judul="Avenger" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Batman} judul="Batman" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Superman} judul="Superman" />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <CardFilm gambar={Robinhood} judul="Robinhood" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Spiderman} judul="Spiderman" />
                    </Col>

                    <Col>
                        <CardFilm gambar={Antman} judul="Antman" />
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Superhero;