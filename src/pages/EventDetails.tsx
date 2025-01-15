import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const EventDetails = () => {
  return (
    <PageContainer className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="h-48 bg-primary/10"></div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">Morning Run</h1>
          
          <div className="mt-4 flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Tomorrow, 7:00 AM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Park Hill Trail</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>12 attending</span>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            Join us for a refreshing morning run through the beautiful Park Hill Trail. 
            All skill levels are welcome! We'll maintain a comfortable pace and stick together as a group.
          </p>

          <div className="mt-8">
            <Button size="lg">Register for Event</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default EventDetails;