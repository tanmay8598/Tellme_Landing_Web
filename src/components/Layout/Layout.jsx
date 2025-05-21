import React from "react";

import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="  flex-grow">
        <main className="">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
