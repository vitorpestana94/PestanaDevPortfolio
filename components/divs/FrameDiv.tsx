import * as motion from "motion/react-client";

export default function FrameDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={`relative aspect-2/1 ${className} flex justify-center items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      <span className="absolute top-0 left-0 w-4 aspect-square border-t-2 border-l-2 border-white"></span>
      {children}
      <span className="absolute bottom-0 right-0 w-4 aspect-square border-b-2 border-r-2 border-white"></span>
    </motion.div>
  );
}
