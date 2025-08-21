'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner1.png"
        alt="MOUJ MAALIK Banner"
        fill
        className="object-cover object-center"
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      />
    </section>
  );
};

export default Banner;
