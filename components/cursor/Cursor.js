import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: smallcircle.x - 8,
        y: smallcircle.y - 8,
        transition: { type: "spring", mass: 2 },
      }}
      id={styles.cursorFollower}
    />
  );
};

export default Cursor;