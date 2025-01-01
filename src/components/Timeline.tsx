import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2023",
    title: "MCA",
    company: "Chandigarh University",
    description: "2023 August - 2025 July",
  },
  {
    year: "2023",
    title: "Web Developer Intern",
    company: "Dotplus Technologies",
    description: "2023 Jan - 2023 March",
  },
  {
    year: "2020",
    title: "BCA",
    company: "Lalit Narayan Mishra Institute Of Economic Developement and Social Change",
    description: "2020 August - 2023 May",
  },
];

export function Timeline() {
  return (
    <section className="py-20 px-4 bg-muted/50" id='timeline'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${
                index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"
              } mb-8 w-1/2`}
            >
              <Card className="p-6">
                <div className="font-bold text-xl mb-2">{event.year}</div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <div className="text-muted-foreground mb-2">{event.company}</div>
                <p className="text-sm">{event.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}