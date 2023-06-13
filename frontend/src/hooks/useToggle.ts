import { useState } from "react";

const useToggle = (
  initialValue = true
): [boolean, (state: boolean) => void] => {
  const [toggle, setToggle] = useState(initialValue);

  const toggleValue = (state: boolean) => setToggle(state ? state : !toggle);

  return [toggle, toggleValue];
};

export default useToggle;
