import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import './style.css';
import { alpha } from '@material-ui/core/styles';


const data = {"id":1,"firstName":"John","lastName":"Doe","position":"Rector","reportId":0,"children":[{"id":2,"firstName":"Rob","lastName":"Doe","position":"Dean of Business","reportId":1,"children":[{"id":4,"firstName":"Anna","lastName":"Doe","position":"Head of Business","reportId":2,"children":[]}]},{"id":3,"firstName":"Bob","lastName":"Doe","position":"Dean of Engineering","reportId":1,"children":[{"id":5,"firstName":"Rob","lastName":"Doe","position":"Head of Engineering","reportId":3,"children":[]}]},{"id":6,"firstName":"Gerard","lastName":"Doe","position":"Head of Logistics","reportId":1,"children":[]}]};

  const data2 = {
    id: 'root',
    title: 'Prof. Dr. ',
    name: 'Necdet BUDAK - Rector',
    children: [
      {
        id: '1',
        title: 'Prof. Dr. ',
        name: 'Hasan YILDIZ - Dean of Engineering Faculty',
        children: [
          {
            id: '6',
            title: 'Prof. Dr. ',
            name: 'Yasemin Topaloğlu - Head of Computer Engineering',
            children: [
              {
                id: '8',
                title: 'Prof. Dr. ',
                name: 'Levent TOKER',
              },
    
            ],
          },
          {
            id: '7',
            title: 'Prof. Dr. ',
            name: 'Yeliz Pekbey - Head of Mechanical Engineering',
          },
        ],
      },
      {
        id: '3',
        title: 'Prof. Dr. ',
        name: 'Özlem ÖNDER- Dean of Business Faculty',
        children: [
          {
            id: '4',
            title: 'Prof. Dr. ',
            name: 'Ayten Ayşen KAYA - Head of Statictics',
            children: [
              {
                id: '34',
                title: 'Doç. Dr. ',
                name: 'Burcu TÜRKCAN',
              },
              {
                id: '334',
                title: 'Araş. Gör. ',
                name: 'Hakan İNKE',
              },
            ],
          },

        ],
      },
    ],
  };
 
  
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
  });
  
  export default function RecursiveTreeView() {
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
  }

  