import { Container, Row, Col } from "react-bootstrap";

const DetailRH = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zwPn9ZnbCo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Robinhood (2018)
                        <br />
                        Genre: Laga/Petualangan
                        <hr />
                        <br />
                        Tanggal rilis: 20 November 2018 (Indonesia)
                        <br />
                        Sutradara: Otto Bathurst
                        <br />
                        Produser: Leonardo DiCaprio, Joby Harold, Jennifer Davisson Killoran, Tory Tunnell, Howard Ellis
                        <br />
                        Box office: 86,5 juta USD
                        <br />
                        Perusahaan produksi: Lionsgate, Summit Entertainment, Appian Way Productions, Thunder Road Pictures, Safehouse Pictures
                        <br />
                        Bahasa: Inggris
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Robin Hood (Taron Egerton) sebagai tentara salib kembali ke negerinya dalam keadaan yang berbeda. Ia menemukan pejabat korup dan menghabiskan uang kerajaan sementara rakyat dalam keadaan sengsara. Bersama Little John (Jamie Foxx) Ia melawan tirani Inggris yang sangat kuat.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailRH;