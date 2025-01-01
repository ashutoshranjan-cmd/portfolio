import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadCV() {
  
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = './src/assets/Ashutosh_Resume_np.pdf';
      link.download = "downloaded-file.pdf"; // Set the filename for download
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