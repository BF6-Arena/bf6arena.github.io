export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-12 border-t border-border/20">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>
          &copy; {currentYear} Tower Scramble Showdown. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          This is a fictional event for a fictional game. Battlefield 6 is a
          trademark of EA Digital Illusions CE AB. This site is not affiliated
          with or endorsed by EA.
        </p>
      </div>
    </footer>
  );
}
