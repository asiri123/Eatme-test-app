import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Navbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Bundles" value="1" style={{color: '#00ccbc'}} />
            <Tab label="Salads" value="2" style={{color: '#00ccbc'}}/>
            <Tab label="Hot Power Bowls" value="3" style={{color: '#00ccbc'}}/>
            <Tab label="Vegan Menu" value="4" style={{color: '#00ccbc'}} />
            <Tab label="Rainbow Wraps" value="5"style={{color: '#00ccbc'}} />
            <Tab label="Snacks & sides" value="6" style={{color: '#00ccbc'}}/>
            <Tab label="Smoothies" value="7" style={{color: '#00ccbc'}} />
            <Tab label="Cold Drinks" value="8" style={{color: '#00ccbc'}}/>
            <Tab label="Yougurt" value="9" style={{color: '#00ccbc'}}/>
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}