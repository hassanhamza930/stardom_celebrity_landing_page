import { motion } from "framer-motion";

export default function Launching() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:0.5 }}
            style={{ fontFamily: "Source Sans Pro" }} className="fixed z-10 flex flex-col justify-start items-start md:p-20 p-5 pt-40 md:pt-40  bg-[#E04556] h-full w-full">
            
            <div style={{ fontFamily: "Koulen" }} className="text-6xl md:text-9xl text-white/90">Stardom</div>
            <div className="flex flex-wrap justify-start items-end gap-3">
                <div className="text-2xl text-white/90">launches in</div>
                <div className="text-white/90 font-bold text-2xl md:text-4xl">1 Week, 2 Days</div>
            </div>


        </motion.div>
    )
}