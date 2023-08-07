import React from 'react';
import './App.css';

// Diğer yemek resimlerini içe aktarın

const App = () => {
  const menuItems = [
    {
      title: 'Yemek 1',
      description: 'Yemek 1 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },
    {
      title: 'Yemek 2',
      description: 'Yemek 2 açıklama...',
    },

  ];

  return (
    <div className="App">
      <header>
      <img src='https://upload-isinolsun-com.mncdn.com/Company/2023/7/22/587047520230722073253373.jpg' alt='logo' 
          className='logo'
        />
        <div className="container">
       
          <h1>KSP FAST FOOD DÖNER</h1>
          <nav>
            <ul>
              <li><a href="#menu">Menü</a></li>
              <li><a href="#about">Hakkımızda</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="menu">
        <div className="container">
          <h2>Menü</h2>
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
          <h2>Hakkımızda</h2>
          <p>Restoranımız 20 yıldır lezzetli yemekleriyle hizmet vermektedir.</p>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>İletişim</h2>
          <div className="contact-info">
            <p>İletişim bilgileri: Yeditepe Mah. 85087nolu Sk. No:2B/A GAZİANTEP/ŞAHİNBEY </p>
            <a href="#" className="btn">  ÖNERİ VE ŞİKAYET</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
