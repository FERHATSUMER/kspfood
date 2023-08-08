import React from 'react';
import './App.css';

// Diğer yemek resimlerini içe aktarın

const App = () => {
  const menuItems = [
    {
      image: 'https://images.deliveryhero.io/image/fd-tr/LH/qeb0-hero.jpg',
      title: 'Tavuk Döner',
      description: 'Tavuk Döner açıklama',
    },
    {
      image: 'https://images.deliveryhero.io/image/fd-tr/LH/t76e-hero.jpg',
      title: 'Hamburger',
      description: 'Yemek 2 açıklama...',
    },
    {
      image: 'https://images.deliveryhero.io/image/fd-tr/LH/w4tk-hero.jpg',
      title: 'Kumru',
      description: 'Yemek 2 açıklama...',
    },
    {
      image:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/12/patatesli-gozleme-one-cikan-yeni.jpg',
      title: 'Gözleme',
      description: 'Yemek 2 açıklama...',
    },
    {
      image:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/firinda-tavuk-sis-asama-one-cikan.jpg',
      title: 'Tavuk Şiş',
      description: 'Yemek 2 açıklama...',
    },
    {
      image:
        'https://images.deliveryhero.io/image/fd-tr/LH/lgvp-hero.jpg?width=512&height=384&quality=45',
      title: 'Kıyma',
      description: 'Yemek 2 açıklama...',
    },
    {
      image: 'https://harbiyiyorum.com/wp-content/uploads/C3UgNoDXUAAzPmP.jpg',
      title: 'Ezme Nohut',
      description: 'Yemek 2 açıklama...',
    },
    {
      image: 'https://cdn.getiryemek.com/products/1620124649909_1000x750.jpeg',
      title: 'Ciğer Kavurma',
      description: 'Yemek 2 açıklama...',
    },
  ];

  return (
    <div className='App'>
      <header>
        <div className='container'>
          <div className='headertitle'>
            <img
              src='https://upload-isinolsun-com.mncdn.com/Company/2023/7/22/587047520230722073253373.jpg'
              alt='logo'
              className='logo'
            />
            <h1> KSP FAST FOOD DÖNER </h1>
            <img
              src='https://upload-isinolsun-com.mncdn.com/Company/2023/7/22/587047520230722073253373.jpg'
              alt='logo'
              className='logo'
            />
          </div>

          <nav>
            <ul>
              <li>
                <a href='#menu'>Menü</a>
              </li>
              <li>
                <a href='#about'>Hakkımızda</a>
              </li>
              <li>
                <a href='#contact'>İletişim</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id='menu'>
        <div className='container'>
          <h2>Menü</h2>
          <ul className='menu-list'>
            {menuItems.map((item, index) => (
              <li className='menu-item' key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id='about'>
        <div className='container'>
          <h2>Hakkımızda</h2>
          <p>
            Restoranımız 20 yıldır lezzetli yemekleriyle hizmet vermektedir.
          </p>
        </div>
      </section>

      <section id='contact'>
        <div className='container'>
          <h2>İletişim</h2>
          <div className='contact-info'>
            <p>
              İletişim bilgileri: Yeditepe Mah. 85087nolu Sk. No:2B/A
              GAZİANTEP/ŞAHİNBEY{' '}
            </p>
            <a href='#' className='btn'>
              {' '}
              ÖNERİ VE ŞİKAYET
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
