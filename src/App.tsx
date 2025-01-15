import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import Events from "@/pages/Events";
import CreateEvent from "@/pages/CreateEvent";
import ManageEvents from "@/pages/ManageEvents";
import EventDetails from "@/pages/EventDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/manage" element={<ManageEvents />} />
        </Routes>
        <Toaster position="top-center" />
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;