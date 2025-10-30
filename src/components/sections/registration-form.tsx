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
  playerName: z.string().min(2, 'Player name must be at least 2 characters.'),
  playerEmail: z.string().email('Please enter a valid email.'),
  playerId: z.string().min(3, 'Player ID is required.'),
});

export type Player = z.infer<typeof formSchema>;

export default function RegistrationForm({
  onPlayerRegistered,
}: {
  onPlayerRegistered: (player: Player) => void;
}) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<Player>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerName: '',
      playerEmail: '',
      playerId: '',
    },
  });

  function onSubmit(values: Player) {
    try {
      onPlayerRegistered(values);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Registration Failed',
        description:
          'Could not register you. Please try again later.',
      });
    }
  }

  return (
    <Card className="border-primary/50 border-2 shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">
          Register as a Player
        </CardTitle>
        <CardDescription>
          Secure your spot in the Tower Scramble Showdown.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="playerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Player Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="playerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
                control={form.control}
                name="playerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Player ID</FormLabel>
                    <FormControl>
                      <Input placeholder="PlayerID#1234" {...field} />
                    </FormControl>
                     <FormDescription>This is your in-game identifier.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
            <Button type="submit" className="w-full text-lg py-6 font-bold" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Registering...' : 'Register'}
            </Button>
            {isSubmitted && (
                <div className="flex items-center justify-center gap-2 text-green-400 p-3 rounded-md bg-green-900/20 border border-green-400/30">
                    <CheckCircle className="h-5 w-5" />
                    <p className="font-semibold">You've been registered successfully!</p>
                </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
