import { Container, Row, Col } from "react-bootstrap";

const DetailMorbius = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BwZs3H_UN3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Morbius(2022)
                        <br />
                        Genre: Laga/Fantasi
                        <hr />
                        <br />
                        Tanggal rilis: 30 Maret 2022 (Indonesia)
                        <br />
                        Sutradara: Daniel Espinosa
                        <br />
                        Box office: 163,9 juta USD
                        <br />
                        Produser: Avi Arad, Matt Tolmach, Lucas Foster
                        <br />
                        Musik digubah oleh: Jon Ekstrand
                        <br />
                        Didistribusikan oleh: Sony Pictures Motion Picture Group
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Morbius adalah film pahlawan super Amerika Serikat tahun 2022 yang didasarkan karakter Marvel Comics bernama sama. Film ini diproduksi Columbia Pictures dengan kerja sama Marvel dan disalurkan Sony Pictures Releasing. Morbius dijadwalkan akan ditayangkan di Amerika Serikat pada 19 Maret 2021 setelah sempat diundur karena pandemi COVID-19.
                        <br />
                        Ahli biokimia Michael Morbius (Jared Leto) mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailMorbius;