import type { Team } from './registration-form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function TeamList({ teams }: { teams: Team[] }) {
  return (
    <section className="py-12 md:py-24 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Registered Teams
            </h2>
            <p className="text-muted-foreground mt-2">
                {teams.length} {teams.length === 1 ? 'team has' : 'teams have'} signed up. Will you join them?
            </p>
        </div>
        <Card>
            <CardContent className="p-0">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[40%]">Team Name</TableHead>
                    <TableHead>Captain</TableHead>
                    <TableHead className="text-right">Members</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {teams.length > 0 ? (
                        teams.map((team, index) => {
                            const memberCount = [team.captainId, team.member2Id, team.member3Id, team.member4Id].filter(Boolean).length;
                            return (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{team.teamName}</TableCell>
                                    <TableCell>{team.captainName}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2 text-muted-foreground">
                                            <Users className="h-4 w-4" />
                                            <span>{memberCount} / 4</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="h-24 text-center">
                            No teams registered yet. Be the first!
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
