import { useContext } from 'react'
import { GlobalContext } from '../context/Provider'

const useContent = () => {
    return useContext(GlobalContext)
}

export default useContent