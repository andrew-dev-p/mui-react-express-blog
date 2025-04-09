import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Diaries", href: "/diaries" },
  { label: "Auth", href: "/auth" },
];

const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "transparent",
      }}
    >
      <Toolbar>
        <TravelExploreIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, v) => setValue(v)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {links.map((link) => (
            <Tab
              component={Link}
              to={link.href}
              sx={{
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
              key={link.label}
              label={link.label}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
