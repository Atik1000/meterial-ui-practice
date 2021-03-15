import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,

} from "@material-ui/core";
import React from "react";

import MailIcon from "@material-ui/icons/Mail";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item sm={6} style={{ border: "1px solid #fff" }}>
            <InputBase />
          </Grid>
          <Grid item sm={6} style={{ border: "1px solid #000" }}>
            <IconButton>
              <Badge badgeContent={4} color="secondary"></Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
