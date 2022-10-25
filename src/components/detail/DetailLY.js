import { Container, Row, Col } from "react-bootstrap";

const DetailLY = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BwZs3H_UN3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Lightyear(2022)
                        <br />
                        Genre: Petualangan/Anak-anak
                        <hr />
                        <br />
                        Tanggal rilis: 17 Juni 2022 (Amerika)
                        <br />
                        Sutradara: Angus MacLane
                        <br />
                        Box office: 226,4 juta USD
                        <br />
                        Anggaran: 200 juta USD
                        <br />
                        Produser: Galyn Susman
                        <br />
                        Perusahaan produksi: Pixar Animation Studios, Walt Disney Pictures
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Lightyear adalah film aksi fiksi ilmiah animasi komputer Amerika yang akan datang yang diproduksi oleh Pixar Animation Studios dan Walt Disney Pictures dan didistribusikan oleh Walt Disney Studios Motion Pictures. Film ini merupakan sempalan dari seri film Toy Story, yang berperan sebagai cerita asal untuk karakter manusia fiksi Buzz Lightyear, yang menginspirasi action figure dengan nama yang sama. Film ini disutradarai oleh Angus MacLane (dalam debut penyutradaraan film panjang) dan dibintangi oleh Chris Evans sebagai karakter tituler dengan Keke Palmer, Dale Soules, Taika Waititi, Peter Sohn, Uzo Aduba, James Brolin, Mary McDonald-Lewis, Efren Ramirez, dan Isiah Whitlock Jr. dalam peran pendukung.[2] Film ini mengeksplorasi asal usul Buzz Lightyear, seorang pilot uji manusia muda yang akan menjadi Space Ranger.
                        <br />
                        Lightyear tayang perdana di El Capitan Theatre pada tanggal 8 Juni 2022 dan dirilis di bioskop Amerika Serikat pada 17 Juni 2022.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailLY;