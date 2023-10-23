const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={message.color ? 'notification' : 'error'} >
            {message.message}
        </div>
    )
}

export default Notification;
