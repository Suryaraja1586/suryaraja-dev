import './Certificates.css';
import { RiFilePaper2Line } from 'react-icons/ri';

// Import certificate files
import Cert1 from '../../certificates/Data Structures and Algorithms Design_page-0001.jpg.jpg';
import Cert2 from '../../certificates/MongoDBBasicsforStudents_Badge20250612-26-5wxjfi_page-0001.jpg';
import Cert3 from '../../certificates/Python Developer_certificate (3).jpg.jpeg';
import Img1 from '../../certificates/Excel Automation with the Modern Experience in Studio (v2024.10)_Surya Raja_en-US_diploma_page-0001.jpg';
import Img2 from '../../certificates/Surya R - Data Wrangling_page-0001.jpg';
import Cert4 from '../../certificates/Surya Raja - 2026-01-06_page-0001.jpg';
import Cert5 from '../../certificates/WhatsApp Image 2026-01-28 at 22.22.45.jpeg';
import Img3 from '../../certificates/surya-raja-51ebd10b-a181-44e8-a1ba-92303d644a67-certificate_page-0001.jpg';
import Cert6 from '../../certificates/Photo from Surya Raja.jpg.jpeg';

const data = [
    {
        id: 1,
        image: Cert1,
        pdf: null,
        title: "Data Structures & Algorithms",
        category: "Image"
    },
    {
        id: 2,
        image: Cert2,
        pdf: null,
        title: "Excel Automation",
        category: "Image"
    },
    {
        id: 3,
        image: Cert3,
        pdf: null,
        title: "MongoDB Basics",
        category: "Image"
    },
    {
        id: 4,
        image: Img1,
        pdf: null,
        title: "Certificate Photo",
        category: "Image"
    },
    {
        id: 5,
        image: Img2,
        pdf: null,
        title: "Python Developer",
        category: "Image"
    },
    {
        id: 6,
        image: Cert4,
        pdf: null,
        title: "Data Wrangling",
        category: "Image"
    },
    {
        id: 7,
        image: Cert5,
        pdf: null,
        title: "Surya Raja - 2026-01-06",
        category: "Image"
    },
    {
        id: 8,
        image: Img3,
        pdf: null,
        title: "WhatsApp Image Cert",
        category: "Image"
    },
    {
        id: 9,
        image: Cert6,
        pdf: null,
        title: "Certificate 2026",
        category: "Image"
    },
];

const Certificates = () => {
    return (
        <section className="certificates container section" id="certificates">
            <h2 className="section__title">Certificates</h2>

            <div className="certificates__container grid">
                {data.map(({ id, image, pdf, title, category }) => {
                    return (
                        <div className="certificate__card" key={id}>
                            {category === "Image" ? (
                                <img src={image} alt={title} className="certificate__img" />
                            ) : (
                                <div className="certificate__icon-wrapper">
                                    <RiFilePaper2Line className="certificate__icon" />
                                </div>
                            )}

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Certificates
