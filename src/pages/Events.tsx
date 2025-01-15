import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, List } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const Events = () => {
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <PageContainer className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Running Events</h1>
          <p className="mt-2 text-gray-600">Join us for our upcoming runs</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={view === "calendar" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("calendar")}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            Calendar
          </Button>
          <Button
            variant={view === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("list")}
          >
            <List className="w-4 h-4 mr-2" />
            List
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        {view === "calendar" ? (
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        ) : (
          <div className="space-y-4">
            <EventListItem
              title="Morning Run"
              date="Tomorrow, 7:00 AM"
              location="Park Hill Trail"
              attendees={12}
            />
            <EventListItem
              title="Weekend Long Run"
              date="Saturday, 6:30 AM"
              location="Cherry Creek Trail"
              attendees={24}
            />
            <EventListItem
              title="Hill Training"
              date="Next Tuesday, 6:00 PM"
              location="Park Hill Steps"
              attendees={8}
            />
          </div>
        )}
      </div>
    </PageContainer>
  );
};

interface EventListItemProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
}

const EventListItem = ({ title, date, location, attendees }: EventListItemProps) => (
  <div className="flex items-center justify-between p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors">
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{date} at {location}</p>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600">{attendees} attending</span>
      <Button size="sm">Register</Button>
    </div>
  </div>
);

export default Events;