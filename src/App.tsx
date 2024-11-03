import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import IpApi from './api/IpApi';
import IpDetailsApi from './api/IpDetailsApi';

const App: React.FC = () => {
  useEffect(() => {
    const fetchIp = async () => {
      console.log('API TEST');
      const ipApi = new IpApi();
      const ipDetailsApi = new IpDetailsApi();
      console.log('ipApi', await ipApi.getIp());
      console.log('ipDetailsApi', await ipDetailsApi.getIpDetails(await ipApi.getIp()));
    };

    fetchIp();
  }, []);

  return (
    <Container sx={{ mt: '15rem', border: '1px solid gray' }}>
      <Typography textAlign="center" variant="h3" component="h1">
        Ip Info Checker
      </Typography>
    </Container>
  );
};

export default App;
