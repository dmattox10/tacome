import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const ComputedLink = props => {

    const { text } = props 
    return (
        <NavItem>
            <Link to={`/${text}`}>
                {text}
            </Link>
        </NavItem>
    )

}

export default ComputedLink