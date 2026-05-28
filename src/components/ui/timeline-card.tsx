import { TimelineItem } from "../types/timeline";
import { Card, CardContent } from "./card";

interface TimelineCardProps {
  item: TimelineItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  return (
    <Card className="w-64 bg-black text-white">
      <CardContent>
        <p>{item.content}</p>
      </CardContent>
    </Card>
  );
}