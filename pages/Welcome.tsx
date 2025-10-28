
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const Welcome: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark dark group/design-root overflow-x-hidden">
      <div className="flex h-full min-h-screen w-full flex-col bg-gradient-to-b from-[#2575FC]/30 to-background-dark">
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <div className="flex w-full max-w-sm flex-col items-center">
            <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="url(#paint0_linear_1_2)"></path>
              <path d="M10.75 8.5L14.75 12L10.75 15.5V8.5Z" fill="url(#paint1_linear_1_2)"></path>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2" x1="2" x2="22" y1="12" y2="12">
                  <stop stopColor="#6A11CB"></stop>
                  <stop offset="1" stopColor="#2575FC"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2" x1="10.75" x2="14.75" y1="12" y2="12">
                  <stop stopColor="#6A11CB"></stop>
                  <stop offset="1" stopColor="#2575FC"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white">ADA</p>
          </div>
          <div className="mt-12 w-full max-w-sm">
            <h1 className="text-white tracking-light text-[32px] font-bold leading-tight text-center">Sua trilha sonora, em qualquer lugar.</h1>
          </div>
        </div>
        <div className="w-full flex-shrink-0 p-6">
          <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/20 text-white">
                <Icon name="music_note" className="text-2xl" />
              </div>
              <p className="flex-1 truncate text-base font-normal leading-normal text-gray-200">Descubra milhões de músicas e podcasts.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/20 text-white">
                <Icon name="favorite" className="text-2xl" />
              </div>
              <p className="flex-1 truncate text-base font-normal leading-normal text-gray-200">Receba playlists feitas sob medida para você.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/20 text-white">
                <Icon name="download" className="text-2xl" />
              </div>
              <p className="flex-1 truncate text-base font-normal leading-normal text-gray-200">Ouça suas favoritas offline, sem interrupções.</p>
            </div>
          </div>
          <div className="mx-auto mt-12 w-full max-w-sm">
            <Link className="flex h-14 w-full items-center justify-center rounded-full bg-primary px-6 text-lg font-bold text-background-dark transition-transform hover:scale-105" to="/home">Começar Agora</Link>
            <p className="mt-6 text-center text-base text-gray-300">
              Já é membro?
              <Link className="font-bold text-white hover:underline" to="/login">Entrar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
