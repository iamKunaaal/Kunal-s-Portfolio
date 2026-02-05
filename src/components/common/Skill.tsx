import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  icon: string;
}

export default function Skill({ name, href, icon }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white"
    >
      <div className="relative size-4 flex-shrink-0">
        <Image src={icon} alt={name} fill className="object-contain" />
      </div>
      <p className="ml-1 text-sm font-bold">{name}</p>
    </Link>
  );
}
