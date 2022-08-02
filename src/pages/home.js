import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Launching from "./launching";
import { motion } from "framer-motion";

export default function Home() {

    const [show, setShow] = useState(false);

    useEffect(() => { }, []);

    return (

        <>
            <AnimatePresence>
                {/* {true && <Launching />} */}
                {show == true && <Launching />}
            </AnimatePresence>
            <div
                className="bg-[url('https://thumbs.dreamstime.com/b/dot-grid-vector-paper-graph-white-background-130828286.jpg')] flex justify-center items-center w-full h-full bg-fill bg-center">
                <div style={{ fontFamily: "Source Sans Pro" }} className="bg-blue-800/[92%] h-screen w-full flex justify-start items-start flex-col">

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full h-full overflow-y-scroll p-5 md:px-[20%] ">

                        <div className="flex flex-col justify-start mt-[15%] items-start">

                            <div className="h-16 mt-20  overflow-hidden">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{duration:0.5,delay:0.3}}
                                        className="text-6xl font-bold text-yellow-500">Hello,</motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="h-12 mt-2 overflow-hidden">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{duration:0.8,delay:0.9}}
                                        className="text-3xl text-yellow-500 ">You just discovered</motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="h-24 mt-2 overflow-hidden">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ y: 100 }}
                                        animate={{ y: 0 }}
                                        transition={{duration:0.9,delay:1.2}}
                                        className="text-8xl text-yellow-500"  style={{ fontFamily: "Koulen" }}>Stardom</motion.div>
                                </AnimatePresence>
                            </div>


                        </div>

                        <motion.div 
                         initial={{ y: 100,opacity:0 }}
                         animate={{ y: 0,opacity:1 }}
                         transition={{duration:0.6,delay:2}}
                        className="flex flex-col justify-center items-center px-4 py-8 bg-yellow-500 shadow-xl  rounded-md mt-20 mb-20   md:mb-0">
                            <div className="bg-[url('https://i.scdn.co/image/ab6761610000e5ebdd1ad066461c70fe7e962747')] bg-cover bg-center rounded-md h-72 w-72 "></div>
                            <div style={{ fontFamily: "Ubuntu" }} className="text-black/80 text-xl  w-full mt-2">Annural Khalid</div>
                            <div style={{ fontFamily: "Ubuntu" }} className="text-black/80 text-sm font-bold w-full ml-[0.5px]">Musician</div>
                            <button onClick={() => { setShow(true) }} className="hover:scale-[1.02] rounded-md px-4 py-2 bg-black/80 text-yellow-500 w-full flex justify-center items-center mt-10 font-bold">Ask a Question</button>
                            <button onClick={() => { setShow(true) }} className="hover:scale-[1.02] rounded-md px-4 py-2 bg-black/80 text-yellow-500 w-full flex justify-center items-center mt-2 font-bold ">Request a video</button>

                        </motion.div>



                    </div>
                </div>
            </div>
        </>
    )
}   