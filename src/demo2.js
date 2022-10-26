import * as React from "react";
import Switch from "@mui/material/Switch";

import { proxy } from "valito";

const state = proxy({ check1: false, check2: false });

export default function ControlledSwitches() {
  const handleChange1 = (event) => {
    state.check1 = event.target.checked;
    if (event.target.checked) {
      state.check2 = false;
    }
  };

  const handleChange2 = (event) => {
    state.check2 = event.target.checked;
    if (event.target.checked) {
      state.check1 = false;
    }
  };

  return (
    <React.Fragment>
      <Switch
        checked={state.check1}
        onChange={handleChange1}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Switch
        checked={state.check2}
        onChange={handleChange2}
        inputProps={{ "aria-label": "controlled" }}
      />
    </React.Fragment>
  );
}
