import { Route, Routes } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { Sidebar } from "widgets/Sidebar"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"
import { useEffect } from "react"

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])

    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <Sidebar />
                <div className={'content'}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App