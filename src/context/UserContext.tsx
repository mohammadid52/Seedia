import React, { useContext, createContext, useState } from 'react'
import { IUser } from '../interfaces/UserInterface'
const UserContext = createContext(null)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState<IUser>({
    user: {
      firstName: '',
      lastName: '',
      profilePicture: '',
      coverPicture: '',
      email: '',
    },
    account_type: '',
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
      personalMobile: '',
      mobileNumber: '',
      typeOfCompany: '',
      bussinessEntityType: '',
      relationshipToCompany: '',
    },
  })

  return (
    // @ts-ignore
    <UserContext.Provider value={{ values, setValues }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)

export default UserContextProvider
