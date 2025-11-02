"use client";

export default function Double({
  number,
  title,
  description,
  className = "",
}) {
  return (
    <section className={`px-10 py-12 bg-[#F9F5FF] ${className}`}>
      <div className="max-w-4xl">
        {/* Section Number and Title */}
        <h3 className="text-sm font-semibold text-purple-600 uppercase mb-2">
          {number} {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
