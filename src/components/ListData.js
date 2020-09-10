import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginRight:10
       
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    rootList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
}));

export default function ListData(props) {
    console.log(props, 'sdfsfsdfd');
    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <Grid container spacing={3} style={{flex:1, justifyContent:'center'}}>
                
                    {props.rowData.map((item, i) =>
                        <Grid item xs={4} onClick={() => props.checkedProfile.includes(i) ? null : alert('gfdbgfd')}>
                            <List className={classes.rootList}>
                            <Paper className={classes.paper}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} secondary="July 20, 2014" />
                            </ListItem>
                            </Paper>
                            </List>
                        </Grid>
                    )}
                    <div>
                        {props.children}
                    </div>
                
            </Grid>

        </div>
    );
}
