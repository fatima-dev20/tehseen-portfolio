import { useEffect, useState } from "react";

const Loading = () => {

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">

            {/* Background Gradient Blobs */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#be95be]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#8a5f8a]/10 rounded-full blur-3xl" />

            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #be95b5 1px, transparent 1px), linear-gradient(to bottom, #be95b5 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center px-6">

                {/* ✅ Animated Logo */}
                <div className="relative mb-8">

                    {/* Outer Rotating Ring */}
                    <div className="absolute -inset-4 rounded-full border-2 border-transparent border-t-[#be95be] border-r-[#be95be]/40 animate-spin" />

                    {/* Middle Rotating Ring (Reverse) */}
                    <div
                        className="absolute -inset-2 rounded-full border-2 border-transparent border-b-[#9d72ff] border-l-[#9d72ff]/40"
                        style={{ animation: "spin 1.5s linear infinite reverse" }}
                    />

                    {/* Inner Pulsing Circle */}
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#be95be] to-[#8a5f8a] shadow-[0_0_40px_rgba(190,149,190,0.5)]">
                        <span className="text-4xl font-bold text-white">T</span>

                        {/* Ping Effect */}
                        <span className="absolute inset-0 rounded-full bg-[#be95be] animate-ping opacity-30" />
                    </div>
                </div>


                <div className="mt-3 flex items-center justify-between text-[#be95be] text- font-mono ">
                        <span>Loading</span>
                         <div className="mt-3 pl-2 flex items-center gap-2">
                    <div
                        className="h-2 w-2 rounded-full bg-[#be95be] animate-bounce"
                        style={{ animationDelay: "0s" }}
                    />
                    <div
                        className="h-1.5 w-1.5 rounded-full bg-[#be95be] animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                    />
                    <div
                        className="h-1 w-1 rounded-full bg-[#be95be] animate-bounce"
                        style={{ animationDelay: "0.10s" }}
                    />
                </div>
                    </div>

            </div>

        </div>
    );
};

export default Loading;