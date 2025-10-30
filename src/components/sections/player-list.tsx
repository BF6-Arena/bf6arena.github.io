import type { Player } from './registration-form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, User, Shield } from 'lucide-react';

function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function PlayerList({ players }: { players: Player[] }) {
  const teams = chunk(players, 4);

  return (
    <section className="py-12 md:py-24 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Registered Players
          </h2>
          <p className="text-muted-foreground mt-2">
            {players.length} {players.length === 1 ? 'player has' : 'players have'}{' '}
            signed up. Teams will be randomized for matches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="font-headline text-2xl font-bold mb-4 text-center">
              Current Player Roster
            </h3>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player Name</TableHead>
                      <TableHead className="text-right">Player ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {players.length > 0 ? (
                      players.map((player, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span>{player.playerName}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-mono text-muted-foreground">
                            {player.playerId}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={2} className="h-24 text-center">
                          No players registered yet. Be the first!
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {teams.length > 0 && (
            <div className="md:col-span-2 lg:col-span-3 mt-12">
              <h3 className="font-headline text-2xl font-bold mb-4 text-center">
                Example Team Lineup
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teams.slice(0, 2).map((team, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span>Team {String.fromCharCode(65 + index)}</span>
                      </CardTitle>
                      <CardDescription>
                        An example team based on sign-ups.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {team.map((player) => (
                          <li
                            key={player.playerId}
                            className="flex items-center justify-between"
                          >
                            <span className="font-medium">
                              {player.playerName}
                            </span>
                            <span className="text-sm text-muted-foreground font-mono">
                              {player.playerId}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
