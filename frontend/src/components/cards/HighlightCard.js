const HighlightCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:shadow-[0_0_20px_rgba(255,0,150,0.4)] transition-shadow">
      <div className="text-pink-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};

export default HighlightCard;
