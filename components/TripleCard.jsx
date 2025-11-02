export default function TripleCard() {
  return (
    <section className="bg-[#FAF8F5] py-16 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-xl h-[428px]">
            <img
              src="/assets/tile1.png"
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
              src="/assets/tile2.png"
              alt="Tech Conf 2025"
              className="object-cover w-full h-full brightness-[0.8] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Tech Conf 2025</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl h-[428px]">
            <img
              src="/assets/tile3.png"
              alt="Tech Conf 2025"
              className="object-cover w-full h-full brightness-[0.8] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Tech Conf 2025</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
