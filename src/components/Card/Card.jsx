import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Card.css";

const Card = ({ title, coverImage, description, url, index }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={index}
        className="card"
        initial={{
          opacity: 0.1,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        layout
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
    </AnimatePresence>
  );
};

export default Card;
