import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
    if (event.target.checked) {
      setChecked2(false);
    }
  };

  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
    if (event.target.checked) {
      setChecked1(false);
    }
  };

  return (
    <React.Fragment>
      <Switch
        checked={checked1}
        onChange={handleChange1}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Switch
        checked={checked2}
        onChange={handleChange2}
        inputProps={{ "aria-label": "controlled" }}
      />
    </React.Fragment>
  );
}
