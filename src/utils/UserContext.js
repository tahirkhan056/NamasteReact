import { createContext } from "react";

const UserContext = createContext({
  name: "Dummy",
  email: "dummy@support.com",
});

UserContext.displayName = "UserContext";

export default UserContext;
