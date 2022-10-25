import { Container, Row, Col } from "react-bootstrap";

const DetailMOS = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/T6DJcgm3wNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Superman : Man of Steel (2013)
                        <br />
                        Genre: Laga/Petualangan
                        <hr />
                        <br />
                        Tanggal rilis: 13 Juni 2013 (Indonesia)
                        <br />
                        Sutradara: Zack Snyder
                        <br />
                        Sekuel: Batman v Superman: Dawn of Justice
                        <br />
                        Box office: 668 juta USD
                        <br />
                        Diadaptasi dari: Superman
                        <br />
                        Bahasa: Inggris
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Man of Steel adalah film pahlawan super Amerika tahun 2013 yang disutradarai oleh Zack Snyder, diproduseri oleh Christopher Nolan, dan ditulis oleh David S. Goyer. Film ini menceritakan karakter DC Comics, Superman. Bintang film Henry Cavill yang berperan sebagai Superman dalam film bermain bersama Amy Adams sebagai Lois Lane, Michael Shannon sebagai Jenderal Zod, Diane Lane sebagai Martha Kent, Kevin Costner sebagai Jonathan Kent, Laurence Fishburne sebagai Perry White, dan Russell Crowe sebagai Jor-El. Man of Steel dimaksudkan untuk meluncurkan karakter fiksi alam semesta bersama DC Comics pada film.[3]
                        <br />
                        Pemutaran perdana Man of Steel di AS dihadiri oleh para pemeran utamanya di New York City pada 10 Juni 2013.[4] Film ini dirilis untuk umum pada 14 Juni 2013, secara konvensional, 3D[5] dan teater IMAX.[6]
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailMOS;