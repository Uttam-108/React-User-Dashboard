import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // Load users from localStorage when app starts
  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("users");
      return savedUsers ? JSON.parse(savedUsers) : [];
    } catch (error) {
      console.error("Error loading users from localStorage:", error);
      return [];
    }
  });

  // Save users whenever users state changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Add new user
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // Delete user (good enhancement for interview)
  const deleteUser = (email) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.email !== email)
    );
  };

  // Update user (future enhancement)
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === updatedUser.email ? updatedUser : user
      )
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};