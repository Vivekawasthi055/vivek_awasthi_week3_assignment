// src/pages/FormPage.jsx
import PropTypes from "prop-types";
import ActivityForm from "../components/ActivityForm";

const FormPage = ({ addActivity }) => <ActivityForm onSave={addActivity} />;

FormPage.propTypes = {
  addActivity: PropTypes.func.isRequired,
};

export default FormPage;
