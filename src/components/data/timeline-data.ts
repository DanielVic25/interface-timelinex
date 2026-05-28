import {
  Calendar,
  Code,
  FileText,
  User,
  Clock,
} from "lucide-react";

export const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
];