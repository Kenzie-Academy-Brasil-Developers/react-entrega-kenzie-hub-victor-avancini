import { UserProvider } from "./providers/UserContext"
import { RouteMain } from "./routes/RoutesMain"

function App() {

  return (
    <UserProvider>
      <RouteMain />
    </UserProvider>
  )
}

export default App