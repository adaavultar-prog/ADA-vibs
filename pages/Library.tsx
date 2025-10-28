
import React, { useState } from 'react';
import Icon from '../components/Icon';

const libraryItems = [
    { id: 1, title: 'Músicas Curtidas', type: 'Playlist', detail: '345 músicas', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe76vdHlFKHclwrIWIh7b9AfyIhkZhz7lrtqJ49PEPVGXyp6LTm8u566a-9JzZ0kKTl_3uLQRMZRON2QGk072l88paaFvjuwOv-kZLHbGAdA2LYnioRCNkWYo_gITOig2LbGhLtV4ypq2LiHIlL3cOKWFpJS45NTYhTbnbDEhQATtvisoymeZJoutXFGVIh9fGLE-FfhooiJv9SUad7DUO8E0RiYXppWVo77WN_XNpsjvnRXPX89bIz7c_OiAx_Giar8Bc7gZg3Ds', shape: 'rounded-lg' },
    { id: 2, title: 'Descobertas da Semana', type: 'Playlist', detail: 'ADA', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsSvcvMWc9G_c2BhxiK7oBDPOOl3RAlyrXyeThAQ0r1gRaquDI5nzJbzy4v9BsGJvyBZV6dzGuU77I6CNaLMY94QfmlTyeBhcaa63tVPOSS637u-jkC6anuq8DtnccV6QZ18hdpsCaKX57WLHolhdG0SfT_hM-AV1kThyqeHucjQlN-U9rxph5ujbTp4REIiVsJ_Jhpw9h2vcqpjwftcHmRC6rXrPkqlIZPQ_gSSj8QYkcQK9DzThNBQXwWcP6q4GBGU55voqUiXU', shape: 'rounded-lg' },
    { id: 3, title: 'Daily Mix 1', type: 'Playlist', detail: 'ADA', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn8duE1d98NuRE6Q-pHN13_4BBDv1aRcZ5tApI1DSpT0IKBfIwoi-gPQ4x16B6E1GnzNwyt-fTdjUdSrPt8Uq4cpNX5ibIQ6UqqhB-KNWVJd2oMRZTEg7F-RprEJdJB7L0nke3cX_hdmWsG-7wvIx-of_jdRXUgytBttStGAXqUdIiIjwvBoYwWenYpRkSFbKgz0HfQgn1BHhe6QpUyOOs6r6un0Zfy_X6LdPJoTSb8lp6HxyWY76zZlkQjtZeM8GlDWe7rZIrN1g', shape: 'rounded-lg' },
    { id: 4, title: 'Lo-fi beats', type: 'Playlist', detail: 'João', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMhTJs62kJvRbaNltP1paqfKjNMXDSoC_SkzjyDsrMC-bcc0Lhy9f6e0KPpK_P1hsXB6859qlTiyxPzDXATsUlbluP7DU1kFBE3ocGU2hDddPyaCMWR8bniIaWUjfyuAJnPMGhhqP5utNYVlwCfhRz_KAdIr5Tc4GmyANoEAWQl2bV47boIWiXYFD6M6RdcoLM39cnhXAodmOqlNAjVfffslRweubNx7XNjSoE8Qgw7XSA-65vFsoAA1QKTiGwjOdKAq2GR7-pqw4', shape: 'rounded-lg' },
    { id: 5, title: 'Abbey Road', type: 'Álbum', detail: 'The Beatles', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL0ZWj6Hi6L4onSxJcg3pbipNy16lIlAkNsvokPzMnPNnY6ocU6ixj02jtoOMwPXRpv-Z53EOP0O9n1HPODGwj6Zny8O3gm6zaHhFARAn5vfGFpHauECbYauuKr7npv3bqTPqKl8ZzzNRAPDFYfutLpyFHgGluZYIzobQD1WalwrbmRB-y2pErHUq5Z-I28jhyIqHBdQ3FC6Qhcdqz0sRSkR0PXMuQgvmPcYB8oaaM69DnQgCPn_n6ZCBat_951jCM3tZalll5zg4', shape: 'rounded-lg' },
    { id: 6, title: 'AM', type: 'Álbum', detail: 'Arctic Monkeys', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYIkUEjOgwcK8DbAnTI_Ee8U-kGvMVyUa5tEG2-hSMp1NH_Uv2ySxeo0oHpBnZV5nDb2i7qrliKHLK1CBXLskl5Sfq0vnAvJh-TIGa1jQABOSOPGt3v1cnqMCGpJKjmDpryYcgisMbKtQ5G_b8tHkBB-6jwKB4ni6Fmq8tPzKsoYw9Ohp8T_pYaaLWMKHTD_HO9nA0rRty44TcJ9ahwqsv_CTwnV8QOsVYmaQDt0EuC-Xb7esinpv_x8pnqE8o7RxV-FZ7Laj3gLc', shape: 'rounded-lg' },
    { id: 7, title: 'Flow Podcast', type: 'Podcast', detail: 'Flow', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDowfxiMGwqFOzfMOSTuCyjt9SH8AMqWqeIkKQG9oby-SILBvRPm9s3zGnaOxe7LqIGz4Eq0iJ6B7F6S00pxgbUe1GV-yNEwgmJnB2io9JoJCy7tILxKMdx4nLnxBh0ipAJIuayPK1S2r1smmAfi9CxPRZsCBvL2ke4sYBlyNRDadyQqjEsYnzPoW0Aok_s3_UiPpy8jZthdn--lsz4F99IcKxKTTp8zfgMmsDM_vE2FhwHEm5m1OFFnswm7zVPZkHVOKoJvFZHe34', shape: 'rounded-lg' },
    { id: 8, title: 'Nina Simone', type: 'Artista', detail: 'Artista', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq2TR21BY1Z1DBT7AgjtmG61TvghQk1nzvLTTXspUSHJKh9JZIi1-H473hdD0shYtBzymvSmfDM7kSmdwXF4H2X2VABmXymb4qnMDLFeVtD-8ScwUYp-yEeAxCYQ829vqpkQxB8PYsnKtcCjf9nodbhqxWBsPRkaEVK6LkoPhZSLQPdfnCi5n1CU1G0si23d1srJAFKhSLQ0ENia7rmnjm1JbRnVbAKmBcetfT9D9cromZqs5RCurF5Wb0S6FxPOtyXzblfTB4Wh8', shape: 'rounded-full' },
];

const FilterChip: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
    <button onClick={onClick} className={`flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${active ? 'bg-primary text-gray-900' : 'bg-gray-200 dark:bg-[#2A2A2A] text-gray-900 dark:text-white'}`}>
        <p className="text-sm font-medium leading-normal">{label}</p>
    </button>
);

const Library: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Playlists');

    const filteredItems = libraryItems.filter(item => {
        if (activeFilter === 'Playlists') return item.type === 'Playlist';
        if (activeFilter === 'Artistas') return item.type === 'Artista';
        if (activeFilter === 'Álbuns') return item.type === 'Álbum';
        if (activeFilter === 'Podcasts') return item.type === 'Podcast';
        return true;
    });

  return (
    <>
      <header className="sticky top-0 z-10 flex flex-col bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4">
          <div className="flex size-10 shrink-0 items-center">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMZbFN0pjpVoqGCgFv_MwnJEInmy6ybXhXt7PeeXG8-RnGXzabhznLptVlu5mjVnlf2uNO0wwkE9U0fkOSmyRxUwSmLznfB4x9rdXg3SbgTUwWIjmLE17Keg8lqWdwO6W7SKtAfJzhNhGuhcn1GKpLcFaqr_sXqoKjkkd5S1zK2wzWzVdcgugz2j5Y66fmxsKJnOKzoXXK50ASf56Fhk1odKxS0I6xwLsEWiHUnmtW3WvDfjxUrwRyFgUYqD63MEEmdEbuUfqbIcs")` }}></div>
          </div>
          <h1 className="text-gray-900 dark:text-white text-xl font-bold flex-1">Sua Biblioteca</h1>
          <div className="flex items-center justify-end gap-2">
            <button className="flex items-center justify-center rounded-full size-10 bg-transparent text-gray-900 dark:text-white">
                <Icon name="search" className="text-2xl" />
            </button>
            <button className="flex items-center justify-center rounded-full size-10 bg-transparent text-gray-900 dark:text-white">
                <Icon name="add" className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto whitespace-nowrap">
            {['Playlists', 'Artistas', 'Álbuns', 'Podcasts'].map(filter => (
                <FilterChip key={filter} label={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)} />
            ))}
        </div>
      </header>
      <main className="flex-grow">
        <div className="flex justify-between gap-2 px-4 py-3">
          <div className="flex gap-2">
            <button className="p-2 text-gray-600 dark:text-[#B3B3B3]">
                <Icon name="grid_view" className="text-2xl" />
            </button>
            <button className="p-2 text-gray-600 dark:text-[#B3B3B3]">
                <Icon name="swap_vert" className="text-2xl" />
            </button>
          </div>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-gray-200 dark:bg-[#2A2A2A] text-gray-900 dark:text-white gap-2 text-sm font-bold leading-normal min-w-0 px-4">
            <span className="truncate">Recentes</span>
            <Icon name="unfold_more" className="text-xl !font-light" />
          </button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 p-4">
            {filteredItems.map(item => (
                <div key={item.id} className="flex flex-col gap-3 pb-3">
                    <div className={`w-full bg-center bg-no-repeat aspect-square bg-cover ${item.shape}`} style={{ backgroundImage: `url("${item.imageUrl}")` }}></div>
                    <div>
                        <p className="text-gray-900 dark:text-white text-base font-medium leading-normal truncate">{item.title}</p>
                        <p className="text-gray-600 dark:text-[#B3B3B3] text-sm font-normal leading-normal">{item.type} • {item.detail}</p>
                    </div>
                </div>
            ))}
        </div>
      </main>
      <div className="fixed bottom-20 right-6 z-20">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 w-14 shadow-lg bg-primary text-background-dark text-base font-bold leading-normal">
            <Icon name="add" className="text-3xl" />
        </button>
      </div>
    </>
  );
};

export default Library;
