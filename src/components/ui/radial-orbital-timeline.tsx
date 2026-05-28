import OrbitalCenter from "./orbital-center";
import OrbitalNode from "./orbital-node";

import { timelineData } from "../data/timeline-data";
import { TimelineItem } from "../../types/timeline";

export default function RadialOrbitalTimeline() {
  return (
    <div className="relative w-full h-screen bg-black">
      <OrbitalCenter />

      {timelineData.map((item: TimelineItem) => (
        <OrbitalNode
          key={item.id}
          item={item}
          position={{
            x: item.id * 120,
            y: item.id * 60,
          }}
          onClick={() => console.log(item.title)}
        />
      ))}
    </div>
  );
}