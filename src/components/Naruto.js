import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import "../style/cardinfo.scss";
import data from "../api/data";
import "../style/drawer.scss";
import info from "../assets/info.svg";
import play from "../assets/play.svg";
import { Link } from "react-router-dom";

import download from "../assets/download.svg";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paperAnchorDockedBottom: {
    backgroundcolor: "black",
  },
  MuiDrawerpaperAnchorBottom: {
    backgroundcolor: "black",
  },
  root: {
    backgroundcolor: "black",
  },
});

function Naruto() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="video__drawer">
      {["bottom"].map((anchor) => (
        <React.Fragment className="draw" key={anchor}>
          <img
            className="img__number "
            onClick={toggleDrawer(anchor, true)}
            src={data[0].img}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="play__drawer ">
              <div className="drawer__content">
                <img className="img__number " src={data[0].img} />
                <div className="drawer__wrapper ">
                  <h3 className="data__name">{data[0].name} </h3>
                  <p>{data[0].des} </p>
                </div>
              </div>
              <div className="mypla">
              {" "}
             <Link to="/narutovideo">
             <button className="myplaybutton btnn">
             <img className="playyy" src={play} />
             Play{" "}
             </button>
             </Link>
              <div className="bt">
              <img className="downl" src={download}/>
              Download
              </div>
           
            </div>
              <div className="line2 " />
              <div className="drawer__bottom" >  
              <img className="mylistt" src={info} />
              <Link to="/naruto">
              <h3>Details & More  </h3>
              </Link>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Naruto;
