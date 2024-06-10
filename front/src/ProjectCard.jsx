import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./styles/ProjectCard.css";
import "./styles/ToolTip.css";

const ProjectCard = ({ title, backImage, description, link, ver, image }) => {
  const MotionCard = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <Card className="mb-4 bg-dark text-white" >
      <MotionCard className="" >
      <Card.Body className="" >
    <div className="flip-card " id="flipCard">
      <div className="flip-card-inner">
        {image && (
          <div className="flip-card-front">
            <img src={image} className="card-img-top back-image mb-2" alt={title} />
          </div>
        )}
        {backImage && (
          <div className="flip-card-back">
            <img src={backImage} className="card-img-top back-image" alt="Back" />
          </div>
        )}
      </div>
    </div>
    <Card.Title className="mb-4" id="titleCard">
      {title}
    </Card.Title>
    <Card.Text className="mb-4 descriptionCard">{description}</Card.Text>
    <div className="">
      <div className="d-grid">
        <Button
          variant="outline-primary"
          href={link}
          target="_blank"
          data-tooltip-id="verCodigoTooltip"
        >
          Ver Código
        </Button>
        {ver && (
          <>
            <Button
              variant="outline-secondary"
              href={ver}
              target="_blank"
              data-tooltip-id="verProyectoTooltip"
            >
              Ver Proyecto
            </Button>
          </>
        )}
      </div>
    </div>
  </Card.Body>
      </MotionCard>
    </Card>
  );
};

export default ProjectCard;
