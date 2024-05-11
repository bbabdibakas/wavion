import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { Link, Route, Routes } from "react-router-dom"
import { Sidebar } from "widgets/Sidebar"

export function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'/profile'} element={<ProfilePage />} />
                        <Route path={'/*'} element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}