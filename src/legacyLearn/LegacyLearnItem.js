import { CardActionArea, CardContent, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

function LegacyLearnItem(props) {
    return (
        <Card style={{ width: 345 }}>
            <CardActionArea href={props.learnDatum.url}>
                <CardMedia image={props.learnDatum.imageSrc} style={{ height: 208 }} />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.learnDatum.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.learnDatum.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default LegacyLearnItem