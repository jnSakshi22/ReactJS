import { createContext, useContext, useState } from "react";

const profileContext = createContext(null);
const ProfileProvider = profileContext.Provider;

const ProfileContext = ({ children }) => {
  const [profile, setProfile] = useState({
    name: "Rituja",
    city: "Pune",
    state: "Maharashtra",
  });

  return <ProfileProvider value={{ profile }}>{children}</ProfileProvider>;
};

export const useProfile = () => useContext(profileContext);

export default ProfileContext;