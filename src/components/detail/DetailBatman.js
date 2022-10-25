import { Container, Row, Col } from "react-bootstrap";

const Detailbatman = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Batman : The Dark Knight (2008)
                        <br />
                        Genre: Kejahatan, Drama, Superhero
                        <hr />
                        <br />
                        Tanggal rilis: 18 Juli 2008 (Indonesia)
                        <br />
                        Sutradara: Christopher Nolan
                        <br />
                        Box office: 1,006 miliar USD
                        <br />
                        Anggaran: 180 juta USD, 185 juta USD
                        <br />
                        Sekuel: The Dark Knight Rises
                        <br />
                        Nominasi: MTV Movie & TV Award untuk Tokoh Antagonis Terbaik, LAINNYA

                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        The Dark Knight adalah film superhero 2008 yang disutradarai, diproduksi, dan ditulis bersama oleh Christopher Nolan. Berdasarkan karakter DC Comics Batman, film ini merupakan sekuel kedua dari the Dark Knight Trilogy karya Nolan dan sekuel dari Batman Begins tahun 2005., dibintangi oleh Christian Bale dan didukung oleh Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, dan Morgan Freeman. Dalam film tersebut, Bruce Wayne /Batman (Bale), Letnan Polisi James Gordon (oldman) dan Jaksa Distrik Harvey Dent(Eckhart) membentuk aliansi untuk membongkar kejahatan terorganisir di Kota Gotham, tetapi diancam oleh dalang anarkis yang dikenal sebagai Joker (Ledger), yang berusaha melemahkan pengaruh Batman dan membuat kota kacau balau.

                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default Detailbatman;