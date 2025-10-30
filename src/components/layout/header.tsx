import { Castle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="py-4 border-b border-border/20 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Castle className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-xl md:text-2xl font-bold tracking-tighter">
            Tower Scramble Showdown
          </h1>
        </div>
        <Button asChild>
          <a href="#register">Register Now</a>
        </Button>
      </div>
    </header>
  );
}
