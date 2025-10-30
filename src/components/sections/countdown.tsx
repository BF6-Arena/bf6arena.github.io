"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const CountdownUnit = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl md:text-6xl font-bold font-mono text-primary tracking-tighter w-24 text-center">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-sm md:text-base font-headline text-muted-foreground uppercase tracking-widest">
      {label}
    </div>
  </div>
);


export default function Countdown({ tournamentDate }: { tournamentDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set initial value
    setTimeLeft(calculateTimeLeft(tournamentDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(tournamentDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [tournamentDate]);

  if (!isClient || timeLeft === null) {
    return (
      <div className="bg-muted/20 py-8 md:py-12">
        <div className="container mx-auto text-center">
            <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-primary">Tournament Has Started!</h3>
            <p className="text-muted-foreground mt-2">See you on the battlefield.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/20 py-8 md:py-12 border-y border-border/20">
      <div className="container mx-auto flex justify-center items-center gap-4 md:gap-8">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <div className="text-4xl md:text-6xl font-bold text-primary/50">:</div>
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <div className="text-4xl md:text-6xl font-bold text-primary/50">:</div>
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <div className="text-4xl md:text-6xl font-bold text-primary/50">:</div>
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
