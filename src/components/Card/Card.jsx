import React from "react";
import { motion, useAnimation } from "framer-motion";

// import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import "./Card.css";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Card = ({ title, coverImage, description, url, index }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      key={index}
      className="card"
    >
      <div className="card-img">
        <a href={url} target="_blank">
          <img src={coverImage} alt="resource image" />
        </a>
      </div>

      <div className="card-info">
        <h3 id="resource-title">{title}</h3>
        <p className="description detail-text">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
