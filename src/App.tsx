import { BrowserNavigator } from "./navigation";
import { AuthContextProvider } from "./contexts";

export function App() {
  return (
    <AuthContextProvider>
      <BrowserNavigator />
    </AuthContextProvider>
  );
}
