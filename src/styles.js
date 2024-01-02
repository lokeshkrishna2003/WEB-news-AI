import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: '#333', // Darker color for contrast
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    backgroundColor: '#f5f5f7', // Light background
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#1565C0', // Adjusted color
    '&:hover': {
      color: '#0D47A1', // Darker shade on hover
    },
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.11)', // Adjusted background color
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Added shadow
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    '&:hover': {
      transform: 'scale(1.06)', // Scale effect on hover
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '20px 0', // Added margin
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: '2% 0', // Reduced margin
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '27vmin',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.15)', // Added shadow
    [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
}));
