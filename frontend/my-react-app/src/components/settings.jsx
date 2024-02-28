import { useState } from 'react';
import { Switch, FormGroup, FormControlLabel, Typography, Container, Paper } from '@mui/material';
import { useTheme } from '../theme/ThemeContext'; 

function SettingsPage() {
  const { mode, toggleTheme } = useTheme(); 
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = () => {
    toggleTheme(); 
  };

  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, my: 4, border: '1px solid #ccc' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={mode === 'dark'} onChange={handleThemeChange} />}
            label="Dark Mode"
          />
          <FormControlLabel
            control={<Switch checked={notifications} onChange={handleNotificationChange} />}
            label="Enable Notifications"
          />
          {/* Future development (more settings) */}
        </FormGroup>
      </Paper>
    </Container>
  );
}

export default SettingsPage;
