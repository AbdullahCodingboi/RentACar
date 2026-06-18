import Link from 'next/link';
import { CarhiveLogo } from './icons/carhive-logo';
import { Button } from './ui/button';

export function LogoLink() {
  return (
    <Button
      variant={'link'}
      className="-ml-1 h-auto rounded-sm p-1 pl-0 text-black hover:text-black"
      asChild
    >
      <Link href="/">
        Zeeshan Rent A Car
      </Link>
    </Button>
  );
}
