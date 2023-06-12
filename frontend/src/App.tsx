import { StrictMode, Suspense } from "react";
import { RecoilRoot } from "recoil";

import { Stack } from "./stackflow";

const App = () => (
  <StrictMode>
    <Suspense>
      <RecoilRoot>
        <Stack />
      </RecoilRoot>
    </Suspense>
  </StrictMode>
);

export default App;
