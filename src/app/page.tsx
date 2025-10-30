'use client';

import { useState } from 'react';
import type { Player } from '@/components/sections/registration-form';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Countdown from '@/components/sections/countdown';
import RulesAndSchedule from '@/components/sections/rules-and-schedule';
import RegistrationForm from '@/components/sections/registration-form';
import PlayerList from '@/components/sections/player-list';

const initialPlayers: Player[] = [
  {
    playerName: 'Ghost',
    playerEmail: 'ghost@example.com',
    playerId: 'GHOST#1234',
  },
  {
    playerName: 'Rook',
    playerEmail: 'rook@example.com',
    playerId: 'ROOK#5678',
  },
  {
    playerName: 'Viper',
    playerEmail: 'viper@example.com',
    playerId: 'VIPER#9012',
  },
  {
    playerName: 'Jett',
    playerEmail: 'jett@example.com',
    playerId: 'JETT#2049',
  },
  {
    playerName: 'Soap',
    playerEmail: 'soap@example.com',
    playerId: 'SOAP#5512',
  },
];

export default function Home() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const handlePlayerRegistered = (newPlayer: Player) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  // Set tournament date to Saturday, November 8th at 7:00 PM PST
  const tournamentDate = "2025-11-08T19:00:00-08:00";

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Countdown tournamentDate={tournamentDate} />
        <div id="register" className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <RulesAndSchedule />
            </div>
            <div className="lg:col-span-2">
              <RegistrationForm onPlayerRegistered={handlePlayerRegistered} />
            </div>
          </div>
        </div>
        <PlayerList players={players} />
      </main>
      <Footer />
    </div>
  );
}
