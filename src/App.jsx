
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Courses from './components/Courses.jsx'
import StudentFeedback from './components/StudentFeedback.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
<div className="bg-dark-bgBody text-white  min-h-screen">
  <Navbar />
  <Header/>
  <Courses />
  <StudentFeedback/>
  <Footer />

</div>
  )
}

export default App
