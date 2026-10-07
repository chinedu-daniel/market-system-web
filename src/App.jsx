import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

function App() {
  return (
    <div>
      <Header title="MMS Admin Dashboard" />
      <Sidebar 
        title="MMS"
        dashboard="Dashboard"
        products="Inventory"
        customers="Customers"
        orders="Orders"
      />
      <MainContent
        title="Dashboard"
        text="Welcome to the Market Management System." 
      />
    </div>
  )
}
export default App
