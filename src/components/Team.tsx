import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Muhammad Lutfi Alfian",
    role: "Chief Executive Officer (CEO)",
    description: "Arah strategis, kemitraan pertanian, dan ekspansi pasar",
    initials: "MLA",
  },
  {
    name: "Muhammad Raditya Anwar",
    role: "Chief Technology Officer (CTO)",
    description: "Pengembangan teknologi IoT, AI, dan integrasi sistem",
    initials: "MRA",
  },
  {
    name: "Raffuad Munawir",
    role: "Chief Operating Officer (COO)",
    description: "Operasional harian, monitoring proyek lapangan, dan pelatihan petani",
    initials: "RM",
  },
  {
    name: "Naazila Alfa Syahrin",
    role: "Chief Product Officer (CPO)",
    description: "Pengembangan fitur aplikasi, UX, dan roadmap digital",
    initials: "NAS",
  },
  {
    name: "Nur Indah",
    role: "Chief Financial Officer (CFO)",
    description: "Pengelolaan keuangan, model bisnis, dan pendanaan",
    initials: "NI",
  },
  {
    name: "Tri Nurjulyanti",
    role: "Chief Marketing Officer (CMO)",
    description: "Edukasi pasar, branding, dan komunitas petani digital",
    initials: "TN",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tim Kepemimpinan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dipimpin oleh para ahli di bidang teknologi, agrikultur, dan bisnis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-medium transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-6 bg-gradient-hero group-hover:scale-110 transition-transform duration-300">
                    <AvatarFallback className="text-2xl font-bold text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
