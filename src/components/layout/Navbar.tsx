import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, PlusCircle, Users } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-primary">Park Hill Running Club</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/events" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </Link>
            
            <Link to="/create" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <PlusCircle className="w-4 h-4" />
              <span>Create Event</span>
            </Link>
            
            <Link to="/manage" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Users className="w-4 h-4" />
              <span>Manage</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};