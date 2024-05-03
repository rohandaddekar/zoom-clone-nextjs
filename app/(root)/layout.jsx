import StreamVideoProvider from "@/providers/StreamVideoProvider";
import React from "react";

export const metadata = {
  title: "Zoom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
