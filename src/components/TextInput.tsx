import Box from "./Box";
import { Search } from "./icons";

export default function TextInput() {
  return (
    <Box className="TextInput-nav" role={"input"}>
      <label>
        <input type="text" placeholder="search product" />
        <Search />
      </label>
    </Box>
  );
}
