import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        navigate("/");
      }
      
      // Handle signup errors
      if (event === "SIGNED_UP") {
        const { error } = await supabase.auth.getSession();
        if (error?.message?.includes("User already registered")) {
          toast.error("This email is already registered. Please sign in instead.");
        }
      }
    });

    // Load the Poppins font
    const loadFont = async () => {
      const font = new FontFace(
        'Poppins',
        'url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2)'
      );

      try {
        await font.load();
        document.fonts.add(font);
        console.log('Poppins font loaded successfully');
      } catch (error) {
        console.error('Error loading Poppins font:', error);
      }
    };

    loadFont();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="font-poppins text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform duration-300">
            Park Hill Running Club
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to join running events and connect with fellow runners
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <SupabaseAuth 
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(var(--primary))',
                    brandAccent: 'hsl(var(--primary))',
                  },
                },
              },
            }}
            theme="light"
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;