import { Sidebar } from "widgets/Sidebar"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"
import { useEffect } from "react"
import { AppRouter } from "./providers/AppRouter"

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])

    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App