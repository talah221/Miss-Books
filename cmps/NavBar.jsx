
const { NavLink } = ReactRouterDOM
export class NavBar extends React.Component {



    render() {
        return (


            <section className="nav-bar">
                    <NavLink exact  to="/">Homepage</NavLink>
                    <NavLink to="/about">AboutPage</NavLink>
                    <NavLink to="/book">Book App</NavLink>
            </section>
        )
    }
}