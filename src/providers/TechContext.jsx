import { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserContext";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techList, setTechList } = useUserContext();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [editingTech, setEditingTech] = useState(null)

  const openModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const closeModalCreate = () => {
    setIsModalCreateOpen(false);
  };

  const openModalEdit = (tech) => {
    setIsModalEditOpen(true);
  }

  const closeModalEdit = () => {
    setIsModalEditOpen(false);
  }

  const addTechnology = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const newTech = { ...formData }
      const { data } = await api.post("/users/techs", newTech, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTechList((prevTechList) => [...prevTechList, data]);
      closeModalCreate();
    } catch (error) {
      console.log(error)
    }
  }

  const editTechnology = async (status) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const updateData = { status }
      const { data } = await api.put(`/users/techs/${editingTech.id}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTechList((prevTechList) => prevTechList.map((tech) => tech.id === editingTech.id ? { ...tech, status: data.status } : tech));
      closeModalEdit();
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTechnology = async (technologyId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${technologyId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      setTechList((prevTechList) => prevTechList.filter((tech) => tech.id !== technologyId));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TechContext.Provider value={{ isModalCreateOpen, openModalCreate, closeModalCreate, isModalEditOpen, openModalEdit, closeModalEdit, addTechnology, editTechnology, deleteTechnology, techList, setTechList, editingTech, setEditingTech }}>
      {children}
    </TechContext.Provider>
  )
}