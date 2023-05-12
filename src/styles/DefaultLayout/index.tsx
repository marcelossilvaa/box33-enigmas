import { Outlet } from 'react-router-dom';
import { Footer } from '../../componets/Footer';
import { Header } from '../../componets/Header';
import { HeaderRiddles } from '../../componets/HeaderRiddles';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <div className="animate-content">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/riddlespage" element={<HeaderRiddles />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}
