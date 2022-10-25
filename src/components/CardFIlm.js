import { Card } from "react-bootstrap";
import './style.css';

const CardFilm = (props) => {
    return (
        <Card>
            <Card.Img id="p" variant="top" src={props.gambar} />
            <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <Card.Text>
                    <h6>GENRE
                        <br></br>
                        Fiksi ilmiah, Petualangan, Kriminal, Horror, Thriller, Laga, Anak-Anak
                    </h6>
                </Card.Text>
                <a href={props.judul} className="btn btn-primary">Watch {props.judul}</a>
            </Card.Body>
        </Card>
    );
}

export default CardFilm;