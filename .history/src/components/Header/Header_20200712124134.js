import React from 'react';
import './header.css';

function Header() {
    const background = ' https://dpv87w1mllzh1.cloudfront.net/alitalia_discover/attachments/data/000/000/404/original/catania-sicily-secret-1920x1080.jpg?1519061667';
    return ( 
        <header className="cover" style={{ backgroundImage: `url(${background})` }}>
        <div className="cover__filter"></div>
        <div className="cover__copy__section">
            <div className="cover__copy">
                <h1>Per Giulio Rossi</h1>
                <h2 className="my-3">Circuito Completo della Sicilia alla Scoperta dei Sapori</h2>
                <button className="btn btn-primary cover__button mt-3">SCOPRI DI PIÙ</button>
            </div>
        </div>
    </header>
    )
}

export default TopTitledImage

