import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  },
  cardContainer: {
    perspective: '1000px',
    width: '100%',
    height: '45vh',
  },
  card: {
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    borderRadius: 10,
    '&:hover': {
      transform: 'rotateY(180deg)',
    }
  },
  cardFront: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '3%',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    color: 'white',
    borderRadius: 10,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
  cardBack: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '3%',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    color: 'white',
    transform: 'rotateY(180deg)',
    borderRadius: 10,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
justifyContent:'space-around',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'transparent', // Semi-transparent white
  },
});
