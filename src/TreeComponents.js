import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import './style.css';
import { alpha } from '@material-ui/core/styles';
import axios from "axios";
import { useState, useEffect} from "react";
import Typography from '@material-ui/core/Typography';


function useFetch() {
  const url = 'http://localhost:8080/list';
  const [data, setData] = useState(null);

   useEffect(() => {
    axios.get(url).then(Response => {
      setData(Response.data.data[0]);
      console.log(Response);
    })
  }, [])

  return data;
}

function RecursiveTreeView() {
  const dat= useFetch();
  const classes = useStyles();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.position + " - " + nodes.firstName + " " + nodes.lastName}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <div>
    <div id="mainContainer">
      <img src="images/ieulogo.png" alt="IEU" style={{ width: "80px", height: "80px", display:"block",marginLeft:"40%"}}></img>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(dat)}
    </TreeView>
    </div>
  
    <div id="mainContainer">
    <img src="images/egelogo.png" alt="EGE" style={{ width: "80px", height: "80px", display:"block", marginLeft:"40%"}} ></img>
    <TreeView
    className={classes.sec}
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpanded={['root']}
    defaultExpandIcon={<ChevronRightIcon />}
  >
    {renderTree(dat)}
    
  </TreeView>
  </div>
  </div>
  );
}

  const useStyles = makeStyles({
    root: {
      height: "auto",
      flexGrow: 1,
      width: "auto",
      padding: 5,
      color:"#4B6587",      
      float: "left",
      backgroundColor: alpha("#b1bfff", 0.4),
      backgroundBlendMode: "darken",
      display:"inline-block",
    },

    sec: {
      height: "auto",
      flexGrow: 1,
      width: "auto",
      padding: 5,
      color:"#4B6587",
      float: "left",
      backgroundColor: alpha("#b1bfff", 0.4),
    },
    labelIcon: {
      width: "15px", 
      height: "15px", 
      display:"inline-block",
      padding:"2px",
    },
    display:{
      display:"flex",
    }
  });


  const RestExample = (props) => {
    const url = 'http://localhost:8080/list';
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(url).then(res => {
        setData(res.data[0]);
      })
    }, [])

    const [data2, setData2] = useState([]);
    useEffect(() => {
      axios.get(url).then(res => {
        setData2(res.data[1]);
      })
    }, [])

    function icon(nodes) {
      return (
        <img src={"images/"+nodes.firstName+nodes.lastName+".png"} alt="" className={classes.labelIcon}/>
      );
    }

    const classes = useStyles();
    const renderTree = (nodes) => (
      <div className={classes.display}>
       <TreeItem 
      key={nodes.id} 
      nodeId={nodes.id} 
      iconContainer={icon(nodes)}
      label={ <div>
      {icon(nodes)}
        {" " +nodes.position +" - " + nodes.firstName +" " + nodes.lastName}
      </div>
      }
      >
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem></div>    
  

    );
    return (
      <div>
      <div id="mainContainer">
        <img src="images/ieulogo.png" alt="IEU" style={{ width: "80px", height: "80px", display:"block",marginLeft:"40%"}}></img>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(data)}
      </TreeView>
      </div>
    
      <div id="mainContainer">
      <img src="images/egelogo.png" alt="EGE" style={{ width: "80px", height: "80px", display:"block", marginLeft:"40%"}} ></img>
      <TreeView
      className={classes.sec}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data2)}
      
    </TreeView>
    </div>
    </div>
    );
  };
  
  
  export default RestExample;