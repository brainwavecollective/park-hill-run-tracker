import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CreateEvent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <PageContainer className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Create Event</h1>
        <p className="mt-2 text-gray-600">Schedule a new running event</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Event Title</label>
          <Input placeholder="Morning Run" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Date</label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Location</label>
          <Input placeholder="Park Hill Trail" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Description</label>
          <Textarea placeholder="Provide details about the run..." />
        </div>

        <Button className="w-full">Create Event</Button>
      </div>
    </PageContainer>
  );
};

export default CreateEvent;