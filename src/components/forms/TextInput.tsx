import Box from "../Box";
import { Search } from "../icons";
//todo it's not resuable lol, need to fix it
export default function TextInput() {
  return (
    <Box className="TextInput-nav" role={"search"}>
      <label>
        <input type="text" placeholder="search product" />
        <Search />
      </label>
    </Box>
  );
}
//change into this

// const InputField = ({ value, label, name, placeholder, type, onChange }) => (
//   <div className="form-group">
//     {label && <label htmlFor="input-field">{label}</label>}
//     <input
//       type={type}
//       value={value}
//       name={name}
//       className="form-control"
//       placeholder={placeholder}
//       onChange={onChange}
//     />
//   </div>
// );

// export default InputField;