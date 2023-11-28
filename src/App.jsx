import { useState } from 'react'
import Header from './Header'
import SubscriptionForm from './Subscriptionform'
import Greeting from './Greeting'
import './App.css'

function App() {
  const [submittedData, setSubmittedData] = useState(null)

  const handleFormSubmit = (data) =>{
    setSubmittedData(data)
  }

  return (
    <div>
      <Header />
      { submittedData ? (
        <Greeting name={submittedData.name} />
      ) : (
        < SubscriptionForm onFormSubmit={handleFormSubmit}/>
        )
        }
        </div>
        )
}

export default App
