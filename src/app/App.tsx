import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { Link, Route, Routes } from "react-router-dom"

export function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <Link to={'/'}>Home</Link>
                <Link to={'/profile'}>Profile</Link>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/profile'} element={<ProfilePage />} />
                </Routes>
            </div>
        </div>
    )
}