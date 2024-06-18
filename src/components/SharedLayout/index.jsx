import React, { Suspense } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import ModalWindowContainer from "../ModalWindowContainer";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ModalWindowContainer />
     
    </div>
  );
};

export default SharedLayout;
