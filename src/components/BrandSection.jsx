import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const BrandSection = () => {
  return (
    <div className="brand">
      <FontAwesomeIcon
        size="2x"
        icon={faUserGroup}
        style={{
          color: "#1291f3",
          padding: "30px 20px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      />
      <div>
        <h3>New Employee</h3>
        <p>Form design with validation</p>
      </div>
     
    </div>
  );
};

export default BrandSection;
