import { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const ActivityForm = ({ onSave }) => {
  const [steps, setSteps] = useState("");
  const [calories, setCalories] = useState("");
  const [workoutTime, setWorkoutTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ steps, calories, workoutTime });
    setSteps("");
    setCalories("");
    setWorkoutTime("");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" sx={{ p: 3, width: "100%" }}>
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              color="primary"
              gutterBottom
            >
              Log Your Fitness Activity
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Steps Taken"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Calories Burned"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Workout Time (minutes)"
                value={workoutTime}
                onChange={(e) => setWorkoutTime(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Log Activity
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

ActivityForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ActivityForm;
