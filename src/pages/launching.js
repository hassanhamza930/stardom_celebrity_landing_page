import { motion } from "framer-motion";
import { useState } from "react";
import { getFirestore, setDoc, Timestamp, doc } from 'firebase/firestore';

export default function Launching(props) {

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

            <div className="text-white mt-20 ml-1">We will make sure you are the first to know!</div>
            <form 
            onSubmit={async ()=>{
                await setDoc(doc(db,"analytics", userId), {
                    "email": email,
                },{merge:true});
            }}
            className=" flex flex-wrap gap-4 mt-5">
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required type={"email"} className="shadow-md px-4 py-3 rounded-md w-full md:w-72" placeholder="Please enter your email"></input>
                <button type={"submit"} className="hover:scale-[1.02] shadow-md px-4 py-3 rounded-md bg-[#171717]/80 text-white/90 font-bold  ">Let me know!</button>
            </form>

        </motion.div>
    )
}