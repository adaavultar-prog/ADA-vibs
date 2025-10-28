
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const NowPlaying: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="flex flex-col p-4 w-full h-full min-h-screen">
        <header className="flex items-center justify-between pb-4">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full">
            <Icon name="expand_more" className="text-white/90" />
          </button>
          <div className="text-center">
            <p className="text-sm font-medium text-white/60">TOCANDO DO ÁLBUM</p>
            <p className="font-bold text-white">Future Nostalgia</p>
          </div>
          <button className="flex items-center justify-center p-2 rounded-full">
            <Icon name="more_vert" className="text-white/90" />
          </button>
        </header>
        <div className="flex-shrink-0 w-full grow pt-4 pb-8">
          <div className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-lg" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKALi70xN1sID94BX7Jql5Tz9hKlxblO4iKkiNA_oGqeOBX8Q1T0uNRTdeluBUh_UCXz8ALx0aUdKg2hQ603w5Gx60Syh7s0I1kjAb5S9s41BKdMTbpBpJzdY4oTUuTz83JpNtxLO-K5PvdM_dM98UWl_aGfLFRh_1EbVj7TeothCimGWeq-tj4x74w3RyM9Ccjtt4Y3WuJd5hgJ7batHwuKvxotaR_vDtipUZuFQjuo5Jw_D6oXt8CLRkhL6tFhxtOjGqhRqNpv0")` }}></div>
        </div>
        <div className="flex items-center justify-between gap-4 pb-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-white tracking-tight text-2xl font-bold leading-tight truncate">Don't Start Now</h1>
            <p className="text-white/60 text-base font-normal leading-normal truncate">Dua Lipa</p>
          </div>
          <button className="flex items-center justify-center p-2 rounded-full">
            <Icon name="add_circle_outline" className="text-white/90" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-full bg-white/20 h-2">
            <div className="h-2 rounded-full bg-primary" style={{ width: '45%' }}></div>
          </div>
          <div className="flex justify-between">
            <p className="text-white/60 text-xs font-normal leading-normal">1:23</p>
            <p className="text-white/60 text-xs font-normal leading-normal">3:03</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <button className="flex items-center justify-center p-3 rounded-full text-white/90">
            <Icon name="shuffle" className="text-3xl" />
          </button>
          <button className="flex items-center justify-center p-3 rounded-full text-white/90">
            <Icon name="skip_previous" className="text-5xl" />
          </button>
          <button className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-background-dark">
            <Icon name="pause" className="text-6xl" />
          </button>
          <button className="flex items-center justify-center p-3 rounded-full text-white/90">
            <Icon name="skip_next" className="text-5xl" />
          </button>
          <button className="flex items-center justify-center p-3 rounded-full text-primary">
            <Icon name="repeat_one" className="text-3xl" />
          </button>
        </div>
        <footer className="flex items-center justify-between pt-4">
          <button className="flex items-center justify-center p-3 rounded-full text-white/60">
            <Icon name="devices" />
          </button>
           <button className="flex items-center justify-center p-3 rounded-full text-white/60">
            <Icon name="lyrics" />
          </button>
          <button className="flex items-center justify-center p-3 rounded-full text-white/60">
            <Icon name="share" />
          </button>
          <button className="flex items-center justify-center p-3 rounded-full text-white/60">
            <Icon name="queue_music" />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NowPlaying;
