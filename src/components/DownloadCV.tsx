import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadCV() {
  
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = 'https://ashutosh-ranjan-portfolio.netlify.app/Resume_Ashutosh.pdf';
  link.download = "Resume_Ashutosh.pdf"; // Specify the name for the downloaded file
  link.click();
};

   
    
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      
      <Button
        size="lg"
        className="rounded-full shadow-lg"
        onClick={handleDownload}
      >
        <FileDown className="mr-2 h-5 w-5" />
        Download CV
      </Button>
    </motion.div>
  );
}