import { Outlet } from 'react-router-dom';
import { Footer } from '../../componets/Footer';
import { Header } from '../../componets/Header';
import React, { useEffect, useState } from 'react';

export function DefaultLayout() {
  const [activeColor, setActive] = useState(false);

  useEffect(function () {
    function positionScroll() {
      if (window.scrollY > 10) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener('scroll', positionScroll);
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
