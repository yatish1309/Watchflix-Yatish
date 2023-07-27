import Grid from '@mui/material/Grid';
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";


export default function Grids(props){
    return(
    
    <Grid item
        style={{display:"flex",gap:"2em",justifyContent:"center",margin:"20px",flexWrap:"wrap",cursor:"pointer"}}
        >
            {props.item.map((item,id)=>{
                return(
                    <Card className="card" style={{
                        width:"18.75rem",
                        height:"20.625rem",
                        key:{id},
                        flexShrink: "0",
                        borderRadius:"40px",
                        position:"relative"
                    }}>
                        <img
                        style={{
                            height:"20.625rem",
                            bordeRadius: "12px",
                            opacity: "0.399999988079071",
                            objectFit:"cover"
                           
                        }}
                        src={item.link}
                        />

                        <div style={{position:"absolute",display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                            <p
                            style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: "Overpass",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "normal",
                                letterSpacing: "0.96px"
                            }}
                            
                            >{item.desc}</p>

                        </div>
                    </Card>
                );
            })}

        </Grid>);
}