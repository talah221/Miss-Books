
export class About extends React.Component {

    state = {

    }
    gInterval;
    componentDidMount() {
        this.gInterval = setInterval(() => console.log('Bonus'), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.gInterval)
    }
    render() {
        return (

            <section>
                <h1>About my Page:</h1>
                <div className="about-me"></div>
                <div className="about-site"></div>
                <div className="technologies"></div>
                <div className="to-refactor"></div>
                <div className="special-thanks"></div>
            </section>
        )
    }
}