import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <main className={`container mx-auto px-4 pt-24 pb-12 animate-fade-in ${className}`}>
      {children}
    </main>
  );
};