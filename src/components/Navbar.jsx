function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 bg-green text-white shadow-lg shadow-gray">
      <div className="flex items-center">
        <img
          src="https://unsplash.it/50/50"
          alt="Logo"
          className="h-12 w-12 mr-4"
        />
        <h1 className="text-secondary text-2xl font-bold">Capsules</h1>
      </div>
      <div className="flex items-center">
        <a
          href="#"
          className="px-4 py-2 mx-6 bg-shade-dark hover:bg-primary rounded transition-all"
        >
          Home
        </a>
        <a
          href="#"
          className="px-4 py-2 mx-6 bg-shade-dark hover:bg-primary rounded transition-all"
        >
          About
        </a>
        <a
          href="#"
          className="px-4 py-2 mx-6 bg-shade-dark hover:bg-primary rounded transition-all"
        >
          Contact
        </a>
        <img
          src="https://unsplash.it/50/50"
          alt="User"
          className="h-8 w-8 ml-4"
        />
      </div>
    </nav>
  );
}

export default Navbar;
