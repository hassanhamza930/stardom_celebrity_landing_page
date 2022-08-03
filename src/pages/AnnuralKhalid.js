import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Launching from "./launching";
import { motion } from "framer-motion";
import LoadingComponent from "./loadingComponent";
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, setDoc, Timestamp, doc } from 'firebase/firestore';
import axios from 'axios'


function generateRandom() {
    var min = 0;
    var max = 5;
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

const getUA = () => {
    let device = "Unknown";
    const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
    }
    Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
    return device;
}



export default function Home() {


    const db = getFirestore();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dmPrice, setDmPrice] = useState(0);
    const [vidPrice, setVidPrice] = useState(0);
    const [userId, setUserId] = useState("");
    const [time, setTime] = useState("");
    const [startingTime, setStartingTime] = useState(0);

    useEffect(() => {
        var dmPrices = [1500, 2000, 2500, 4000, 3500, 3000];
        var vidPrices = [5000, 6000, 7000, 8000, 10000, 12000, 6500];
        var newUserId=uuidv4();
        setDmPrice(dmPrices[generateRandom()]);
        setVidPrice(vidPrices[generateRandom()]);
        setStartingTime(Timestamp.now());
        setUserId(newUserId);
    }, []);




    async function submitInitialData(selectedOption) {
        var endingTime = Timestamp.now();

        console.log("trying");
        axios.get('https://geolocation-db.com/json/').then((res)=>{
            setDoc(doc(db,"analytics", userId.toString()),{"info":res.data},{merge:true}).then(()=>{
                console.log("ip dumped to firebase");
            });
        });


        setDoc(doc(db,"analytics", userId.toString()), {
            "startingTime": startingTime,
            "endingTime": endingTime,
            "dmPrice": dmPrice,
            "vidPrice": vidPrice,
            "userId": userId,
            "selectedOption": selectedOption,
            "device":getUA()
        },{merge:true}).then(()=>{
            console.log("data dumped to firebase");
        });
        setShow(true);
    }

    return (

        <>
            <AnimatePresence>
                {show == true && <Launching userId={userId} />}
            </AnimatePresence>
            <AnimatePresence>
                {show == false && <div
                    className="bg-[url('https://cdn.dribbble.com/users/156849/screenshots/6993098/32.gif')] bg-cover bg-center flex justify-center items-center w-full h-full bg-fill bg-center">
                    <div style={{ fontFamily: "Source Sans Pro" }} className="bg-blue-800/[70%] h-screen w-full flex justify-start items-start flex-col">

                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full h-full overflow-y-scroll p-5 md:px-[15%] ">

                            <div className="flex flex-col justify-start md:mt-[10%] mt-0 items-start">

                                <div className="h-16 mt-5 md:mt-20  overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ y: 100 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="text-6xl font-bold text-yellow-500">Hello,</motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="h-12 overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ y: 100 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.9 }}
                                            className="text-3xl text-yellow-500 ">You just discovered</motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="h-24 overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ y: 100 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.9, delay: 1.2 }}
                                            className="text-8xl text-yellow-500" style={{ fontFamily: "Koulen" }}>Stardom</motion.div>
                                    </AnimatePresence>
                                </div>


                                <div className="h-24 overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ y: 100 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.9, delay: 2 }}
                                            className="text-md text-yellow-500 mt-10" style={{ fontFamily: "Source Sans Pro" }}>Stardom allows you to directly chat, <br /> and communicate with your favorite celebrities</motion.div>
                                    </AnimatePresence>
                                </div>


                            </div>

                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 2.5 }}
                                className="relative flex flex-col justify-center items-center px-4 md:px-8 py-6 md:py-12 bg-black/40 border-[0px] border-yellow-500  rounded-2xl mt-10 mb-20 md:mb-0 backdrop-blur-xl">
                                <div className="z-10 bg-[url('https://i.scdn.co/image/ab6761610000e5ebdd1ad066461c70fe7e962747')] bg-cover bg-center rounded-md h-72 w-72 "></div>
                                <div style={{ fontFamily: "Source Sans Pro" }} className="z-10 text-white/80 text-xl font-regular w-full mt-4">Annural Khalid</div>
                                <div style={{ fontFamily: "Ubuntu" }} className="z-10 text-white/80 text-sm font-regular w-full ml-[0.5px]">Musician</div>
                                <button onClick={() => { submitInitialData("message")  }} className="z-10 hover:scale-[1.02] rounded-md px-4 py-2 bg-[#3189FF] text-white/90 w-full flex justify-center items-center mt-10 font-bold">Ask a Question <b className="ml-5 text-white">PKR {dmPrice}</b></button>
                                <button onClick={() => { submitInitialData("video") }} className="z-10 hover:scale-[1.02] rounded-md px-4 py-2 bg-[#3189FF] text-white/90 mt-4 w-full flex justify-center items-center mt-2 font-bold ">Request a video <b className="ml-5 text-white">PKR {vidPrice}</b></button>

                            </motion.div>



                        </div>
                    </div>
                </div>}
            </AnimatePresence>

        </>
    )
}   