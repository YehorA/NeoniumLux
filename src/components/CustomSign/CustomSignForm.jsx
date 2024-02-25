import React from "react";
import styles from "./CustomSignForm.module.scss";

function CustomSignForm({ formData, setFormData, setFormStatus }) {
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file), // Create image preview URL
        imageName: file.name, // Update image name
      });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageDelete = () => {
    setFormData({
      ...formData,
      image: null,
      imagePreview: null,
      imageName: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form data is valid
    const isNameValid =
      formData.name.trim() !== "" && !/\d/.test(formData.name);

    const isMessageValid = formData.message.trim() !== "";

    if (isNameValid && isMessageValid) {
      setFormData({
        name: "",
        email: "",
        message: "",
        image: null,
        imagePreview: null,
        imageName: null,
      });

      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  };

  return (
    <div className={styles["customSign"]}>
      <h1>Order Custom Neon Sign</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="image">Upload Picture:</label>

        {!formData.imageName && (
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        )}
        {formData.imageName && (
          <input type="text" value={formData.imageName} readOnly />
        )}

        {/* Display image preview */}
        {formData.imagePreview && (
          <div className={styles["imagePreviewContainer"]}>
            <img
              src={formData["imagePreview"]}
              alt="Preview"
              className={styles["imagePreview"]}
            />
            <button
              type="button"
              onClick={handleImageDelete}
              className={styles["deleteButton"]}>
              Delete
            </button>
          </div>
        )}

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomSignForm;
