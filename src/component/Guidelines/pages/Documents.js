import React, { useState } from 'react';
import BackendRoadmap from '../List/BackendRoadmap';
import FrontendInterview from '../List/FrontendInterview';
import FrontendRoadmap from '../List/FrontendRoadmap';
import FullStackRoadmap from '../List/FullStackRoadmap';
import Questions from '../Data/Questions';
import useWindow from '../../hooks/useWindow';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DocumentInterface from "./DocumentInterface"
import { FaSun, FaMoon } from 'react-icons/fa'

const Documents = () => {
    const { page } = useParams();
    console.log(page);

    const [content, setContent] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const [theme, setTheme] = useState(false);
    const { width } = useWindow();

    // console.log(width);
    useEffect(() => {
        if (width < 768) {
            setMenu(true);
            setMenuOpen(true);
        }
        else {
            setMenu(false);
            setMenuOpen(false);
        }

    }, [width])

    return (
        <div className='h-[86vh]overflow-y-hidden font-[inter] backdrop-blur-[10px]'>
            <div className='flex flex-col md:flex-row'>
                <button
                    className={`${theme ? "text-black" : 'text-white'} text-3xl top-3 fixed right-5 z-10`}
                    onClick={() => setTheme(!theme)}>
                    {
                        theme ? <FaMoon />
                            :
                            <FaSun />

                    }
                </button>
                <div className={`w-full  md:w-1/4 p-3 px-5 ${theme ? "bg-[#F5F7F9] text-black" : "bg-[#242A31] text-white"}]`}>
                    <div className='flex gap-4 cursor-pointer md:cursor-auto items-center'
                        onClick={() => { width < 768 ? setMenu(!menu) : setMenu(menu) }}
                    >
                        <h1 className={`text-2xl font-bold select-none ${theme ? "text-black" : 'text-white'}`}>Documents</h1>
                        <button className={`${theme ? "text-black" : 'text-white'} text-2xl font-bold transition-all ease-linear duration-300 ${!menuOpen ? "hidden" : ""}`}>{menu ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i>}</button>
                    </div>
                    <div className={`h-auto md:h-[75vh] pb-5 mt-5 text-md font-semibold  flex flex-col overflow-x-hidden gap-10 overflow-y-scroll ${menu ? "hidden" : ""} ${theme ? "text-black" : 'text-white'}`}>
                        <FrontendInterview
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                            theme={theme}
                        />
                        <FrontendRoadmap
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                            theme={theme}

                        />
                        <BackendRoadmap
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                            theme={theme}

                        />
                        <FullStackRoadmap
                            setContent={setContent}
                            setMenu={setMenu}
                            menu={menu}
                            theme={theme}

                        />
                    </div>
                </div>
                <div className={`w-full h-[100vh] md:w-3/4 py-5 px-10 ${theme ? "bg-white text-black" : 'bg-black text-white'} backdrop-blur-[10px] overflow-y-scroll`}>
                    {
                        !content ? <DocumentInterface /> :
                            <Questions content={content} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Documents