import React, { useState } from "react";
// import styles from "./CustomSign.module.scss";
import NavigationBar from "../components/NavigationBar";
import CustomSignForm from "../components/CustomSign/CustomSignForm";
import CustomSignGuide from "../components/CustomSign/CustomSignGuide";

function CustomSign() {
  const [formStatus, setFormStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    image: null,
    imagePreview: null,
    imageName: null,
  });

  return (
    <>
      <NavigationBar
        showNavBar={true}
        status={formStatus}
        setStatus={setFormStatus}
        successMessage={
          "Your custom neon sign order has been successfully submitted! "
        }
        errorMessage={
          "Oops! Something went wrong while processing your custom neon sign order."
        }
      />
      <CustomSignForm
        formData={formData}
        setFormData={setFormData}
        setFormStatus={setFormStatus}
      />
      <CustomSignGuide />
    </>
  );
}

export default CustomSign;
