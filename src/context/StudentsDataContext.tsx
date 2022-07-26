import { createContext, ReactNode, useState } from "react";
import { IStudents } from "../interfaces/IStudent";

interface StudentsDataContextProps {
  children: ReactNode
}

interface StudentsDataContextType {
  studentsData: IStudents,
  setStudentsData: (studentsData: IStudents) => void,
  isCreateModalOpen: boolean,
  setIsCreateModalOpen: (isModalOpen: boolean) => void,
  isUpdateModalOpen: boolean,
  setIsUpdateModalOpen: (isModalOpen: boolean) => void,
  isErrorAlert: boolean,
  setIsErrorAlert: (isErrorAlert: boolean) => void,
}

const initialValue: StudentsDataContextType = {
  studentsData: {
    findStudents: [],
  },
  setStudentsData: () => {},
  isCreateModalOpen: false,
  setIsCreateModalOpen: () => {},
  isUpdateModalOpen: false,
  setIsUpdateModalOpen: () => {},
  isErrorAlert: false,
  setIsErrorAlert: () => {}
}

export const StudentsDataContext = createContext<StudentsDataContextType>(initialValue)

export default function StudentsDataProvider({children}: StudentsDataContextProps) {
  const [ studentsData, setStudentsData ] = useState(initialValue.studentsData)
  const [ isCreateModalOpen, setIsCreateModalOpen ] = useState(initialValue.isCreateModalOpen)
  const [ isUpdateModalOpen, setIsUpdateModalOpen ] = useState(initialValue.isUpdateModalOpen)
  const [ isErrorAlert, setIsErrorAlert ] = useState(false)

  return <StudentsDataContext.Provider
    value={{
      studentsData,
      setStudentsData,
      isCreateModalOpen,
      setIsCreateModalOpen,
      isUpdateModalOpen,
      setIsUpdateModalOpen,
      isErrorAlert,
      setIsErrorAlert
  }}>
    {children}
  </StudentsDataContext.Provider>
}