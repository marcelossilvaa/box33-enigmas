import Logo from '../../assets/homepage/logo.png';
export function Footer() {
  return (
    <footer className="footer">
      <div className="flex justify-center flex-col items-center gap-1 py-4 sm:py-16 sm:gap-4">
        <img src={Logo} alt="logo box33" className="w-[150px] sm:w-[200px]" />
        <p>© Copyright - 2023</p>
        <p>By Kido + MSS</p>
      </div>
    </footer>
  );
}
