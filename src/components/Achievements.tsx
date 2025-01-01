import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "500+ Questions",
    value: "LeetCode",
    description: "Profile Link",
    link:"https://leetcode.com/u/kumarashu493/",
  },
  {
    icon: Users,
    title: "10+ Projects",
    value: "Github",
    description: "Github Link",
    link:"https://github.com/ashutoshranjan-cmd"
  },
  {
    icon: Code,
    title: "WEB DEVELOPMENT",
    value: "Certificate",
    description: "Certification by infosys",
  },
  {
    icon: Award,
    title: "Experience",
    value: "3 month Internship",
    description: "DOTPLUS TECHNOLOGIES",
  },
];

export function Achievements() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center">
                <achievement.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{achievement.value}</h3>
                <div className="text-lg font-semibold mb-2">{achievement.title}</div>
                <a href={achievement.link} className="text-muted-foreground">{achievement.description}</a>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}