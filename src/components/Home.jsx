import { Typography, Container, Card, CardContent, Box } from "@mui/material";

const Home = () => (
  <Container maxWidth="md">
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" sx={{ p: 3, width: "100%" }}>
        <CardContent>
          <Typography variant="h3" align="center" color="primary" gutterBottom>
            Welcome to Fitness Challenge Tracker
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center">
            Track your daily fitness activities, monitor your progress, and
            achieve your fitness goals with ease.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Container>
);

export default Home;
