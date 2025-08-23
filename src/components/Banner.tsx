'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/banner.jpg"
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
