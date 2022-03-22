import { useState } from "react";


/* created custom hook to handle when a user clicks a tag for their module.  See explanation here:https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render */
export default function useForceRender() {
    const [testing, setTesting] = useState(false);
    return () => setTesting((test) => !test);
  }