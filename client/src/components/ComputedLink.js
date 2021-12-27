const ComputedLink = props => {

    const { text } = props
    const url = `/${text.toLowerCase()}`
    return (
        <NavItem>
            <Link to={url}>
                {text}
            </Link>
        </NavItem>
    )

}

export default ComputedLink