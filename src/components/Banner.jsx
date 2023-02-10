function Banner() {
  return (
    <div className="py-20 bg-gradient-to-r from-secondary">
      <div className="xl:container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Capsules on the go
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">Track NASA's capsules</h3>

        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Banner;
