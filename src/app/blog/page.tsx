import Container from '@/components/common/Container';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import Image from 'next/image';

export const generateMetadata = (): Metadata => {
  const metadata = getMetadata('/blog');
  return {
    ...metadata,
  };
};

export default function BlogPage() {
  return (
    <Container className="py-20">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="bg-muted relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border shadow-2xl">
          <Image
            src="/banners/blog-coming-soon.png"
            alt="Blogs Coming Soon"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
