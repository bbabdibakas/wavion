import AppButton from "shared/ui/AppButton/AppButton"

const MainPage = () => {

    const onClickHandler = () => {
        console.log('Hello, World!')
    }
    
    return (
        <div>
            <AppButton onClick={onClickHandler}>
                Login
            </AppButton>
        </div>
    )
}

export default MainPage