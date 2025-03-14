import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      Header
      {children}
      Footer
    </div>
  );
}
