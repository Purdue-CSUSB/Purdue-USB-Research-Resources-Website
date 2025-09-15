import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"
import HomePage from "./pages/HomePage.jsx"
import FAQPage from "./pages/FAQPage.jsx"
import OrganizationsProgramsPage from "./pages/OrganizationsProgramsPage.jsx"
import CalendarPage from "./pages/CalendarPage.jsx"
import PresentingYourResearchPage from "./pages/PresentingYourResearchPage.jsx";
import CSSpecificResearchPage from "./pages/CSSpecificResearchPage.jsx"


function AppRoutes() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="Purdue-USB-Research-Resources-Website/" element={<HomePage />}/>
                <Route path="Purdue-USB-Research-Resources-Website/faq" element={<FAQPage />}/>
                <Route path="Purdue-USB-Research-Resources-Website/organizations-and-programs" element={<OrganizationsProgramsPage />}/>
                <Route path="Purdue-USB-Research-Resources-Website/calendar" element={<CalendarPage />}/>
                <Route path="Purdue-USB-Research-Resources-Website/presenting-your-research" element={<PresentingYourResearchPage />} />
                <Route path="Purdue-USB-Research-Resources-Website/cs-specific-research" element={<CSSpecificResearchPage />} />
            </Routes>
        </>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}
