import img1 from '../images/image 4kitob.svg'
import img2 from '../images/Vectorlupa.svg'
import img3 from '../images/Groupqol.svg'
import img4 from '../images/Vector 14-hr.svg'
import img5 from '../images/image 38yurag.png'
import img6 from '../images/image 45baliqalar.png'
import img7 from '../images/image 44qiz.png'
import img8 from '../images/image 39totto-chan.png'
import img9 from '../images/Group 123right.svg'
import img10 from '../images/Group 124left.svg'
import img11 from '../images/image 41hati-hati.png'
import img12 from '../images/image 45atomi-rasa.png'
import img13 from '../images/image 37berjalan.png'

export default function header() {
    return ( 
        <>
        
        <header className="header-content">
        {/* <!-- NAVBAR  --> */}
        <nav>
            <div className="nav-logo">
                <img src= {img1} alt='logo'/>
            </div>
            <ul className="nav-ul">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Koleksi</a></li>
                <li><a href="#">Syarat dan Ketentuan</a></li>
                <li><a href="#">Kontak</a></li>
                <li><button>Masuk</button></li>
            </ul>
        </nav>

        <div className="header-content-text">
            <h4>Pojok Baca <span> Probolinggo</span></h4>
            <h1>Pinjam Buku Secara <span> Gratis</span> untuk Masyarakat</h1>
            <div className="btns">
                <button className="lupa">Cari Judul Buku <img src={img2} alt="lupa"/></button>
                <button className="qol">Donasi dengan Kami <img src={img3} alt="d"/></button>
            </div>
        </div>
        <img src={img4} alt="hr" className="hr1"/>
<div className="cards-wrapper">
        <div className="yurag upper-card">
            <h6>Sedang Tuhan pun Cemburu</h6>
            <h5>Emha Ainun Nadjib</h5>
            <img src={img5} alt="yurag"/>
        </div>
        <div className="baliq center-card">
            <h6>Laut Bercerita</h6>
            <h5>Leila S. Chudori</h5>
            <img src={img6} alt="yurag"/>
        </div>

        <div className="qiz bottom-card">
            <h6>Perempuan di Titik Nol</h6>
            <h5>Nawal eEl Saadawi</h5>
            <img src={img7} alt="yurag"/>
        </div>

        <div className="middle-card">
            <h6>Toto-chan : The Little Girl At The Window</h6>
            <h5>Testuko Kuroyanagi</h5>
            <img src={img8} alt="yurag"/>
        </div>
        <img src={img9} alt="right" className="middle-card-right"/>
        <img src={img10} alt="right" className="middle-card-left"/>

        <div className="yurag hati">
            <h6>Hati-Hati dengan Sampah</h6>
            <h5>Ukjae Lee</h5>
            <img src={img11} alt="img"/>
        </div>

        <div className="baliq anatom">
            <h6>Anatomi Rasa</h6>
            <h5>Ayu Utami</h5>
            <img src={img12} alt="img"/>
        </div>

        <div className="qiz berjalan">
            <h6>Berjalan di Atas Cahaya</h6>
            <h5>Hanum Salsabiela Rais</h5>
            <img src={img13} alt="yurag"/>
        </div>

        </div>
        
    </header>



        </>
     );
}

