
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const madeForYou = [
  { id: 1, title: 'Daily Mix 1', description: 'Feito para você', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbYSezNhad0GNvQzIz83laqREm2K6bCaUpTdc3XT2C-WRDIyt1QbVmVmTaNOPJ4j75_pMmvl-qAofUmohuVoJN_Gu9_-VdgYotIBMpT2i5dtfzZ2puHpzKsROeHRQHLdkndN1z8rzyA0D1lx6MsLJg_iRThzAx5i9cMrncQ4eRM0opZDnYKLY1xNqSEHfvyXmYvH_Jf2mf9rvhbYSJT_TaU__jJfhpgA63SPo9d0wkAwz5197crS_5c4Kf-V5kBTAweNcUOfNOMBY' },
  { id: 2, title: 'Daily Mix 2', description: 'Feito para você', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4isnZr72s0shmPOS72kA08D3yctUij1Seffq6KUGb8LHi3agYRR_Rs27nmvFbogdwFEhgr2AF7SW_dXK_mqKOKQgj37RVX7ZP7b_Ey6MudSHt5N_X5VE_S-rTgdTlp3GJWlVQiA47hXaG7fiHXvttkREIGOY5_qJ-sr4HiEeY8gtpno02W5rqSFLBBA178aELv3c2VraM9cvUbiL97C2O6NOB0R9eUSIHA8QC_49czFtOboEGJ7TXYQIGfc1FDCJzlmTfuRQW1qw' },
  { id: 3, title: 'Discover Weekly', description: 'Sua mixtape semanal', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoKWg4nhSEqMKDHzSi5INtdQMTaN4dVHp2V7TklE6cE_cfISkrHkyGcqwXOTAA6o8ehfaVe0c5YUTp7hVYNWnVfjhYcyHGEZVwZPMBUpMsmzFvXc5r4sEhebVzpvcBo7qGFFWQc9EBe6cZMt1zQJfU6NtgpBXecQB3vjEuel-TH7ygoOu3EHdB4KjoxPySy0q0FBG-LwDbsDPIu6Ulvlj47bQLPkOhVcxP9jYaI3f6kX00XfVQPzvfyg-vZ4Im6GPGkd_rD4udG54' },
  { id: 4, title: 'Release Radar', description: 'Novos lançamentos', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDntOGDJj_3dzUwFLPcg6bZiDNusiyns0kFXSidBLa1KdJhCi3kGuLMY8gIjkC4iwLuvQQXHG8pCMMSDsXFFn1Zhv6SH69iDZRwaGjaC7739nJwyDJZrcFf-i7UfmYjEKt5WkX8yCaCH74PGL4S-FCMBUv68n2n8Kn_Zc37ttU6RckazHXX4NQ7YmdHQk-c6a-DSLoQrE8Ag70yPgvw-SFRvmCt_t_k7uZ8pyjkCUXJxm3ES6oOahGJ-dh_Gg-mE8SkEFspaQH15mA' },
];

const newReleases = [
  { id: 1, title: 'Future Nostalgia', artist: 'Dua Lipa', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwBe-HASX7plDQm8KZFEhrhVvbXJ5VGJKpv0BBfcuhLBHAGUBFzaFnuOTdcS8JCHSG57SEUDF-xOGa14873sBugly4KiVB1wrSdgkWXMyCO-noIzqIDf5x1rRdtt8w87DpLDSQhtO_3Y_oY21a1IFLn1qTgp6_2Lbrh9AKzYyTiXL2Z3TKEFNRUHNhc1KJojVn4DTXEDw9loXiaLPpZmdAaPJgb1RHRdgWIO8vvwg2uyzbHM0DB3PJIIyP0vRwSWmXnd0axKuuHWc' },
  { id: 2, title: 'After Hours', artist: 'The Weeknd', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDylmgIkGldgJCh5bLrwFgt7k_OV4gPLs2bDxA13noJRNP40Sr0CvZjUnDzYNJ_9UuZhUEE5ZBEJhBeMGf3vZg1ge72ACOFzZH96Fe963lhww-vOiWkkkARUhfkLWekTlCgOAHFTqc2x3qdTFPaZ3wLRU7nUBLEZwIsEQlckZ8_x7qUcLWtnkPfp_mJHWOl37hyY7kNNvj3HO9QGXTLvToXzij9xsZYs3gwTMaz0bONSjHu8ox2eL-L7tXQWltXY6uLb7Q_q7CTypc' },
  { id: 3, title: 'SOUR', artist: 'Olivia Rodrigo', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlVQyNseUEvBLNqI4x5xQjFZMmyOpleLLe0q8yhRkG9Ac5ylgGlqzmRhrgxHPltEbHRlxIVz1X2jeQssEAyrrO06YAvvncCpDVgq_iKjTF_Sr9Yy95WLAG58anhRYiojCEqjU9NWI2wHDISmIVja8dGvsj5XBkQN6DI5jxEBJObBRHOVxKM4HJbCGOG6yqoXPxJC9YhakBIiCmdF2Ib8C_wFa3Yu8XzmDimyYB_6cO7V7fRkuEl4do1o8yAgksjpYi5vLAEMbEq-Y' },
  { id: 4, title: 'MONTERO', artist: 'Lil Nas X', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiXSjsqX0C0K5MkH6NfHrb_fpgQcS0fuRXFA6vutOITUcwy62vneloQXlfmZAgzVXAVCHvpfEtKPpeXABwtjrHpMbbJZ-4Ptsr5c-cs10rF8I43BupAKnWLJUAjgm1X4B_GubZesKWnLvvp7NN1NujgbceGixn4rn0tZzECvfFcgIGRew_326xHVY33K8PRQ4ySvZUSFgyCyVDs3N9Hpt4tY97v4eGp2HG03EgzALexj7lsLzTf6uPOvofsKtSIzo6ZAHSpmO9Wzk' },
];

const featuredArtists = [
  { id: 1, name: 'Billie Eilish', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7y_LuKOuLYrCQV1-z1P4DGzOgqR0MthmU2OR-znHL8qQ2bpwiSTGvVgZI4-yBaDiWdGE1eB8bg1S5v5CWq-x9SatpfmSHzDizmGAMdF2DAvuzSVDOZmRAtX_8EtxGuVQfi_pFICoUcnJd6k1d1ZSRYoeI5iWh4joLNuWygbf1XzJowapax6y4K_kaYBqDUs2_DawmqX3Mbu5nL8FQiygZrw-ye5xHNTml68kxqXkVsexaUr5iJkCRe0DCLO4FfJW6ahO2ik1cZVM' },
  { id: 2, name: 'Harry Styles', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeIuDBSUtuS4BM5RFQXrBBby5mMsetPez2veQhpK0GTEAQ7gDFEZoEFRcn1CDaKuDEUFjbQ3W82QdinIzi_1RX4nPrIEX6Ft2cbEG4pvk7msrBkgnC-Ic_WuhNk1SBIn1fi7Mqu5XHZkE-XT0pGKN6f_36vp7Uiax1kKDmK-fxl5BBitPcGuBwwIt0SW8rutzzrngZZDIkbK6xt0_xwHV3nqEFjnotpk5vGj9DnMhx2ugfMQxoMGvTcsJ4Hs2SmVEiTp_u05R0Nmo' },
  { id: 3, name: 'Taylor Swift', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hjOIJifM9DMWd7yokac5aol6_3XAwTtRGJP0r6l-NkXlw0-5_x9VgtsKdNebI8osW4S-76myhJEYwFqA_ZEp9rC0oh_-HUpXIYqCqcDrzthAd7RfvpmBjLWPf3hAb97lrenjtvP5FqWySlUPtYdxtSGVm3f2xTVTsLXWqntMZ3vBl4moIR1BNof5sa6SntuA3XPLKCZWFeN8EiUvveK0DvTIQHRDBV7E2nIPLx8G-AGGYZuoBRz9FGNoiweIqZl2-sq7Cnq8ACU' },
  { id: 4, name: 'Bad Bunny', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC44VJHz3pzj3CjDvOOs4ofi2BjsZNbe4uO5aeKMubDRvsL93OcXtPKMu-UcSaxN1-aU0YJRLIklOwMUKvUQEobmH6J_crev84WnZFOMsKRENDcDYUB6f35EOPOy-NOiPEiwbw74o9-RFDKiSNQfspBWGblG6t_9hUpPzf6_UCg36dKGSd32I6gqnXhqEgEOvqHBFyT2VHBw1AsRvvXnQ20YSFn-Rae8zpkIs-DlW_GQgMZWXHr8wnMz4A38-EzPfrTqWpbvZj9n4' },
];

const podcasts = [
    { id: 1, title: 'The Daily', publisher: 'The New York Times', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy3khzUWyjVsY7Bix-7uCGwZgMeOVEJkLixVINQU13OVYteaOJTlPa4MVUlSm7ph0PrvLRiga-mCsuI9-sRNROHwdOJ8ROfCwm67Kr6s7yumWdsvZNenrtyiweUa0vW4XYI8szHLANsfulNzNY4xghkctrzqpTfdmp0lysqHbP16vMkQKd4gQ3MSVoB3HC-s_WrmTGvDKzCCQS1Z4wqMIYZ94Y8EGDx4EgzIOeSNv2vXRSa3__9ZQessFKqpHmK6EjsNToPVYT3z8' },
    { id: 2, title: 'Nerdcast', publisher: 'Jovem Nerd', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLGYmh_x4UP26xjU2qA38LGJH97KJvJ95x7eC4d0KIiUfUtguNye2zYio9aT5om4Lc0dx-Sek3tmSzF0pQdS0piaBxe098iL1d5cjme--ivaJLTUtfvmJj2cQovVSINtrUzZncZSyp4vrYtW5PHoQhjMH4gny2I6hTNNWViDjoqu1-OllzD30aoygTYXw0ZFSIjpyy_UzELlLzKSA-zm6uAy7WOcd2w23RlRitJ3gNRqYOrntbYk2JZGmXcb806m-TdGb285HZhtE' },
    { id: 3, title: 'Flow Podcast', publisher: 'Estúdios Flow', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf2AQECVq6PFCtOCuNpGaIjdX8b6zfuscMQbmzj3icC5Afs_gx1iWkEIdyjypogBl4FEJw9DfvrcyvEVQwdOqu6biYvudEBKZTmfCZ7FFD_RQZjtC-t1mZJohPK0JdO1le2qwxtGpTGcO2vTgS3hp5xGR5Hc5uYJ1-XXdeq6C1FDEzCTvTqNJuIUQdJaxag7APQxkTX_mQnkjc7_vPXPQbQk8AyM9oCpIpljHWMOJqY4BvlYHQGPWXvsIb6_Xvx0h-l5febXRLGIg' },
    { id: 4, title: 'How I Built This', publisher: 'NPR', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8V5rFdY39tJgBSlt7SDhOf4b0SZ_-xT_IbUDWrNI_9v6KFg9KqsoaCmuP6nC5wq8vlVsQcl2zdKOiOzVaIduDx-F1ZCxWDYXxE5e-B7MFHZUdhyn5WQZHO_Xf5jzYrkUT8VSoLXyzh1lEDha08wUL2-DFraul4nezqzioutXTWwNGIwieiGYgGNDflF8bsfE33AJ-EOJye_PuGIo8wRlecRMHwjlX6KK7mXhmX199x0Cr5S6NQdgLSCB8NAYcZ1C7ojywV4qmK-E' },
];

const FilterChip: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${
      active
        ? 'bg-primary/20 dark:bg-primary/20'
        : 'bg-slate-200 dark:bg-slate-800'
    }`}
  >
    <p className={`text-sm font-medium leading-normal ${active ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
      {label}
    </p>
  </div>
);

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Música');

  return (
    <>
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg">
        <div className="flex items-center p-4 pt-6">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight flex-1">Bom dia</h2>
          <div className="flex items-center justify-end gap-1">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-slate-600 dark:text-slate-300">
              <Icon name="notifications" className="text-2xl" />
            </button>
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-slate-600 dark:text-slate-300">
              <Icon name="history" className="text-2xl" />
            </button>
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-slate-600 dark:text-slate-300">
              <Icon name="settings" className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 p-4 pt-2 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <FilterChip label="Música" active={activeFilter === 'Música'} onClick={() => setActiveFilter('Música')} />
          <FilterChip label="Podcasts" active={activeFilter === 'Podcasts'} onClick={() => setActiveFilter('Podcasts')} />
          <FilterChip label="Audiolivros" active={activeFilter === 'Audiolivros'} onClick={() => setActiveFilter('Audiolivros')} />
        </div>
      </div>
      <main className="flex-1">
        <section>
          <div className="flex items-center justify-between px-4 pb-2 pt-4">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Feito para você</h3>
            <a className="text-accent-teal text-sm font-bold" href="#">Ver tudo</a>
          </div>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch px-4 gap-4">
              {madeForYou.map(item => (
                <Link to="/playing" key={item.id} className="flex h-full flex-1 flex-col gap-2 rounded-lg min-w-40 w-40">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded" style={{ backgroundImage: `url("${item.imageUrl}")` }}></div>
                  <div>
                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal truncate">{item.title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between px-4 pb-2 pt-6">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Lançamentos</h3>
            <a className="text-accent-teal text-sm font-bold" href="#">Ver tudo</a>
          </div>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch px-4 gap-4">
              {newReleases.map(item => (
                <Link to="/playing" key={item.id} className="flex h-full flex-1 flex-col gap-2 rounded-lg min-w-40 w-40">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded" style={{ backgroundImage: `url("${item.imageUrl}")` }}></div>
                  <div>
                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal truncate">{item.title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{item.artist}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
         <section>
          <div className="flex items-center justify-between px-4 pb-2 pt-6">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Artistas em Destaque</h3>
            <a className="text-accent-teal text-sm font-bold" href="#">Ver tudo</a>
          </div>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch px-4 gap-4">
              {featuredArtists.map(artist => (
                <div key={artist.id} className="flex h-full flex-1 flex-col items-center gap-2 rounded-lg min-w-32 w-32 text-center">
                  <div className="w-32 bg-center bg-no-repeat aspect-square bg-cover rounded-full" style={{ backgroundImage: `url("${artist.imageUrl}")`}}></div>
                  <div>
                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">{artist.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between px-4 pb-2 pt-6">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Podcasts para Descobrir</h3>
            <a className="text-accent-teal text-sm font-bold" href="#">Ver tudo</a>
          </div>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
             <div className="flex items-stretch px-4 gap-4">
              {podcasts.map(item => (
                <div key={item.id} className="flex h-full flex-1 flex-col gap-2 rounded-lg min-w-40 w-40">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded" style={{ backgroundImage: `url("${item.imageUrl}")` }}></div>
                  <div>
                    <p className="text-slate-800 dark:text-white text-base font-medium leading-normal truncate">{item.title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{item.publisher}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
