import { NavLink, NavItem } from 'reactstrap'

const ComputedLink = props => {

    const { text } = props 
    return (
        <NavItem>
            <NavLink href={`/${text}`}>
                {text}
            </NavLink>
        </NavItem>
    )
}

export default ComputedLink