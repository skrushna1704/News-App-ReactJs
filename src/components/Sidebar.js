import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import categories from "../data/Categories";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Anchor = "left";

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 230 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            key={text}
            disablePadding
            onClick={() => setCategory(text)}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={"left"}>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </ThemeProvider>
    </React.Fragment>
  );
}
