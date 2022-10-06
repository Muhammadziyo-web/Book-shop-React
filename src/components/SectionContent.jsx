import img1 from '../images/Frame 128first.png'
import img2 from '../images/Frame 129second.png'
import img3 from '../images/Frame 130third.png'
import img4 from '../images/Groupqol-oq.svg'
import img5 from '../images/logos_whatsapp.png'



function SectionContent() {
    return ( 
<>

<div class="article">
        <h2>Kegiatan Pojok Baca Probolinggo</h2>
        <p>Intip kegiatan yang telah kami selenggarakan </p>
        <h3>Selengkapnya</h3>
        <img src={img1} alt="img" class="children"/>
        <img src={img2} alt="img" class="library"/>
        <img src={img3} alt="Frame" class="bag"/>
    </div>
    <div class="down-btns">
        <h1>Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h1>
        <h3>Percayakan melalui kegiatan kita</h3>
        <button class="donasi">Donasi dengan Kami <img src={img4} alt="Groupqol-oq"/></button>
        <p>Atau</p>
        <button class="hubungi">Hubungi Kami <img src={img5} alt="m"/></button>
    </div>
    
</>

     );
}

export default SectionContent;