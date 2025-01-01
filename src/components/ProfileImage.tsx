// import { motion } from "framer-motion";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { User } from "lucide-react";

// export function ProfileImage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="relative w-48 h-48 mx-auto mb-8"
//     >
//       <Avatar className="w-48 h-48 border-4 border-primary">
//         <AvatarImage
//           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
//           alt="Profile"
//         />
//         <AvatarFallback>
//           <User className="w-24 h-24" />
//         </AvatarFallback>
//       </Avatar>
//     </motion.div>
//   );
// }