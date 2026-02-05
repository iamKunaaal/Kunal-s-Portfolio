import Headphones from '@/components/svgs/devices/Headphones';
import Laptop from '@/components/svgs/devices/Laptop';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'MacBook Air M2',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Lenovo IdeaPad Gaming 3 15ACH6',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'iPhone 15',
    icon: <Phone className="size-4" />,
  },
  {
    name: 'OnePlus Buds 3',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Dell Wireless Mouse',
    icon: <Mouse className="size-4" />,
  },
];

export const webExtensions = [
  {
    name: 'Awesome Screen Recorder',
    href: 'https://chromewebstore.google.com/detail/awesome-screen-recorder-s/nlipoenfbbikpbjkfpfillcgkoblgpmj',
  },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp',
  },
  {
    name: 'Grammarly: AI Writing',
    href: 'https://chromewebstore.google.com/detail/grammarly-ai-writing-and/kbfnbcaeplbcioakkpcpgfkobkghlhen',
  },
  {
    name: 'Shopify Export Data',
    href: 'https://chromewebstore.google.com/detail/shopify-export-data/inljhgdfdaaepkdbdkkkfbcjcpbbgmjf',
  },
  {
    name: 'Shopify Theme Detector',
    href: 'https://chromewebstore.google.com/detail/shopify-theme-detector/dceokhjpdjnnkgmhonopmkffolagjjjc',
  },
  { name: 'Superdesign', href: 'https://superdesign.ai/' },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  {
    name: 'Wappalyzer',
    href: 'https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkondmcpbal',
  },
];

export const software: { name: string; href: string }[] = [];
