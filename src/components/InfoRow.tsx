import { Box, Typography, useTheme } from '@mui/material';

interface InfoRowProps {
  label: string;
  value: string | number;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontWeight: 'bold',
          borderRadius: 1,
        }}
      >
        <Typography p={0.5} variant="subtitle1">
          {label}
        </Typography>
      </Box>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};

export default InfoRow;
