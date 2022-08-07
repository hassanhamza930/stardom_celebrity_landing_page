import { motion } from "framer-motion";
import { useState } from "react";
import { getFirestore, setDoc, Timestamp, doc } from 'firebase/firestore';



export default function DoneComponent(props){


    const [email,setEmail]=useState("");
    var userId=props.userId;
    const db=getFirestore();
    


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:0.5 }}
            style={{ fontFamily: "Source Sans Pro" }} className="absolute z-20 flex flex-col justify-start items-start md:p-20 p-5 pt-40 md:pt-40  bg-[#E04556] h-screen w-full overflow-y-scroll pb-96">
            
            <div style={{ fontFamily: "Koulen" }} className="text-8xl md:text-9xl text-white/90">Stardom</div>
            <div className="flex flex-wrap justify-start items-end gap-3">
                <div className="text-2xl text-white/90">launches in</div>
                <div className="text-white/90 font-bold text-2xl md:text-4xl">1 Week, 2 Days</div>
            </div>

            <div style={{fontFamily:"Source Sans Pro"}} className="text-white text-xl mt-20 ml-1">Your Request was registered<br/> We will be in touch 😀</div>
            

        </motion.div>
    )
}