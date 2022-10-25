import { Container, Row, Col } from "react-bootstrap";

const DetailAnt = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pWdKf3MneyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Antman (2015)
                        <br />
                        Genre: Laga/Petualangan
                        <hr />
                        <br />
                        Tanggal rilis: 17 Juli 2015 (Indonesia)
                        <br />
                        Karakter: Cassie Lang, Wasp, Dr. Hank Pym, Krylar, LAINNYA
                        <br />
                        Sutradara: Peyton Reed
                        <br />
                        Perusahaan produksi: Marvel Studios, Walt Disney Studios Motion Pictures
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Ant-Man (bahasa Indonesia: Manusia Semut) adalah sebuah film superhero Amerika Serikat yang dirilis pada 17 Juli 2015. Film ini merupakan film kedua belas di Marvel Cinematic Universe. Film ini dibintangi oleh Paul Rudd, Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Peña, Judy Greer, Tip "T.I" Harris, David Dastmalchian, Wood Harris, Jordi Mollà, dan Michael Douglas.
                        <br />
                        Penayangan perdana dunia film Ant-Man berlangsung di Los Angeles pada 29 Juni 2015, dan dirilis di Amerika Utara pada 17 Juli 2015, dalam 3D dan IMAX 3D. Sekuel film ini, yang berjudul Ant-Man and the Wasp, dirilis pada tanggal 6 Juli 2018.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailAnt;