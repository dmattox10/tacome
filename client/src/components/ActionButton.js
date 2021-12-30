const ActionButton = props => {

    const { className, icon, active } = props

    return (
        <div className={`${className} ${active ? ' active' : ''}`}>
            <i className={`fa fa-${icon}`}></i>
            <i className="outer fa fa-circle-thin"></i>
        </div>
    )
}

export default ActionButton