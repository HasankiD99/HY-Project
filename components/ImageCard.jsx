export default function ImageCard() {
  return (
    <section className="bg-[#FAF8F5] py-16 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-xl h-[428px]">
            <img
              src="/assets/tech.png"
              alt="Tech Conf 2025"
              className="object-cover w-full h-full brightness-[0.8] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Tech Conf 2025</h3>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden rounded-xl h-[428px]">
            <img
              src="/assets/tech.png"
              alt="Barcelona Event"
              className="object-cover w-full h-full brightness-[0.8] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-1">14th May</h3>
              <p className="text-xl mb-4 font-medium">Barcelona</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Book Your Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
