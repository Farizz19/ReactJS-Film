import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigasi from './Navigasi';
import './style.css';

// TRENDING
import Detaildune from './detail/Detaildune';
import Detailjoker from './detail/DetailJoker';
import DetailEEAAO from './detail/DetailEEAAO';
import DetailInf from './detail/DetailInfinite';
import DetailLY from './detail/DetailLY';
import DetailMorbius from './detail/DetailMorbius';

// SUPERHERO
import Detailbatman from './detail/DetailBatman';
import Detailavenger from './detail/DetailAvenger';
import Detailspiderman from './detail/DetailSpiderman';
import DetailMOS from './detail/DetailSuperman';
import DetailAnt from './detail/DetailAnt';
import DetailRH from './detail/DetailRH';
import Home from './Home';

const Header = () => {
    return (
        <>
            <Navigasi />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>

                    {/* TRENDING */}
                    <Route path="Dune" element={<Detaildune />}></Route>
                    <Route path="Joker" element={<Detailjoker />}></Route>
                    <Route path="Everything" element={<DetailEEAAO />}></Route>
                    <Route path="Infinite" element={<DetailInf />}></Route>
                    <Route path="Lightyear" element={<DetailLY />}></Route>
                    <Route path="Morbius" element={<DetailMorbius />}></Route>

                    {/* SUPERHERO */}
                    <Route path="Batman" element={<Detailbatman />}></Route>
                    <Route path="Avenger" element={<Detailavenger />}></Route>
                    <Route path="Spiderman" element={<Detailspiderman />}></Route>
                    <Route path="Superman" element={<DetailMOS />}></Route>
                    <Route path="Antman" element={<DetailAnt />}></Route>
                    <Route path="Robinhood" element={<DetailRH />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Header;