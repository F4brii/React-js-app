import fetch from 'isomorphic-unfetch';


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profesores: [],
        };
    }

    componentWillMount() {
        fetch('http://localhost/teachers', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token 9f4c3d19316b6dd20109ba907c44d17339259283'
            },
        })
            .then(res => res.json())
            .then((profesores) => {
                this.setState({ profesores: profesores })
            })
    }

    render() {
        const listItems = this.state.profesores.map((profesor) =>
            <tr key={profesor.id}>
                <td>{profesor.id}</td>
                <td>{profesor.user}</td>
                <td>{profesor.code_institutional}</td>
            </tr>
        );
        return (
            <>
                <h4>Lista de profesores</h4>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Codigo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </>)
    }
}