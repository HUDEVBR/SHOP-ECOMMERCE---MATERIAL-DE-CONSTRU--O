import { useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
    
    console.log(location)
  return (
      <div>
          Successefull
      </div>
  )
}

export default Success