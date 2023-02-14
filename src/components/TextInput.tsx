import { Icons } from "./icons";

export default function TextInput() {
  return (
    <div className="TextInput-nav" role={"input"}>
      <label>
        <input type="text" placeholder="search product" />
        <Icons.Search />
      </label>
    </div> 
  );
}
