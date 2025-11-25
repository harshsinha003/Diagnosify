import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const GlobalHome = () => {
	const navigate = useNavigate();
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().catch(err => {
				console.log("Video autoplay prevented:", err);
			});
		}
	}, []);

	return (
		<div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
			{/* Video Background with gradient fallback */}
			<div 
				className="absolute top-0 left-0 w-full h-full"
				style={{
					zIndex: 0,
					background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
				}}
			>
				<video
					ref={videoRef}
					autoPlay
					loop
					muted
					playsInline
					preload="auto"
					className="w-full h-full object-cover"
					style={{ objectFit: 'cover' }}
				>
					<source src="/background.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* Dark Overlay for better text readability */}
			<div
				className="absolute top-0 left-0 w-full h-full bg-black pointer-events-none"
				style={{ opacity: 0.5, zIndex: 1 }}
			></div>

			{/* Content */}
			<motion.div
				style={{
					background: 'rgba(255, 255, 255, 0.05)',
					backdropFilter: 'blur(10px)',
					boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
					border: '1px solid rgba(255, 255, 255, 0.1)',
					zIndex: 2,
					position: 'relative'
				}}
				className="rounded-2xl p-10 text-center w-full max-w-lg"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<h1
					style={{
						background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent'
					}}
					className="text-4xl font-bold mb-6"
				>
					Welcome to Our Service!
				</h1>
				<p style={{ color: '#a0a0a0' }} className="text-lg mb-8">
					Get started with disease prediction and health guidance.
				</p>

				{/* Buttons Section */}
				<div className="space-y-6">
					<motion.button
						style={{
							background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
							color: '#000',
							fontWeight: '600'
						}}
						className="flex items-center justify-center w-full py-4 px-8 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => {
							navigate("/user");
						}}
					>
						<FontAwesomeIcon icon={faUser} className="mr-2" />
						Get Started
					</motion.button>
				</div>
			</motion.div>
		</div>
	);
};

export default GlobalHome;