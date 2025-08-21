'use client';

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/banner1.png"
        alt="MOUJ MAALIK Banner"
        className="w-full h-full object-cover object-center absolute inset-0"
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      />
    </section>
  );
};

export default Banner;
