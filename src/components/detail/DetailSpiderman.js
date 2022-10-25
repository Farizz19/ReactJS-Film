import { Container, Row, Col } from "react-bootstrap";

const Detailnwh = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Spiderman : No Way Home (2019)
                        <br />
                        Genre: Laga/Petualangan
                        <hr />
                        <br />
                        Tanggal rilis: 15 Desember 2021 (Indonesia)
                        <br />
                        Sutradara: Jon Watts
                        <br />
                        Anggaran: 200 juta USD
                        <br />
                        Box office: 1,916 miliar USD
                        <br />
                        Cerita oleh: Stan Lee, Steve Ditko
                        <br />
                        Produser: Amy Pascal, Kevin Feige
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Pertama kalinya dalam sejarah layar lebar Spider-Man, identitas asli dari pahlawan nan ramah ini terbongkar, sehingga membuat tanggung jawabnya sebagai seorang berkekuatan super berbenturan dengan kehidupan normalnya, dan menempatkan semua orang terdekatnya dalam posisi paling terancam.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default Detailnwh;