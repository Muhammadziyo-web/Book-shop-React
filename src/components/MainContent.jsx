import img1 from '../images/Ellipse 24hatta.png'
import img2 from '../images/Ellipse 24najwa.png'
import img3 from '../images/Group 112cicle.svg'
import img4 from '../images/Ellipse 24guy.png'
import img5 from '../images/Group 124left.svg'
import img6 from '../images/Ellipse 24-brooklyn.png'
import img7 from '../images/Group 123right.svg'


function MainContent() {
    return ( 
        <>

        <div className="people-card1">
        <h2>Kenapa Kita Harus Membaca Buku?</h2>
        <div className="people-card-wrapper">
            <div className="people-card1-card1">
                <h3>“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”</h3>
                <img src={img1} alt="hatta"/>
                <h4>Mohammad Hatta</h4>
                <p>Wakil Presiden Indonesia Pertama</p>
            </div>

            <div className="people-card1-card1 people-card1-card2">
                <h3>“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!</h3>
                <img src={img2} alt="hatta"/>
                <h4>Najwa Shihab</h4>
                <p>Duta Membaca</p>
            </div>
        </div>
    </div>


    {/* <!--New--> */}
    <div className="statistics">
        <div className="fact">
            <img src={img3} alt="cicle"/>
            <h1>500+</h1>
            <p>Judul Buku</p>
        </div>

        <div className="fact fact2">
        <img src={img3} alt="cicle"/>
            <h1>$0</h1>
            <p>Gratis Peminjaman</p>
        </div>

        <div className="fact fact3">
        <img src={img3} alt="cicle"/>
            <h1>5</h1>
            <p>Kegiatan Rutin</p>
        </div>
    </div>

    <div className="people-card2">
        <h2>Apa Kata Mereka?</h2>
        <p id="makera">Mereka yang telah menjadi pengunjung tetap kami</p>
        <h3 id="selen">Selengkapnya</h3>

        <div className="people1">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <img src={img4} alt="bo"/>
            <h3>Guy Hawkins</h3>
            <h4>32 Tahun, Karyawan</h4>
        </div>
        <img src={img5} alt="left" className="chapga"/>


        <div className="people2">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <img src={img6} alt="bo"/>
            <h3>Guy Hawkins</h3>
            <h4>32 Tahun, Karyawan</h4>
        </div>
        <img src={img7} alt="right" className="onga"/>
        <div className="dots">
            <div className="active-dot dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
        </>
     );
}

export default MainContent;