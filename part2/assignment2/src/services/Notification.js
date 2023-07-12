
const Notification = ({message, errorMessage}) => {

    if(message === null && errorMessage === null) {
        return null
    }
    else if(message !== null && errorMessage === null) {
        return (
            <div className='addedPerson'> 
                {message}
            </div>
        )
    }
    else if(message === null && errorMessage !== null) {
        return (
            <div className='error'> 
                {errorMessage}
            </div>
        )
    }
    return (
        <div>
            <div className='addedPerson'> 
                    {message}
            </div>
            <div className='error'> 
                {errorMessage}
            </div>
        </div>
    )
}  


export default Notification