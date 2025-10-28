
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}>
      <div className="flex w-full grow flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex w-full items-center justify-center pt-8 pb-8">
            <div className="flex items-center gap-3">
              <Icon name="graphic_eq" className="text-primary text-5xl" />
              <span className="text-white text-4xl font-bold tracking-tighter">ADA</span>
            </div>
          </div>
          <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-5 pt-1">Milhões de músicas.<br />Grátis na ADA.</h2>
          <div className="flex justify-center">
            <div className="flex w-full flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-background-light dark:bg-[#2A3B2F] text-black dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full gap-3 ring-1 ring-white/10 hover:ring-white/20 transition-shadow">
                <img alt="Google logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqeMNxjVz8SBcNrjkpxbgL3H5-G3XsyL2b0v2CVcvLLVLZCAFM7GK2__sOFPC3xGETu8OYr-fHoYkFkGgNAoDK2bKSp1bYXejax3ONfU4IaYlLS0KlJaNWwcj5oVkln7xsvorHShSVswTZ2E7Fclri3bxGWG4iXdSoBj4DD2sagxQZlBr74TSxmgqbToFWNkQOldpkg-MRj12yzISoZIri7FwjbkBvWapNPv5LVSSIpyJcbLQbIg_G1asl7-C8ln1z9akvTcvyMsk" />
                <span className="truncate">Continuar com Google</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-background-light dark:bg-[#2A3B2F] text-black dark:text-white text-base font-bold leading-normal tracking-[0.015em] w-full gap-3 ring-1 ring-white/10 hover:ring-white/20 transition-shadow">
                <img alt="Facebook logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgJnkDoJHSn89WlzaF3SJJ5AaDIbnj7JsGWOZeEkTjr2sVvkoNDNKNdXtX8YchY-Blvf16XEiXnKjjjsHU0WX09xM6DVAADoev0j7-t621x8FAmrCOHFHvubz-xELwGlKsZyzpCmRsJ2CJ1_VH02SuG9MEhWTtrJgWMbhVdJ7bU2qgoZSfdj5OhM6dkLn7IImJ4JGNNJm2phQ0tAM7t4QZDsKmp_4buDRMIJCDwyg0yU1Vl77BAB_BOHT421flIZeIGgDt0v9bOXE" />
                <span className="truncate">Continuar com Facebook</span>
              </button>
            </div>
          </div>
          <p className="text-[#9eb7a8] text-sm font-normal leading-normal pb-3 pt-3 px-4 text-center">OU</p>
          <div className="flex w-full max-w-[480px] flex-col items-stretch gap-4 px-4 py-3">
            <label className="flex flex-col w-full flex-1">
              <p className="text-white text-base font-medium leading-normal pb-2">E-mail ou nome de usuário</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-2 focus:ring-primary border-white/20 bg-[#2A3B2F] focus:border-primary/50 h-14 placeholder:text-[#9eb7a8] p-4 text-base font-normal leading-normal transition-colors" placeholder="Digite seu e-mail ou nome de usuário" />
            </label>
            <label className="flex flex-col w-full flex-1">
              <p className="text-white text-base font-medium leading-normal pb-2">Senha</p>
              <div className="relative w-full">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-2 focus:ring-primary border-white/20 bg-[#2A3B2F] focus:border-primary/50 h-14 placeholder:text-[#9eb7a8] p-4 pr-12 text-base font-normal leading-normal transition-colors"
                  placeholder="Digite sua senha"
                  type={showPassword ? 'text' : 'password'}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <Icon name={showPassword ? 'visibility' : 'visibility_off'} className="text-[#9eb7a8] cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                </div>
              </div>
            </label>
          </div>
          <div className="flex justify-center py-3 px-4">
            <Link to="/home" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/90 transition-colors">
              <span className="truncate">ENTRAR</span>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 pt-6 pb-8 px-4">
            <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="#">Esqueceu sua senha?</Link>
            <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="#">Não tem uma conta? <span className="font-bold">Inscreva-se</span></Link>
          </div>
          <div className="text-center px-4 pt-12 pb-8">
            <p className="text-[#9eb7a8]/60 text-xs font-normal leading-relaxed">
              Ao continuar, você concorda com a nossa <a className="underline hover:text-primary/80" href="#">Política de Privacidade</a> e <a className="underline hover:text-primary/80" href="#">Termos de Serviço</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
