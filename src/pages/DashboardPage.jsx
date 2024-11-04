// src/pages/DashboardPage.jsx
import PropTypes from "prop-types";
import Dashboard from "../components/Dashboard";

const DashboardPage = ({ activities }) => <Dashboard activities={activities} />;

DashboardPage.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      steps: PropTypes.string.isRequired,
      calories: PropTypes.string.isRequired,
      workoutTime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DashboardPage;
