import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Gavel, CalendarDays, Swords, Shield, Users, MessageSquare } from 'lucide-react';

const rules = [
    { icon: <Swords className="h-5 w-5 text-primary" />, title: 'Game Mode', description: '4v4 Tower Control on the "Ascension" custom map. First team to hold the central tower for 5 minutes cumulatively wins.' },
    { icon: <Shield className="h-5 w-5 text-primary" />, title: 'Class & Loadouts', description: 'All classes and standard weapons are permitted. Special promotional or event-specific gear is banned to ensure fair play.' },
    { icon: <Users className="h-5 w-5 text-primary" />, title: 'Team Composition', description: 'Teams must consist of exactly 4 players. Substitutions are not allowed after the tournament begins.' },
    { icon: <Gavel className="h-5 w-5 text-primary" />, title: 'Fair Play', description: 'Cheating, glitching, or unsportsmanlike conduct will result in immediate disqualification. All matches will be monitored.' },
];

const schedule = [
    { time: '6:45 PM PST', event: 'All players join Discord voice channel', icon: <MessageSquare className="h-5 w-5 text-primary" /> },
    { time: '7:00 PM PST', event: 'Tournament Begins - Round 1', icon: <Swords className="h-5 w-5 text-primary" /> },
    { time: '8:00 PM PST', event: 'Round 2', icon: <Swords className="h-5 w-5 text-primary" /> },
    { time: '9:00 PM PST', event: 'Semi-Finals', icon: <Swords className="h-5 w-5 text-primary" /> },
    { time: '10:00 PM PST', event: 'Grand Finals', icon: <Swords className="h-5 w-5 text-primary" /> },
    { time: '11:00 PM PST', event: 'Winner Announcement & Closing Ceremony', icon: <Users className="h-5 w-5 text-primary" /> },
];

export default function RulesAndSchedule() {
  return (
    <Tabs defaultValue="rules" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="rules">
          <Gavel className="mr-2 h-4 w-4" /> Rules
        </TabsTrigger>
        <TabsTrigger value="schedule">
          <CalendarDays className="mr-2 h-4 w-4" /> Schedule
        </TabsTrigger>
      </TabsList>
      <TabsContent value="rules">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Tournament Rules</CardTitle>
            <CardDescription>
              Read carefully to ensure your team is prepared.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{rule.icon}</div>
                    <div>
                        <h4 className="font-bold">{rule.title}</h4>
                        <p className="text-muted-foreground">{rule.description}</p>
                    </div>
                </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="schedule">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Event Schedule - Saturday, Nov 8th</CardTitle>
            <CardDescription>
              All times are in Pacific Standard Time (PST).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2 ml-3"></div>
              {schedule.map((item, index) => (
                <div key={index} className="relative flex items-start pb-8">
                  <div className="absolute left-0 top-1 h-5 w-5 bg-primary rounded-full border-4 border-background -translate-x-1/2 ml-3 flex items-center justify-center">
                    {item.icon && React.cloneElement(item.icon, {className: "h-3 w-3 text-primary-foreground"})}
                  </div>
                  <div className="pl-8">
                    <p className="font-mono text-sm text-primary">{item.time}</p>
                    <h4 className="font-semibold">{item.event}</h4>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
