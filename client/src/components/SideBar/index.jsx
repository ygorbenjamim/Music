import React, { useState } from 'react';
import {
  RiHome5Fill,
  RiSearchLine,
  RiGitRepositoryFill,
  RiAddBoxLine,
  RiHeartFill,
  RiDownloadFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiUserLine,
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiExternalLinkLine
} from 'react-icons/ri';
import './style.css';
import logo from '../../assets/images/spotify-logo.png';

const SideBar = () => {

  const [userMenu, setUserMenu] = useState('none');
  function handleUserMenu(){
    userMenu === 'none' ? setUserMenu('flex') : setUserMenu('none');
  }

  const [newBackground, setNewBackground] = useState('trasnparent');
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setNewBackground('#000') : setNewBackground('#222');
  });

  return (
    <div className="container">
      <div className="container-header" style={{ backgroundColor: newBackground }}>
        <div className="container-header-arrow">
          <button className="btn-arrow">
            <RiArrowLeftSLine size={30}/>
          </button>
          <button className="btn-arrow">
            <RiArrowRightSLine size={30}/>
          </button>
        </div>
        <div className="container-header-button">
          <button className="btn-up">
            <p className="btn-header-label">FAÇA UPGRADE</p>
          </button>
          <button className="btn-user" onClick={handleUserMenu}>
            <RiUserLine size={18} />
            <p className="btn-header-label">User Name</p>
            { userMenu === 'none' ? ( <RiArrowDownSFill size={25} /> ) : ( <RiArrowUpSFill size={25} /> ) }
          </button>
        </div>
        <div className="user-menu" style={{ display: userMenu }}>
          <button className="user-menu-button" >
            Conta
            <RiExternalLinkLine size={20} />
          </button>
          <button className="user-menu-button">Perfil</button>
          <button className="user-menu-button">
            Faça upgrade para Premium
            <RiExternalLinkLine size={20} />
          </button>
          <button className="user-menu-button">Sair</button>
        </div>
      </div>
      <div className="bar">
        <img src={ logo } alt="Logo" />
        
        <div className="bar-button">
          <div className="bar-button-top">
            <button className="btn" style={{ backgroundColor: '#222', color: '#eee' }}>
              <RiHome5Fill size={25} />
              <p className="btn-label">Início</p>
            </button>
            <button className="btn">
              <RiSearchLine size={25} />
              <p className="btn-label">Buscar</p>
            </button>
            <button className="btn">
              <RiGitRepositoryFill size={25} />
              <p className="btn-label">Sua biblioteca</p>
            </button>
          </div>
          <div className="bar-button-bottom">
            <button className="btn">
              <RiAddBoxLine size={25} />
              <p className="btn-label">Criar playlist</p>
            </button>
            <button className="btn">
              <RiHeartFill size={25} />
              <p className="btn-label">Músicas curtidas</p>
            </button>
          </div>
          <div className="bar-button-footer">
            <button className="btn">
              <RiDownloadFill size={25} />
              <p className="btn-label">Instalar aplicativo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SideBar;