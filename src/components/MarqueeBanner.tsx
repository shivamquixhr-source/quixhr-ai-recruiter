const messages = [
  "Hire the best Instantly",
  "All Applications One Dashboard",
  "Track & Manage Effortlessly"
];

const MarqueeBanner = () => {
  const messageContent = messages.join(" • ") + " • ";
  
  return (
    <div className="bg-black text-white py-6 overflow-hidden whitespace-nowrap relative">
      {/* Left blur gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Marquee content */}
      <div className="flex animate-marquee">
        <span className="text-2xl md:text-3xl font-bold pr-8">
          {messageContent}
        </span>
        <span className="text-2xl md:text-3xl font-bold pr-8">
          {messageContent}
        </span>
      </div>
      
      {/* Right blur gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default MarqueeBanner;
