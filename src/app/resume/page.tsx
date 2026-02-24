import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My resume.
          </p>
        </div>
        <Separator />
        <div className="flex justify-center">
          <a
            href="/Kunal_Darji_Resume.pdf"
            download="Kunal_Darji_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-dashed border-black/20 bg-black/5 px-4 py-2 text-sm font-semibold shadow transition-all hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
          >
            Download Resume
          </a>
        </div>
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
          <iframe
            src="/Kunal_Darji_Resume.pdf"
            className="h-[85vh] w-full"
            title="Kunal Darji Resume"
          />
        </div>
      </div>
    </Container>
  );
}
