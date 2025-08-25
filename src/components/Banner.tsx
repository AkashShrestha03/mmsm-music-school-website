'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/banner.png"
          alt="MOUJ MAALIK Banner"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
