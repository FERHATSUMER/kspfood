import React from "react";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);

  const menuItems = [
    {
      image: "https://images.deliveryhero.io/image/fd-tr/LH/qeb0-hero.jpg",
      title: "Tavuk Döner",
      description:
        "80 Gr. Tavuk + Patates + Kornişon Turşu + Köri Soslu Mayonez",
    },
    {
      image: "https://images.deliveryhero.io/image/fd-tr/LH/t76e-hero.jpg",
      title: "KSP EtBurger",
      description:
        "200 Gr. Et + Patates + Domates + Kornişon + Marul + Sos + Soğan Halkası",
    },
    {
      image: "https://images.deliveryhero.io/image/fd-tr/LH/w4tk-hero.jpg",
      title: "İzmir Sandeviç",
      description: "Domates + Kornişon + Sosis + Salam + Sucuk + Mozarella ",
    },
    {
      image:
        "https://i.pinimg.com/736x/6b/cc/bd/6bccbd2eb4165c7cafb16d11bc54f4c5.jpg",
      title: "Mozarella Tavuk Dürüm",
      description:
        "80 Gr. Tavuk + Patates + Kornişon Turşu + Köri Soslu Mayonez + Sos Mozarella",
    },
    {
      image: "https://cdn.getiryemek.com/products/1692039694958_1000x750.jpeg",
      title: "Vejeteryan Dürüm",
      description: "Patates + Kornişon Turşu + Köri Soslu Mayonez + Sos",
    },
    {
      image: "https://images.deliveryhero.io/image/fd-tr/LH/q7ua-hero.jpg",
      title: "Psikopat Tavuk Dürüm",
      description:
        "80 Gr. Tavuk + Patates + Kornişon Turşu + Köri Soslu Mayonez + Acı Sos",
    },
    {
      image:
        "https://images.deliveryhero.io/image/fd-tr/LH/dtoy-hero.jpg?width=300&height=300&quality=45",
      title: "Zurna Tavuk Dürüm",
      description:
        "95 Gr. Tavuk + Patates + Kornişon Turşu + Köri Soslu Mayonez + Sos",
    },
    {
      image: "https://cdn.getiryemek.com/products/1692039694958_1000x750.jpeg",
      title: "Mozarella Zurna Dürüm",
      description:
        "95 Gr. Tavuk + Patates + Kornişon Turşu + Köri Soslu Mayonez + Sos + Mozarella",
    },
  ];

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="headertitle">
            <div className="header-container">
              <img
                src="https://upload-isinolsun-com.mncdn.com/Company/2023/7/22/587047520230722073253373.jpg"
                alt="logo"
                className="logo"
              />
              <h1 className="title"> KSP FAST FOOD DÖNER </h1>
              <img
                src="https://upload-isinolsun-com.mncdn.com/Company/2023/7/22/587047520230722073253373.jpg"
                alt="logo"
                className="logo"
              />
            </div>
            <div>
              <a className="header-phone" href="tel:03425022009">
                <h3>Sipariş hattı : 0342 502 2009</h3>
              </a>
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#menu">Menü</a>
              </li>
              <li>
                <a href="#about">Sipariş</a>
              </li>
              <li>
                <a href="#contact">Adres</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="menu">
        <div className="container">
          <h2 className="menu-title">Menü</h2>
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li className="menu-item" key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>Sipariş</h2>
          <div className="siparisContainer">
            <li>
              <a
                href="https://getir.com/yemek/restoran/ksp-doner-sahinbey-yeditepe-mah-sahinbey-gaziantep/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://btm.istanbul/storage/uploads/news/1852/conversions/Getir-large.jpg"
                  alt="getir"
                  className="siparisIcon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.yemeksepeti.com/restaurant/wazy/ksp-fast-food-doner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://seeklogo.com/images/Y/yemek-sepeti-logo-14A9709947-seeklogo.com.png"
                  alt="yemeksepeti"
                  className="siparisIcon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.trendyol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.entegi.com/wp-content/themes/entegi/assets/src/img/brand/trendyol.png"
                  alt="trendyol"
                  className="siparisIcon"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.migros.com.tr/yemek?gclid=Cj0KCQjwgNanBhDUARIsAAeIcAsmfsQHorTssy5iXTocjlf09Q2x_pqY51g7i9tVOyl5uIEMALYIM70aAox8EALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UF0SgYHVCNYPLtkDgIxFQ_8nUzvZSaL9VQ&usqp=CAU"
                  alt="migros"
                  className="siparisIcon"
                />
              </a>
            </li>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Adres</h2>
          <div className="contact-info">
            <p>
              Adres Bilgileri: Yeditepe Mah. 85087nolu Sk. No:2B/A
              GAZİANTEP/ŞAHİNBEY
            </p>
            <div >
                <ul className="footer-info">
                  <li>
                    <a href="tel:05510081263">
                      <MdPhoneIphone />
                      <h4>Telefon</h4>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/kspfastfooddoner?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsInstagram />
                      <h4>Instagram</h4>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@kspfastfood?_d=secCgYIASAHKAESPgo8kfPQ45tPnS7rSztyCFjeh2ujn2Idoim5o7Rimy0C7iNavHXyJShxrq%2FTKTOC6o6EbymwsmWiuvDyL4g8GgA%3D&_r=1&sec_uid=MS4wLjABAAAAdBhhTX4QCvxyE2lzx-bOwHkofFtvTBmEKENXlAmg9-uDs78U4WB9cPqZARKqRBbA&share_app_id=1233&share_author_id=7259825323691541510&share_link_id=8c97b840-8a03-4e45-98ad-9be6703b5802&sharer_language=tr&source=h5_m&timestamp=1693824473&utm_campaign=client_share&utm_medium=android&utm_source=copy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok />
                      <h4>Tiktok</h4>
                    </a>
                  </li>
                </ul>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
