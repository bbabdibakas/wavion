import { Route, Routes } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { Sidebar } from "widgets/Sidebar"

const App = () => {
    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                
                <Sidebar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App