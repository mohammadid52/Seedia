import React, { useContext, createContext, useState } from 'react'
import { IUser } from '../interfaces/UserInterface'
const UserContext = createContext(null)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false)

  const [values, setValues] = useState<IUser>({
    user: {
      firstName: '',
      lastName: '',
      profilePicture: '',
      coverPicture: '',
      email: '',
    },
    accountType: '',
    personal: {
      company: {
        jobTitle: '',
        jobType: '',
        latestCompany: '',
      },
      location: {
        country: '',
        pincode: '',
        location: '',
      },
    },
    student: {
      education: {
        education: '',
        grade: '',
        grade_subject: '',
        start_year: '',
        end_year: '',
      },
      location: {
        country: '',
        pincode: '',
        location: '',
      },
    },
    business: {
      name: '',
      email: '',
      number: '',
      country: '',
      address: '',
      additionalInfo: '',
      postalCode: '',
      place: '',
      legalNumber: '',
      companyRegNumber: '',
      firstName: '',
      lastName: '',

      mobileNumber: '',
      typeOfCompany: '',
      bussinessEntityType: '',
      relationshipToCompany: '',
    },
  })

  return (
    // @ts-ignore
    <UserContext.Provider value={{ values, setValues, darkMode, setDarkMode }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)

export default UserContextProvider
