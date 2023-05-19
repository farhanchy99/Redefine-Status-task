import React from 'react';
import Blogs from '../Blogs/Blogs';
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div className='text-left bg-white dark:bg-[#12131e]'>
            <div className="hero h-96" style={{ backgroundImage: `url(https://redefinestatus.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568736772245-26914aae0b09%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75)` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content w-full justify-start">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className=" mt-40">
                    <h1 className="text-3xl font-bold mb-3">🌟Redefine Status</h1>
                    <p className="mb-5 border-l-4 pl-2 border-[#FFDC00]">How We Can Correct <a href="#blogs" className='text-5xl font-bold text-[#FFDC00]'>Mankind’s Leaderboard</a> </p>
                </div>
            </motion.div>
            </div>
            </div>

            <div id="blogs" className=''>
                <Blogs></Blogs>
            </div>
        </div>
    );
};

export default Home;