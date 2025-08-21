'use client';

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFDF6]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner1.png"
          alt="MOUJ MAALIK Banner"
          className="h-full object-contain object-center"
          style={{
            minHeight: '100vh',
            width: 'auto'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#353535]/70 via-[#353535]/50 to-[#81E6D9]/40 z-0"></div>
    </section>
  );
};

export default Banner;
