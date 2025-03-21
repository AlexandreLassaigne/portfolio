export default function ThemeProvider(props) {
    const [theme, setTheme] = React.useState("light");
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
      </ThemeContext.Provider>
    );
  };