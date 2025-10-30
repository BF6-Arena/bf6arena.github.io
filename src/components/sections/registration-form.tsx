"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const formSchema = z.object({
  teamName: z.string().min(3, 'Team name must be at least 3 characters.'),
  captainName: z.string().min(2, "Captain's name is required."),
  captainEmail: z.string().email('Please enter a valid email.'),
  captainId: z.string().min(3, "Captain's player ID is required."),
  member2Id: z.string().optional(),
  member3Id: z.string().optional(),
  member4Id: z.string().optional(),
});

export type Team = z.infer<typeof formSchema>;

export default function RegistrationForm({
  onTeamRegistered,
}: {
  onTeamRegistered: (team: Team) => void;
}) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<Team>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: '',
      captainName: '',
      captainEmail: '',
      captainId: '',
      member2Id: '',
      member3Id: '',
      member4Id: '',
    },
  });

  function onSubmit(values: Team) {
    try {
      onTeamRegistered(values);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Registration Failed',
        description:
          'Could not register your team. Please try again later.',
      });
    }
  }

  return (
    <Card className="border-primary/50 border-2 shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">
          Register Your Team
        </CardTitle>
        <CardDescription>
          Secure your spot in the Tower Scramble Showdown. One registration per team.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Apex Predators" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="captainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Captain's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="captainEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Captain's Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="captainId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Captain's Player ID</FormLabel>
                    <FormControl>
                      <Input placeholder="PlayerID#1234" {...field} />
                    </FormControl>
                     <FormDescription>This is your in-game identifier.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <div className="space-y-2">
                 <FormLabel>Team Members (Optional)</FormLabel>
                 <FormDescription>Enter the Player IDs of your teammates.</FormDescription>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <FormField control={form.control} name="member2Id" render={({ field }) => (<FormItem><FormControl><Input placeholder="Member 2 ID" {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="member3Id" render={({ field }) => (<FormItem><FormControl><Input placeholder="Member 3 ID" {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="member4Id" render={({ field }) => (<FormItem><FormControl><Input placeholder="Member 4 ID" {...field} /></FormControl></FormItem>)} />
                 </div>
            </div>

            <Button type="submit" className="w-full text-lg py-6 font-bold" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Registering...' : 'Register Team'}
            </Button>
            {isSubmitted && (
                <div className="flex items-center justify-center gap-2 text-green-400 p-3 rounded-md bg-green-900/20 border border-green-400/30">
                    <CheckCircle className="h-5 w-5" />
                    <p className="font-semibold">Team registered successfully!</p>
                </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
