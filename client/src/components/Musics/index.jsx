import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../api';

const Musics = () => {

  const [music, setMusic] = useState([]);

  async function selectAll(){
    const response = await api.get('/music');
    setMusic(response.data);
  }

  useEffect(() => {
    selectAll();
  }, []);

  const result = music.map(value => {
    return(
      <button className="item" key={value._id}>
        <div className="item-container-image">
          <img src={"data:image/jpg;base64," + value.image} className="item-image"/>
        </div>
        <p className="item-title">
          { value.title.length > 17 ? value.title.substr(0, 19) + '...' : value.title }
        </p>
        <p className="item-description">
          { value.description.length > 39 ? value.description.substr(0, 39) + '...' : value.description }
        </p>
      </button>
    );
  });

  return (
    <div className="container">
      <div className="container-top">
        <div>
          <p className="container-title">Seu astral</p>
          <p className="container-description">Playlists que combinam com seu astral.</p>
        </div>
        <div>
          <button className="see-it-all">VER TUDO</button>
        </div>
      </div>
      <div className="container-item">
        { result.slice(0, 5) }
      </div>
    </div>
  );
}
 
export default Musics;