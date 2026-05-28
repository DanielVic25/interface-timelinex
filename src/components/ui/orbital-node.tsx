export default function OrbitalNode({
  item,
  position,
  onClick,
}) {
  const Icon = item.icon;

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
        <Icon size={16} />
      </div>

      <span className="text-white text-xs">
        {item.title}
      </span>
    </div>
  );
}