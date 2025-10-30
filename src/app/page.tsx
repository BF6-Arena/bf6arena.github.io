'use client';

import { useState } from 'react';
import type { Team } from '@/components/sections/registration-form';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Countdown from '@/components/sections/countdown';
import RulesAndSchedule from '@/components/sections/rules-and-schedule';
import RegistrationForm from '@/components/sections/registration-form';
import TeamList from '@/components/sections/team-list';

const initialTeams: Team[] = [
  {
    teamName: 'Apex Predators',
    captainName: 'Ghost',
    captainEmail: 'ghost@example.com',
    captainId: 'GHOST#1234',
    member2Id: 'SOAP#5512',
    member3Id: 'ROACH#891',
    member4Id: 'PRICE#007',
  },
  {
    teamName: 'Tower Sentinels',
    captainName: 'Rook',
    captainEmail: 'rook@example.com',
    captainId: 'ROOK#5678',
    member2Id: 'MUTE#343',
    member3Id: 'SLEDGE#998',
    member4Id: 'THATCHER#112',
  },
  {
    teamName: 'Void Strikers',
    captainName: 'Viper',
    captainEmail: 'viper@example.com',
    captainId: 'VIPER#9012',
    member2Id: 'OMEN#1337',
    member3Id: 'CYPHER#404',
    member4Id: '',
  },
  {
    teamName: 'Cyber Spectres',
    captainName: 'Jett',
    captainEmail: 'jett@example.com',
    captainId: 'JETT#2049',
    member2Id: '',
    member3Id: '',
    member4Id: '',
  },
];

export default function Home() {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const handleTeamRegistered = (newTeam: Team) => {
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  // Set tournament date a few weeks in the future
  const tournamentDate = new Date();
  tournamentDate.setDate(tournamentDate.getDate() + 21);
  tournamentDate.setHours(18, 0, 0, 0);

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Countdown tournamentDate={tournamentDate.toISOString()} />
        <div id="register" className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <RulesAndSchedule />
            </div>
            <div className="lg:col-span-2">
              <RegistrationForm onTeamRegistered={handleTeamRegistered} />
            </div>
          </div>
        </div>
        <TeamList teams={teams} />
      </main>
      <Footer />
    </div>
  );
}
