import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
// import { Hero3D } from "./Hero3D";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Photo from "../assets/Myphoto.jpeg";

// import { ProfileImage } from "./ProfileImage";

export function About() {
  return (
    <section className="py-20 px-4 " id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto "
      >
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar className="w-72 h-72 mx-auto border-4 border-primary">
                <AvatarImage src={Photo} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
            {/* <Hero3D/> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              {/* <h3 className="text-2xl font-semibold mb-4">Who am I?</h3> */}
              <p className="text-muted-foreground mb-4">
                Hi, <h2>I’m Ashutosh Ranjan</h2>  A Full-Stack Developer specializing in
                the MERN Stack. I love turning complex problems into elegant,
                user-friendly web applications. With strong skills in MongoDB,
                Express.js, React, and Node.js, I build both front-end and
                back-end solutions that work seamlessly together. I’m passionate
                about writing clean, maintainable code and enjoy collaborating
                to create innovative, scalable web applications. Whether
                designing interfaces, optimizing backends, or integrating APIs,
                <br/>
                I bring a holistic approach to every project. When I’m not
                coding, I’m exploring new tech trends, solving coding
                challenges, or working on side projects. Feel free to connect
                for exciting opportunities or discuss your next project!
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
