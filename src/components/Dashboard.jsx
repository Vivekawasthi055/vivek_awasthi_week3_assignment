import PropTypes from "prop-types";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const Dashboard = ({ activities }) => (
  <Container maxWidth="md">
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Daily Activities
      </Typography>
      {activities.length > 0 ? (
        <List>
          {activities.map((activity, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <ListItem>
                  <ListItemText
                    primary={`Steps: ${activity.steps}, Calories: ${activity.calories}, Workout Time: ${activity.workoutTime} mins`}
                  />
                </ListItem>
              </CardContent>
            </Card>
          ))}
        </List>
      ) : (
        <Typography variant="body1" color="textSecondary" align="center">
          No activities logged yet. Start tracking to see your progress here!
        </Typography>
      )}
    </Box>
  </Container>
);

Dashboard.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      steps: PropTypes.string.isRequired,
      calories: PropTypes.string.isRequired,
      workoutTime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dashboard;
