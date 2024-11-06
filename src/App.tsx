import { Box, Button, Container, Paper, Typography } from '@mui/material';
import IpApi from './api/IpApi';
import IpDetailsApi from './api/IpDetailsApi';
import { FormEvent, useState } from 'react';
import IpDetailsApiResponse from './api/IpDetailsApiResponse';
import IpDetails from './components/IpDetails';

const App: React.FC = () => {
  const [ip, setIp] = useState<string>('a');
  const [ipDetails, setIpDetails] = useState<IpDetailsApiResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchIp = async () => {
    setIsLoading(true);
    const ipApi = new IpApi();
    const ipDetailsApi = new IpDetailsApi();

    try {
      const ipValue = await ipApi.getIp();
      const ipDetailsValue = await ipDetailsApi.getIpDetails(ipValue);

      setIp(ipValue);
      setIpDetails(ipDetailsValue);

      console.log(ipValue);
      console.log('ipDetailsApi', ipDetailsValue);
    } catch (error) {
      console.error('Failed to fetch IP details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchIp();
  };

  return (
    <Container component="main" sx={{ mt: 15, width: 700 }}>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Typography
          textAlign="center"
          variant="h3"
          component="h1"
          fontWeight={700}
          letterSpacing={2}
        >
          Ip Info Checker
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Button
            type="submit"
            variant="contained"
            sx={{ display: 'block', width: 500, mx: 'auto', mt: 4, fontWeight: 'bold' }}
          >
            Show IP
          </Button>
        </Box>
        {isLoading && (
          <Typography textAlign="center" mt={1} variant="body1">
            Loading...
          </Typography>
        )}
        <IpDetails ip={ip} ipDetails={ipDetails} />
      </Paper>
    </Container>
  );
};

export default App;
