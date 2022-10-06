import img1 from '../images/image 4footer-logo.png'
import img2 from '../images/line-md_instagraminstagram.svg'
import img3 from '../images/Vectorfacebook.svg'
import img4 from '../images/Vectoryou-tube.svg'


function Footer() {
    return ( 
        <>        
    <div class="footer">
        <div className="upper-footer">
        <div class="footer-logo">
            <div className="logolar">
            <img src={img1} alt="logo"/>
            <h2>Pojok Baca Probolinggo</h2>
            </div>
            <div class="icons">
            <img src={img2} alt="img"/>
            <img src={img3} alt="img"/>
            <img src={img4} alt="img"/>
            </div>
        </div>
        <ul class="contact">
            <li><a href="#" id="bold">Kontak</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Alamat</a></li>
            <li><a href="#">No. Rekening</a></li>
        </ul>
        <ul class="tentang">
            <li><a href="#" id="bold">Tentang Kami</a></li>
            <li><a href="#">Umum</a></li>
        </ul>
        <ul class="galery">
            <li><a href="#" id="bold">Galery</a></li>
            <li><a href="#">Kegiatan 2018</a></li>
            <li><a href="#">Kegiatan 2019</a></li>
            <li><a href="#">Kegiatan 2020</a></li>
            <li><a href="#">Kegiatan 2021</a></li>
        </ul>
        

        </div>


        <footer>
            <h2>&copy; Pojok Baca Probolinggo 2022</h2>
        </footer>
    </div>      
        </>
     );
}

export default Footer;