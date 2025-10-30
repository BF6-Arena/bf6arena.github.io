import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function Hero() {
  return (
    <section className="py-12 md:py-24 bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          The Ultimate 4v4 Tower Battle Is Here
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
          Assemble your squad for the most intense custom map tournament in
          Battlefield 6. Strategy, skill, and teamwork will decide who conquers
          the tower and claims victory.
        </p>
        <div className="mt-8 flex justify-center">
          <Carousel
            className="w-full max-w-4xl"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {PlaceHolderImages.map((img) => (
                <CarouselItem key={img.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        width={1200}
                        height={800}
                        className="aspect-[3/2] w-full object-cover"
                        data-ai-hint={img.imageHint}
                        priority={img.id === 'hero-1'}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
