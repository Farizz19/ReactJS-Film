import { Container, Row, Col } from "react-bootstrap";

const Detailavenger = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Avengers : Endgame (2019)
                        <br />
                        Genre: Kejahatan, Drama, Superhero
                        <hr />
                        <br />
                        Tanggal rilis: 24 April 2019 (Indonesia)
                        <br />
                        Sutradara: Anthony Russo, Joe Russo
                        <br />
                        Box office: 2,798 miliar USD
                        <br />
                        Penghargaan: MTV Movie & TV Award untuk Tokoh Antagonis Terbaik, LAINNYA
                        <br />
                        Produser: Kevin Feige
                        <br />
                        Nominasi: MTV Movie & TV Award untuk Tokoh Antagonis Terbaik, LAINNYA
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Avengers: Endgame adalah film pahlawan super Amerika 2019 yang didasarkan pada tim superhero Avengers dari Marvel Comics, diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures. Ini adalah sekuel The Avengers 2012, film 2015 Avengers: Age of Ultron dan film 2018 Avengers: Infinity War, dan film kedua puluh dua di Marvel Cinematic Universe (MCU). Film ini disutradarai oleh Anthony & Joe Russo, yang ditulis oleh Christopher Markus dan Stephen McFeely, dan menampilkan pemeran ansambel termasuk Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, dan Josh Brolin. Dalam film itu, anggota Avengers yang masih hidup dan sekutu mereka berusaha untuk membalikkan kerusakan yang disebabkan oleh Thanos dalam Infinity War.

                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default Detailavenger;