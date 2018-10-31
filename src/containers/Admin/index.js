import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import Dropzone from 'react-dropzone';
import { postReceipt} from './action';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { Button, Card, Center, List, ListItem, Title } from '../../components';
import { error } from 'react-notification-system-redux';
import { getEmployees } from './action';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            receipts: [],
            rejected: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount() {
        this.props.onLoad()
    }

    onDrop(accepted, rejected) {
        let files = [];
        let receipts = [];
        let denied = Array.from(rejected);
        let formData = new FormData();
        for (let r of accepted) {
            try {
                let emp = r.name.split("-")[0];
                let periodo = r.name.split("-")[1];
                const mes = parseInt(periodo.slice(0, 2));
                const anio = periodo.slice(2);
                if ((mes < 1 || mes > 12) || (anio.length !== 4)) {
                    denied.push(r);
                }
                else {
                    let d = moment(periodo);
                    let employee = this.props.employees.find(e => e.legajo === parseInt(emp));
                    if (employee === undefined) {
                        const notificationOpts = {
                            // uid: 'once-please', // you can specify your own uid if required
                            title: 'Error',
                            message: `El empleado con legajo ${emp} no existe`,
                            position: 'tr',
                            autoDismiss: 0
                        };
                        this.props.onFormatError(notificationOpts);
                        continue
                    }
                    else if (!(d.isValid())) {
                        denied.push(r);
                    }
                    else {
                        const tipo = r.name.split("-")[2].split(".")[0];
                        formData.append("archivo", r);
                        formData.append("empleado", employee.id);
                        formData.append("tipo", tipo);
                        let periodoDate = moment();
                        periodoDate.month(mes - 1);
                        periodoDate.year(anio);
                        periodoDate = periodoDate.format('YYYY-MM-DD');
                        formData.append("periodo", periodoDate);
                        files.push({ name: r.name, size: r.size, employee: employee });
                    }
                }
            }
            catch (err) {
                console.log(err);
                denied.push(r);
            }
        };
        receipts.push(formData);
        this.setState(
            {
                files,
                receipts,
                rejected: denied
            })
    }

    onClick() {
        this.props.onUpload(this.state.receipts[0]);
        this.setState({
            files: [],
            rejected: [],
            receipts: []
        })
    }
    onDelete() {
        this.setState({ files: [], rejected: [], receipts: [] })
    }

    onDeleteRejected(){
        this.setState({
            rejected: []
        })
    }

    render() {
        return (
            <div className="admin">
                <Flex align="center">
                    <Box mx="auto" mt="20px" >
                        <Title 
                            align={"center"} 
                            margin={"0px 0px 10px 0px"} 
                            color={"black"}>
                            Administración de archivos
                        </Title>
                        {this.state.files.length === 0 && this.state.rejected.length === 0 && <div className="Dropzone">
                            <Center>
                                <Dropzone accept=".pdf" onDrop={this.onDrop}>
                                    <p>Suelte los archivos dentro de este recuadro.</p>
                                    <p>Recuerde que cada archivo debe respetar el formato legajo-período-tipo por ejemplo:
                                        67-012018-R.pdf</p>
                                </Dropzone>
                            </Center>
                        </div>}
                        {this.state.files.length !== 0 && <div>
                            <Title small align={"center"} color={"black"} >
                                Recibos a crear:
                                </Title >
                            <Card width={'240px'} height={"200px"} color={"#f0efef"} center mx="auto">
                                <List height={'140px'}>
                                    {
                                        this.state.files.map(f => <ListItem key={f.name}>{f.name}</ListItem>)
                                    }

                                </List>
                                <Button margin={"0px 5px 0px 0px"} onClick={this.onClick.bind(this)} primary>Crear</Button>
                                <Button onClick={this.onDelete.bind(this)} danger>Borrar</Button>
                            </Card>
                        </div>
                        }
                        {this.state.rejected.length !== 0 && <div>
                            <Title small align={"center"} 
                                color={"black"}
                                >Recibos incorrectos, revise el formato sugerido
                            </Title>
                            <Card width={'240px'} height={"200px"} color={"#f0efef"} center mx="auto">
                                <List>
                                    {
                                        this.state.rejected.map(f => <ListItem key={f.name}>{f.name}</ListItem>)
                                    }
                                </List>
                                <Button large onClick={this.onDeleteRejected.bind(this)} danger>Borrar</Button>
                            </Card>
                        </div>
                        }
                    </Box>
                </Flex>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.adminReducer
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getEmployees()),
    onUpload: (receipts) => dispatch(postReceipt(receipts)),
    onFormatError: (not) => dispatch(error(not)),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);