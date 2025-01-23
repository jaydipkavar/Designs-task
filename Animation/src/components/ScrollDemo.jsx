import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const data = [
  {
    src: img1,
    title: "Title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis neque culpa autem, sint aliquam vel corrupti sapiente molestiae nulla excepturi alias aliquid exercitationem laborum distinctio, repellat ipsa veniam. Quidem!",
  },
  {
    src: img2,
    title: "Title 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis neque culpa autem, sint aliquam vel corrupti sapiente molestiae nulla excepturi alias aliquid exercitationem laborum distinctio, repellat ipsa veniam. Quidem!",
  },
  {
    src: img3,
    title: "Title 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis neque culpa autem, sint aliquam vel corrupti sapiente molestiae nulla excepturi alias aliquid exercitationem laborum distinctio, repellat ipsa veniam. Quidem!",
  },
  {
    src: img4,
    title: "Title 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis neque culpa autem, sint aliquam vel corrupti sapiente molestiae nulla excepturi alias aliquid exercitationem laborum distinctio, repellat ipsa veniam. Quidem!",
  },
  {
    src: img5,
    title: "Title 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis neque culpa autem, sint aliquam vel corrupti sapiente molestiae nulla excepturi alias aliquid exercitationem laborum distinctio, repellat ipsa veniam. Quidem!",
  },
  {
    src: img6,
    title: "Title 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis neque culpa autem, sint aliquam vel corrupti sapiente molestiae nulla excepturi alias aliquid exercitationem laborum distinctio, repellat ipsa veniam. Quidem!",
  },
];

const ScrollDemo = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let lastScrollY = scrollIndex;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;

        if (rect.y <= 0 && sectionHeight >= window.scrollY) {
          const threshold = 200;
          const currentScrollY = window.scrollY;

          if (
            currentScrollY > lastScrollY &&
            currentScrollY - lastScrollY >= threshold
          ) {
            setScrollIndex((prevIndex) =>
              Math.min(prevIndex + 1, data.length - 1)
            );
            lastScrollY = currentScrollY;
          } else if (
            currentScrollY < lastScrollY &&
            lastScrollY - currentScrollY >= threshold
          ) {
            setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            lastScrollY = currentScrollY;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data.length]);

  return (
    <motion.div
      id="section2"
      ref={sectionRef}
      style={{
        height: "300vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          position: "sticky",
          top: "25%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {data.map((items, index) => (
            <motion.div
              key={index}
              style={{
                marginBottom: index === scrollIndex ? "20px" : "0px",
                position: "relative",
                width: "300px",
                transition: "transform 0.3s ease",
                top:
                  index === scrollIndex
                    ? "0px"
                    : index < scrollIndex
                    ? "-20px"
                    : "20px",
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: index === scrollIndex ? 1 : 0.5,
                scale: index === scrollIndex ? 1.1 : 1,
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
            >
              <h1 style={{ margin: index === scrollIndex ? "" : 0 }}>
                {items.title}
              </h1>
              <p
                style={{
                  display: index === scrollIndex ? "block" : "none",
                }}
              >
                {items.content}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          style={{
            width: "30%",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "2px solid black",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            position: "relative",
          }}
        >
          <motion.img
            key={scrollIndex}
            src={data[scrollIndex]?.src}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollDemo;
