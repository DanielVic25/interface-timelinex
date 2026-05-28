import OrbitalCenter from "./orbital-center";
import OrbitalNode from "./orbital-node";

export default function RadialOrbitalTimeline() {
  return (
    <div>
      <OrbitalCenter />

      {timelineData.map((item) => (
        <OrbitalNode
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}