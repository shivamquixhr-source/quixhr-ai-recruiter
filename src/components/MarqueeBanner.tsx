const messages = [
  "Hire the best Instantly",
  "All Applications One Dashboard",
  "Track & Manage Effortlessly"
];

const MarqueeBanner = () => {
  const messageContent = messages.join(" • ") + " • ";
  
  return (
    <div className="bg-black text-white py-6 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        <span className="text-2xl md:text-3xl font-bold pr-8">
          {messageContent}
        </span>
        <span className="text-2xl md:text-3xl font-bold pr-8">
          {messageContent}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
