import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
    container :{
padding:'0 5%',
width:'100%',
margin : 0
    },
    card:{
display:'flex',
flexDirection:'column',
justifyContent:'space-between',
width:'100%',
height:'45vh',
padding:'3%',
borderRadius:10,
color:'white'
    },
    infoCard:{
        display:'flex',
        flexDirection:'coloumn',
        textAlign:'center'
    }
})
