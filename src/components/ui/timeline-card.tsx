import { Card, CardContent } from "./card";

export default function TimelineCard({ item }) {
  return (
    <Card className="w-64 bg-black text-white">
      <CardContent>
        <p>{item.content}</p>
      </CardContent>
    </Card>
  );
}