import { Container, Row, Col } from "react-bootstrap";

const Detaildune = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/n9xhJrPXop4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Dune (2021)
                        <br />
                        Genre: Fiksi ilmiah/Petualangan
                        <hr />
                        <br />
                        Tanggal rilis: 13 Oktober 2021 (Indonesia)
                        <br />
                        Sutradara: Denis Villeneuve
                        <br />
                        Box office: 401,8 juta USD
                        <br />
                        Diadaptasi dari: Dune
                        <br />
                        Didistribusikan oleh: Warner Bros. Pictures
                        <br />
                        Nominasi: Academy Award untuk Musik Orisinil Terbaik, LAINNYA
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Dune mengisahkan tentang perjalanan keluarga Atreides yang berusaha memastikan masa depan keluarga dan rakyatnya di alam semesta.
                        <br />
                        Keluarga Atreides adalah keluarga bangsawan penguasa planet Caladan.
                        <br />
                        Letto Atraides (Oscar Isaac) mengajak mereka pergi ke planet Arrakis yang menyimpan aset paling berharga bagi umat manusia. Seorang pemuda bertalenta Atreides, Paul Atreides (Timothee Chalamet) dan ibunya, Lady Jessica (Rebecca Reguson) ikut serta dalam perjalanan ke planet berbahaya.
                        <br />

                        Di perjalanan, mereka harus berhadapan dengan cacing pasir raksasa dan harus berhadapan dengan pertempuran. Duncan Idaho (Jason Momoa) dan gurney (Jos Brolin) juga membantu Paul dalam pertempuran.
                        <br />
                        Situasi semakin pelik saat keluarga Atreides mendapat penghianatan mengerikan. Anggota keluarga Atreides yang tersisa bergabung dengan kelopok orang asli Arrakis, Fremen, dan berusaha membalaskan dendamnya.
                        <br />
                        Di sana, Paul bertemu dengan Chani (Zendaya) yang membantunya belajar tentang kemampuan psikisnya.
                        <br />
                        Bagaimana perjalanan Keluarga Atreides di planet berbahaya?
                        <br />
                        Apakah mereka berhasil melawan penghianatan dan menyelamatkan masa depan Atreides?
                        <br />
                        Saksikan kisahnya dalam film Dune di bioskop kesayangan Anda.

                    </Col>
                </Row>

            </Container>
        </Container >
    );
}

export default Detaildune;