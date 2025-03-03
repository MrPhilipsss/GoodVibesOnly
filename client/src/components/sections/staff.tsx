import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const staff = [
  {
    name: "Sarah Johnson",
    role: "Senior Beautician",
    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72",
  },
  {
    name: "Emma Davis",
    role: "Massage Therapist",
    image: "https://images.unsplash.com/photo-1606738132449-e3590ddb6793",
  },
  {
    name: "Michael Chen",
    role: "Nail Artist",
    image: "https://images.unsplash.com/photo-1550362512-ed3554c736ea",
  },
];

export default function Staff() {
  return (
    <section id="staff" className="py-20 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A4036]">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {staff.map((member) => (
            <Card key={member.name} className="text-center border-[#D4C4B5]">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#4A4036]">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#7C6E65]">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
