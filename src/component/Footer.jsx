const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 py-12 px-12 md:py-10 md:px-16">
      <div className="border-2 border-e-indigo-900">
        <h1>Stay Connected</h1>
      </div>
      <div className="border-2 border-amber-400">
        <h1>Mansoury.</h1>
      </div>
      <div className="border-2 border-b-emerald-400">
        <h1>Customer Services</h1>
      </div>
      <div className="border-2 border-red-500">
        <h1>Quick Access</h1>
      </div>
    </div>
  );
};
export default Footer;
