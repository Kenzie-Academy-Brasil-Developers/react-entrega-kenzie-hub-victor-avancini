import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { TechContext } from './TechContext';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techList, setTechList] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(data);
          setTechList(data.techs || [])
        } catch (error) {
          localStorage.removeItem("@TOKEN");
        }
      }
    }
    loadUser();
  }, [])

  const userRegister = async (formData) => {
    try {
      const { data } = await api.post('/users', formData);
      navigate('/')
    } catch (error) {
    }
  }

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post('/sessions', formData);
      localStorage.setItem("@TOKEN", data.token);
      setUser(data.user);
      setTechList(data.user.techs || []);
      navigate("/dashboard")
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/")
  }

  return (
    <UserContext.Provider value={{ techList, setTechList, user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
