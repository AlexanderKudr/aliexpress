import { Box, Header, Image, Button } from "../components";
import { Chevron, Help, Logout } from "../components/icons";
import userIcon from "../assets/images/userIcon.jpg";
import { useState } from "react";

export default function Userbar() {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => setOpen(!open);

  return (
    <Box className="userbar">
      <Box
        onBlur={() => setOpen(false)}
        onClick={handleDropdown}
        className="badge"
        style={{ position: "relative" }}
      >
        <Button className="user">
          <Box>
            <Image src={userIcon} alt={"userIcon"} width={25} height={25} />
            <Header variant={"h2"}>Trenet</Header>
          </Box>
          <Chevron />
        </Button>
        {open ? (
          <div
            style={{
              width: "170px",
              height: "80px",
              backgroundColor: "white",
              position: "absolute",
              top: "100%",
              left: "0",
              marginTop: "15px",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px 0px lightgrey",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                color: "#9A9A9A",
                fontSize: "14px",
                marginLeft: "10px",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span style={{ marginRight: "5px" }}>
                  <Help />
                </span>
                <Header variant={"h3"}>Help Center</Header>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "5px" }}>
                  <Logout />
                </span>
                <Header variant={"h3"}>Logout</Header>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
