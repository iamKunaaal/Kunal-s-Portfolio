import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Blog() {
  return (
    <Container className="mt-24">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <div className="mt-12 flex justify-center">
        <div className="relative aspect-[3/1] w-full max-w-4xl overflow-hidden rounded-2xl border bg-[#F7E422] shadow-xl transition-all hover:shadow-2xl">
          <Image
            src="/banners/blog-coming-soon.png"
            alt="Blogs Coming Soon"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
