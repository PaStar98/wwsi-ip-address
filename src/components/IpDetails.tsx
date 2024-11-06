import { Box, Typography } from '@mui/material';
import IpDetailsApiResponse from '../api/IpDetailsApiResponse';
import InfoRow from './InfoRow';

interface IpDetailsProps {
  ip: string;
  ipDetails: IpDetailsApiResponse | undefined;
}

const IpDetails: React.FC<IpDetailsProps> = ({ ip, ipDetails }) => {
  if (ipDetails?.status === 'fail') {
    return (
      <Typography textAlign="center" variant="body1" color="warning" mt={5}>
        An error occurred while fetching IP details.
      </Typography>
    );
  }

  if (!ipDetails) {
    return null;
  }

  return (
    <Box sx={{ mt: 5, width: 500, mx: 'auto', p: 2 }}>
      <Box display="flex" flexDirection="column" gap={1} mx="auto">
        <InfoRow label="Status" value={ipDetails.status} />
        <InfoRow label="IPv4 Address" value={ip} />
        <InfoRow
          label="IP Location"
          value={`${ipDetails.countryCode} ${ipDetails?.country} ${ipDetails.regionName} ${ipDetails?.city}`}
        />
        <InfoRow label="Timezone" value={ipDetails.timezone} />
        <InfoRow label="ISP" value={ipDetails.isp} />
      </Box>
    </Box>
  );
};

export default IpDetails;
