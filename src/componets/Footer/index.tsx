import Logo from '../../assets/homepage/logo.png';
export function Footer() {
  return (
    <footer className="footer">
      <div className="flex justify-center flex-col items-center gap-4 py-16">
        <img src={Logo} alt="logo box33" className="w-[200px]" />
        <p>© Copyright - 2023</p>
        <p>By Kido + MSS</p>
      </div>
    </footer>
  );
}
