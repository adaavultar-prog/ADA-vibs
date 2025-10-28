
import React, { useState } from 'react';
import Icon from '../components/Icon';

const categories = [
  { name: 'Pop', style: { backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUxW6YZUanj9snghCbLJknr5d7JQflu0LTrXaUCueGNatXnhylrRmFzclsFmttDNIDZ3l0KtVk7JxoGJKcWZ4jDzoEFN0x5yQmOBK9RWTLZnmiA0gAbTofS_GitYcQSw2BQDiNekcNE701YSLezzTIaRG0YDy6i7SlUfXqRINCHPpz7s7cVI3ROvGh2FDdBG_VojFsCpvmLt3p0eJRgEcgfk_4CKcHIu1jdwhNG6E82ssvta3xl_Xv99PSbldHnRW-jkfRdG63K84")` } },
  { name: 'Rock', style: { backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6asC5mA4SUcwh4S8bWqN7o8sVyDu29WddLx-t1z0j3CWpK9uVEiAkJDt1ZZ9MJ1L-TKTBFdQo3-GwsSb7L6TkheTtwF1HkWVUwZNl1asmIoysbYWrtv0O1a1rzjQQBzdZbh4xILC9YciUM5AhDWZ7eUktATlMYlxf8E-ICE1I6cqmPGuP1jMQMaoD02p0QE5kUheBtxI-5Qz5pDZ7YicGYt1repOFplyOzNx73c5gj3o9bvoFPZhZIdH4ygH_T0y0u5iNmE1Ggs4")` } },
  { name: 'Podcasts', style: { backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSTWjkJt79zFyfy9FLEit1VHIigvEW7MSJdY4U82Gv7KhpamdfZisffGxAMEQdUKW4sZcDx_qoi-8m-w1RZcT6s_8iL5SQ7O7lSvWN0K7GSbiyhk313tCNhOrChtE5C3rh_O6CvoQFl2msyjNZWYXl13yDM-ddJIFp3Yri0b_8KJuoS3qRFWXud-TkOa6xA6MFyTHQKTv7II-g4l4CH_vVoHWlq_bl0K7vJvARNtcLhATiqwWe04IPeUl7wGpVnSy_u9X3UUlL9Y")` } },
  { name: 'Feito no Brasil', style: { backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpwlocYgISeAPPCrL0Vw04XynMe44Mtx2ZtwTJ7UZ9QespMecyWOyOqCLffw73RIpxWKPrkF_5y4RhKLH1x8Qwn9huLxB-sU8WAqNCPkkBUi9pL9THtDlLM7XRALDFF0k1j36PYscw0l7VX69gfFgM3y0rr7BsOH9SQU1mwC352X8TtshIqiyGWvJ45eCfvnUvKOq2kZtgbb_FA-c9tsytfAatdn968xXvd2x9oTh4RcawEgm8L2_C_3qZpuaW_Ueirm0M8yViH9U")` } },
  { name: 'Foco', style: { backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAACjABPdI5XGY_CXSbCdPGhlhlvWhVdgyfkBvOrx1TnCp3dvR8EYiWp8UgX3QGrIuSHXuBKPUaHHzxvl6Y9RDKPIUK-RdcK0S8oe1Aq0tWeJYi8kObUFo6mK_l0pVdv0U4UyKfyF6V21RuiIJll06gFYK09bfO8pA00C9n_A5wV8lmTRvTyKLKJTSlNxYK7Mip-BgLmjU3Lrer4Wf4XNG9Da3tQc0-hzCD-XjKyfDUEOgGof2D4q5kbkH8LpJygnUKLxjSBOCT_wU")` } },
  { name: 'Treino', style: { backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6RGmOrefRONqifo0heRV8mYF-VFyVQR18fyKW-JSjiGmFXpQ81pAnNhjOEYmpQmJnKlSMCSyBPHE_XWfNlCttqodHecnUQf_GuUTwIKeW63GPLG0ISa_7gRuwvIlpSI48t0u7D4HGuJ79e4tUy4ltO5l2xbmnQrWRFE98ve7vd0rcQHdq5ts1zGRTLj1plsbO4Xs3e8zGeXAlr3xHHZSbkNtamfhJ9w5bv-7CQokObY3bpae-34nLSl5vYDg0Yqr8KBGeh9T4RI4")` } },
]

const recentSearches = [
    {id: 1, name: "Legião Urbana", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAibWadB8ZCaE20ETEdX2mz73bFGMXfRVdDkM7yZ5B2enfdXaEGJjUOItobZ1ns-nVALL9I8wAzzVl7ic-8prqtFdyMeRI-p8MruI7s5qu2XzANXVwGDyJZpA3VIN29m6Q6yoO4FLKS55s4JAxqra-awaV_TxpP6klpGPdmS3wfjLI8wjYv_0RwqtROAQ3fFvghuhJgjfjXEh7Cy1kk_ZPBra2AMN3PhpLOCspVoD6GCRhye1oIPGpg6xNjxuzp6iZqOn_-8KRwdIg", type: 'artist' },
    {id: 2, name: "Indie Brasil", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANj7n7t3hGxuUQ0VCyvHmMjoNqd85gIHMHkwtzAzbYOO4D8Fm7wSKsKYf-3dChpjsJUjm79bRzZ04lgh4PoAi7Q_h5JGBLbWCzvWgM3VNmg--0I7JK3AoIyqBKfZgRpWcoBXHutbFbHFSUwoF0Mow8JVAOUk1lUvdrZVW50qUYQLkrtkWUfQ0KbA8hN6ywItsYEmoIWBGRaYJxetEsX1FBgCaXBCAbljsnSA9QoivtR4vLR5XrsbQOL2Y4p3kaTMS5SSDaUh-q3iE", type: 'playlist' },
    {id: 3, name: "Nerdcast", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0T3R3b5opl1FKiYaTy9CAewZ5nutWuXZX2VcVMQIr_iKD4gnHS3Tfm_ncZVQ1Mk9HcUA_urzggZ1ApKn7yocu8SyeK2ei9XQT7AVSO-xBdPW-7xD9Ws2OjNO9xyMh1l4nBYL-t0_7dyS1q97rtzF_H6_BTFFbAjKGkMB2rcvtz7ix3tVgYUfwoZ6Dqq1TTofBa3hfLLQydWTPPKQFmzSen0ryo8drHgTO6HmW_dQjFUKUpJS_Jc-b330BkDSy0QEYzMqVJVRtZ6o", type: 'podcast' },
]

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searches, setSearches] = useState(recentSearches);

    const removeSearch = (id: number) => {
        setSearches(searches.filter(s => s.id !== id));
    }

  return (
    <main className="flex-1 text-white">
      <div className="px-4 py-3 sticky top-0 bg-background-light dark:bg-background-dark z-10 pt-6">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded h-full">
            <div className="text-gray-400 dark:text-gray-500 flex bg-white/10 dark:bg-black/20 items-center justify-center pl-4 rounded-l">
              <Icon name="search" />
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white/10 dark:bg-black/20 focus:border-none h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Artistas, músicas ou podcasts"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </label>
      </div>
      <h2 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Navegar por todas as seções</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 px-4">
        {categories.map(category => (
            <div key={category.name} className="bg-cover bg-center flex flex-col rounded justify-end p-4 aspect-video" style={category.style}>
                <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">{category.name}</p>
            </div>
        ))}
      </div>
      {searches.length > 0 && (
        <>
            <h2 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-3 pt-8">Pesquisas recentes</h2>
            <div className="flex flex-col gap-1">
                {searches.map(search => (
                    <div key={search.id} className="flex items-center gap-4 px-4 min-h-14 justify-between group">
                        <div className="flex items-center gap-4 min-w-0">
                            <div className={`bg-center bg-no-repeat aspect-square bg-cover size-12 ${search.type === 'artist' ? 'rounded-full' : 'rounded'}`} style={{backgroundImage: `url("${search.imageUrl}")`}}></div>
                            <p className="text-gray-800 dark:text-white text-base font-normal leading-normal flex-1 truncate">{search.name}</p>
                        </div>
                        <div className="shrink-0">
                            <button onClick={() => removeSearch(search.id)} className="text-gray-500 dark:text-gray-400 flex size-8 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="close" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
      )}
    </main>
  );
};

export default Search;
