import { Container, Row, Col } from "react-bootstrap";

const DetailEEAAO = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wxN1T1uxQ2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className='text-light'>
                        Judul: Everything Everywhere All At Once (2022)
                        <br />
                        Genre: Petualangan/Fiksi ilmiah
                        <hr />
                        <br />
                        Tanggal rilis: 22 Juni 2022 (Indonesia)
                        <br />
                        Sutradara: Daniel Kwan, Daniel Scheinert
                        <br />
                        Anggaran: 25 juta USD
                        <br />
                        Box office: 100,7 juta USD
                        <br />
                        Skenario: Daniel Kwan, Daniel Scheinert
                        <br />
                        Didistribusikan oleh: A24
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col className='text-light'>
                        <h3 className="mt-3">Sinopsis</h3>
                        <hr />
                        Everything Everywhere All at Once adalah sebuah film drama komedi absurd Amerika Serikat tahun 2022. Film ini ditulis dan disutradarai oleh Daniel Kwan dan Daniel Scheinert (secara kolektif dikenal sebagai "Daniels"), yang memproduksinya bersama Russo bersaudara. Film ini dibintangi oleh Michelle Yeoh sebagai seorang wanita Tionghoa-Amerika yang diaudit oleh Internal Revenue Service yang kemudian mengetahui bahwa dia harus terhubung dengan versi dirinya sendiri dari semesta paralel lain untuk mencegah makhluk yang kuat menyebabkan kehancuran multiverse. Stephanie Hsu, Ke Huy Quan, Jenny Slate, Harry Shum Jr., James Hong dan Jamie Lee Curtis juga berperan dalam film. Film ini digambarkan sebagai "pusaran genre anarki"[5] dan menampilkan unsur komedi gelap, fiksi ilmiah, fantasi, seni bela diri dan animasi.
                        <br />
                        Kwan dan Scheinert meneliti konsep multiverse sejak tahun 2010, dan mulai menulis skenario sejak tahun 2016. Awalnya ditulis untuk Jackie Chan sebagai peran utama kemudian dikerjakan ulang dan ditawarkan kepada Yeoh.[6][7] Pengambilan gambar utama dimulai pada Januari 2020 dan selesai pada bulan Maret saat pandemi COVID-19 mencapai Amerika Serikat. Soundtrack film ini menampilkan musik yang digarap oleh Son Lux, termasuk kolaborasi dengan musisi Mitski, David Byrne, André 3000 dan Randy Newman.
                        <br />
                        Everything Everywhere All at Once ditayangkan perdana di South by Southwest pada 11 Maret 2022 dan mulai rilis di bioskop secara terbatas di Amerika Serikat pada 25 Maret, sebelum rilis secara luas oleh A24 pada 8 April, di Indonesia film ini dirilis pada 22 Juni[1]. Film ini mendapat pujian dari kritikus; ulasan memuji imajinasi, arah, kinerja Yeoh, dan penanganan tema seperti eksistensialisme, nihilisme, dan identitas Asia-Amerika. Film ini telah meraup lebih dari $89 juta di seluruh dunia, menjadi film terlaris A24 sepanjang masa.
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default DetailEEAAO;