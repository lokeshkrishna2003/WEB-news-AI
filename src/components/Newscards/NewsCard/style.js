import { makeStyles } from "@material-ui/core";

export default makeStyles({
  media: {
    height: 200,
  },
  border: {
    border: 'solid 2px grey',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:'90vh',
    width:'100%',

    borderBottom: '10px solid grey', // Lighter shade for contrast
    backgroundColor: 'rgba(255, 255, 255, 0.55)', // Slightly transparent white for card background
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Adding subtle shadow for depth
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Ensures no content spills out
  },
  activeCard: {
    borderBottom: '10px solid #22289a',

    transform: 'scale(1.05)', // Slightly enlarge active card
    transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items in the card footer
  },
});
