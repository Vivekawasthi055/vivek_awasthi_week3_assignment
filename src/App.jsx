// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import DashboardPage from "./pages/DashboardPage";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";

const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Fitness Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/log-activity">
            Log Activity
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/log-activity"
          element={<FormPage addActivity={addActivity} />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage activities={activities} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
