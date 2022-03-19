import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <Card>
        <div className="about">
          <h1>About This Project</h1>
        </div>
      </Card>

      <Link to="/"> Back to Home</Link>
    </>
  );
}

export default AboutPage;
