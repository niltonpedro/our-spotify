import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const date = new Date().toLocaleDateString();


export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction />
        <BottomNavigationAction label="All rights reserved ®" />
        <BottomNavigationAction  label={date} icon={<CalendarTodayIcon />} />
      </BottomNavigation>
    </Box>
  );
}