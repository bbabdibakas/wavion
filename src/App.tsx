import { Link, Route, Routes } from "react-router-dom"
import cls from "./App.scss"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"

export function App() {
    return (
        <div className={cls.app}>
            <Link to={'/'}>Home</Link>
            <Link to={'/profile'}>Profile</Link>
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/profile'} element={<ProfilePage />} />
            </Routes>
        </div>
    )
}