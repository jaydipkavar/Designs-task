import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const ScrollDemo = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll1 = () => {
      const scrollPosition = window.scrollY;
      const threshold = 300;
      const newIndex = Math.min(Math.floor(scrollPosition / threshold), 6);
      setScrollIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll1);

    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, [isVisible]);

  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
  const boxes = [0, 1, 2, 3, 4];

  return (
    <motion.div
      id="section2"
      ref={sectionRef}
      style={{
        height: "200vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "pink",
      }}
    >
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          width: "100%",
          position: "sticky",
          top: "30%",
        }}
      >
        {" "}
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {boxes.map((index) => (
            <>
              <h1>Test {index}</h1>;
              <p>
                This is some content on the left side. Scroll down to see the
                right-side color changing boxes.
              </p>
            </>
          ))}
        </div>
        <motion.div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            border: "2px solid black",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {boxes.map((index) => (
            <motion.div
              key={index}
              style={{
                width: "100%",
                height: "50px",
                margin: "10px 0",
                backgroundColor: isVisible ? colors[scrollIndex] : "",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: isVisible ? 1 : 0,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              Box {index + 1}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollDemo;
