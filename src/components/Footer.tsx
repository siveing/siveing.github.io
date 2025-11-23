export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Huy Siveing. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-secondary-foreground/80">
          Built with passion and modern web technologies
        </p>
      </div>
    </footer>
  );
};
