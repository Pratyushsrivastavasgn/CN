import React, { useEffect, useState } from "react";

const Draft14 = (props) => {
    const [handlesOpen, setHandlesOpen] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

    // Debug: Log state changes
    useEffect(() => {
        console.log("handlesOpen:", handlesOpen);
    }, [handlesOpen]);
    useEffect(() => {
        console.log("showConfetti:", showConfetti);
    }, [showConfetti]);

    useEffect(() => {
        const handleTimer = setTimeout(() => setHandlesOpen(true), 500);
        // Show confetti after handles finish moving (match duration)
        const confettiTimer = setTimeout(() => setShowConfetti(true), 1500);
        return () => {
            clearTimeout(handleTimer);
            clearTimeout(confettiTimer);
        };
    }, []);

    // Timer countdown effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format time as HH:MM:SS
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Debug: Log props and render
    useEffect(() => {
        console.log("Draft14 rendered. Props:", props);
    });

    return (
        <div
            className="fixed inset-0 w-screen h-screen flex items-center justify-center m-0 p-0"
            style={{
                backgroundImage: "url('/assets/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                fontFamily: "'Montserrat', sans-serif",
            }}
        >
            {/* Import Montserrat Medium font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
                rel="stylesheet"
            />
            {/* Import Cinzel Bold font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
                rel="stylesheet"
            />
            {/* Import Montserrat Bold font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
                rel="stylesheet"
            />

            <img
                src="/assets/CampusQuesttext.png"
                alt="Campus Quest"
                className="absolute top-8 left-8 z-20 w-[300px] max-w-[80vw]"
            />
            {/* Timer Component */}
            <div className="absolute top-20 right-8 z-20">
                <div
                    className="px-6 py-3 rounded-3xl flex items-center gap-3"
                    style={{
                        background: 'transparent',
                        borderRadius: '24px',
                        border: '2px solid transparent',
                        backgroundImage: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(to right, #D27E00, #FFE0B1) border-box'
                    }}
                >
                    <span
                        className="text-orange-300 font-bold text-lg"
                        style={{ fontFamily: "'FontsFree-Net-Sherlock-Press-Personal-Use', serif" }}
                    >
                        TIME:
                    </span>
                    <span
                        className="text-white font-bold text-xl"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}
                    >
                        {formatTime(timeLeft)}
                    </span>
                </div>
            </div>
            {/* Task 2 Image */}
            <img
                src="/assets/task2.png"
                alt="Task 2"
                className="absolute top-22 left-1/2 -translate-x-1/2 z-20 w-[200px] max-w-[60vw]"
            />
            {/* Riddle Text */}
            <div className="absolute top-45 left-1/2 -translate-x-1/2 z-20 text-center max-w-[800px] px-4">
                <p className="text-white text-lg md:text-xl font-medium leading-tight">
                    Only minds that solve the riddle may proceed,<br />
                    To Round 3, where cunning is your only creed.
                </p>
            </div>
            {/* Blurbg Image */}
            <img
                src="/assets/blurbg.png"
                alt="Background Blur"
                className="absolute top-65 left-1/2 -translate-x-1/2 z-20 w-[700px] max-w-[95vw]"
            />
            {/* Riddle Text Overlay */}
            <div className="absolute top-85 left-1/2 -translate-x-1/2 z-30 text-center max-w-[700px] px-4">
                <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ fontFamily: "'Cinzel', serif", color: '#F9D39A' }}>
                    I'm everywhere but can't be seen,<br />
                    I help you scroll and send a meme.<br />
                    My name is known, my strength's a tale,<br />
                    Sometimes full, but often fail.<br />
                    What am I?
                </p>
            </div>
            {/* Answer Input Field and Submit Button Group */}
            <div className="absolute top-155 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Enter your answer to the riddle..."
                    className="px-6 py-4 text-lg bg-black text-white placeholder-gray-400 rounded-3xl border-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    style={{
                        borderRadius: '24px',
                        border: '2px solid transparent',
                        background: 'linear-gradient(black, black) padding-box, linear-gradient(to right, #B77A40, #FAD49B) border-box',
                        width: '400px'
                    }}
                />
                <button
                    className="px-8 py-4 text-white font-bold text-lg rounded-3xl transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                        background: 'transparent',
                        borderRadius: '24px',
                        backdropFilter: 'blur(4.14px)',
                        boxShadow: '0 4px 15px #FFCE84',
                        border: '2px solid transparent',
                        backgroundImage: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(to right, #D27E00, #FFE0B1) border-box'
                    }}
                >
                    Submit
                </button>
            </div>
            <div className="relative flex items-center justify-center mt-30 w-[1240px] h-[2000px]">


            </div>
        </div>
    );
};

export default Draft14;