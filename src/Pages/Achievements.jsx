/* eslint-disable react/prop-types */

import 'animate.css';
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect } from "react";
import AchivementCard from "../Components/Achievements/AchievementCard";
import AchievementData from "../Components/Achievements/AchivementData.json";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Achievements = ({theme}) => {
    const [modalImg, setModalImg] = useState(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setModalImg(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <Navbar theme={theme} />
            <div className="mt-12">
                <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">
                    ACHIVEMENTS:
                </h1>
                <p className="my-2 text-xl text-center text-gray-600 dark:text-gray-300">Here you can find information about my career achievements and some of my important certificates.</p>


                <div className="container mx-auto animate__animated animate__bounceInDown">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {AchievementData.map((item, i) => (
                            <div key={i} className="w-full h-full">
                                <AchivementCard
                                    title={item.title}
                                    img={item.img}
                                    desc={item.desc}
                                    date={item.date}
                                    org={item.org}
                                    onOpen={() => setModalImg(item.img)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {modalImg && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setModalImg(null)}>
                        <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute cursor-pointer top-2 right-2 text-white bg-black/40 rounded-full p-2 z-50"
                                onClick={() => setModalImg(null)}>
                                ✕
                            </button>
                            <img src={modalImg} alt="certificate" className="max-h-screen max-w-full object-contain rounded" />
                        </div>
                    </div>
                )}
            </div>
            <Footer theme={theme} />
        </>
    );
};

export default Achievements;
