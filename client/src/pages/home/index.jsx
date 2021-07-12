import React from 'react';
import './style.css';
import SideBar from '../../components/SideBar';
import Podcasts from '../../components/Podcasts';
import Musics from '../../components/Musics';

const Home = () => {
  return (
    <>
      <SideBar />
      <div className="body">
        <Podcasts />
        <Musics />
      </div>
    </>
  );
}
 
export default Home;