import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold">AgroSense</h3>
              <p className="text-sm text-muted-foreground">Data Akurat, Pertanian Lebih Cerdas</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              Teknologi untuk bumi yang lebih subur
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 AgroSense. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
