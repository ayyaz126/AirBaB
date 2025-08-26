import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
//  components
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../theme/CommanStyles";
import Logo from "../components/Logo";
import LocationSearch from "./LocationSearch";
import ProfileSettings from "./ProfileSettings";
import MobileSearch from "./MobileSearch";
function Header() {
  return (
    <div>
      <Box
        sx={{
          ...dFlex,
          minHeight: 70,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              ...flexBetweenCenter,
              minHeight: 90,
              px: 4,
            }}
          >
            <Box sx={displayOnDesktop}>
              <Logo />
            </Box>
            <Box sx={displayOnDesktop}>
              <LocationSearch />
            </Box>
            <Box sx={displayOnDesktop}>
              <ProfileSettings />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MobileSearch />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Header;
