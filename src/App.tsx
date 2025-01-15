import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import Events from "@/pages/Events";
import CreateEvent from "@/pages/CreateEvent";
import ManageEvents from "@/pages/ManageEvents";
import EventDetails from "@/pages/EventDetails";
import Auth from "@/pages/Auth";
import { useEffect, useState } from "react";
import { supabase } from "./integrations/supabase/client";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Events />
                </>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Events />
                </>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/events/:id"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <EventDetails />
                </>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <CreateEvent />
                </>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/manage"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <ManageEvents />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster position="top-center" />
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;