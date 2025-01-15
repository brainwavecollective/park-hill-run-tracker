import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const ManageEvents = () => {
  return (
    <PageContainer className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Manage Events</h1>
        <p className="mt-2 text-gray-600">Review and manage running events</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="divide-y">
          <EventRow
            title="Morning Run"
            date="Tomorrow, 7:00 AM"
            location="Park Hill Trail"
            status="pending"
          />
          <EventRow
            title="Weekend Long Run"
            date="Saturday, 6:30 AM"
            location="Cherry Creek Trail"
            status="approved"
          />
          <EventRow
            title="Hill Training"
            date="Next Tuesday, 6:00 PM"
            location="Park Hill Steps"
            status="pending"
          />
        </div>
      </div>
    </PageContainer>
  );
};

interface EventRowProps {
  title: string;
  date: string;
  location: string;
  status: "pending" | "approved";
}

const EventRow = ({ title, date, location, status }: EventRowProps) => (
  <div className="p-4 flex items-center justify-between hover:bg-gray-50">
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{date} at {location}</p>
    </div>
    <div className="flex items-center space-x-2">
      {status === "pending" ? (
        <>
          <Button size="sm" variant="outline" className="text-green-600">
            <Check className="w-4 h-4 mr-1" />
            Approve
          </Button>
          <Button size="sm" variant="outline" className="text-red-600">
            <X className="w-4 h-4 mr-1" />
            Reject
          </Button>
        </>
      ) : (
        <span className="text-sm text-green-600 font-medium">Approved</span>
      )}
    </div>
  </div>
);

export default ManageEvents;