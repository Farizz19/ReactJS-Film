import { Container, Row, Col } from "react-bootstrap";

const Detailjoker = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Joker (2019)
                        <br />
                        Genre: Kejahatan, Drama, Cerita Seru
                        <hr />
                        <br />
                        Tanggal rilis: 2 Oktober 2019 (Indonesia)
                        <br />
                        Sutradara: Todd Phillips
                        <br />
                        Sekuel: Joker: Folie à Deux
                        <br />
                        Penghargaan: Academy Award untuk Aktor Terbaik, LAINNYA
                        <br />
                        Bahasa: Inggris
                        <br />
                        Distributor: Warner Bros. Pictures

                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Arthur Fleck, seorang badut pesta, hidup dalam keadaan sulit bersama ibunya yang sakit-sakitan. Karena orang-orang menganggapnya aneh, ia memutuskan untuk berubah menjadi jahat dan membuat kekacauan.
                        <br />
                        Joker adalah film cerita seru psikologis Amerika Serikat tahun 2019 yang disutradarai oleh Todd Phillips dan diproduseri oleh Todd Philips, Bradley Cooper, dan Emma Tillinger Koskoff.

                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default Detailjoker;