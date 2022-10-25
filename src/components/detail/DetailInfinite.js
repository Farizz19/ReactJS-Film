import { Container, Row, Col } from "react-bootstrap";

const DetailInf = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1doAmMGu0-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Infinite Storm (2022)
                        <br />
                        Genre: Laga/Petualangan
                        <hr />
                        <br />
                        Tanggal rilis: 25 Maret 2022 (Amerika)
                        <br />
                        Sutradara: Małgorzata Szumowska, Michał Englert
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Infinite Storm adalah sebuah film petualangan drama Amerika tahun 2022 yang disutradarai oleh Małgorzata Szumowska, disutradarai bersama oleh Michał Englert, dan dengan skenario oleh Josh Rollins, berdasarkan artikel High Places: Footprints in the Snow Lead to an Emotional Rescue oleh Ty Gagne.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailInf;