const ActionButton = props => {

    const { className, icon, action, active }

    return (
        <div className={`${className} ${active ? ' active' : ''}`} onClick={action}>
            <i className={`fa fa-${icon}`}></i>
            <i className="outer fa fa-circle-thin"></i>
        </div>
    )
}

export default ActionButton