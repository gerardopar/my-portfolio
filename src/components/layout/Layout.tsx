import { type PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-[100vh] w-[100vw] bg-primary-black">{children}</div>;
};

export default Layout;
