import Select from "react-select";
const styles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "var(--bg-secundario)",

    border: state.isFocused ? "red" : "aqua",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--color-texto-principal)",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-secundario)",
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected
      ? "var(--color-principal)"
      : "var(--bg-secundario)",
    color: state.isFocused
      ? "var(--bg-principal)"
      : state.isSelected
      ? "var(--bg-principal)"
      : "var(--color-texto-principal)",
    ":hover": {
      ...styles[":hover"],
      backgroundColor: "var(--color-principal)",
    },
  }),
};

const Filtro = ({ options, setState }) => {
  return (
    <Select
      className="select"
      defaultValue={options[0]}
      options={options}
      isSearchable={false}
      styles={styles}
      onChange={(e) => {
        setState(e.value);
      }}
    />
  );
};

export default Filtro;
