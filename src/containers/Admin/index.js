import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import Dropzone from 'react-dropzone';
import { postReceipt, receiptsResponse } from './action';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { Button, List } from '../../components';
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
                let emp;
                let periodo;
                emp = r.name.split("-")[0];
                periodo = r.name.split("-")[1].split(".")[0];
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
                    formData.append("archivo", r);
                    formData.append("empleado", employee.id);
                    let periodo = r.name.split("-")[1].split(".")[0];
                    let periodoDate = moment();
                    periodoDate.month(periodo.substring(0, 2) - 1);
                    periodoDate.year(periodo.substring(2, 6));
                    periodoDate = periodoDate.format('YYYY-MM-DD');
                    formData.append("periodo", periodoDate);
                    files.push({ name: r.name, size: r.size, employee: employee});
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
                        <h1>Administración de recibos</h1>
                        {this.state.files.length === 0 && <div className="Dropzone">
                            <Dropzone accept=".pdf" onDrop={this.onDrop}>
                                <p>
                                    Suelte los recibos dentro de este recuadro.
                                    </p>
                                <p>Recuerde que cada archivo debe respetar el formato legajo-período(mes año) por ejemplo:
                                    <br />
                                    67-012018.pdf</p>
                            </Dropzone>
                        </div>}
                        {this.state.files.length !== 0 && <div>
                            <h2>Recibos a crear</h2>
                            <List height={'180px'}>
                                {
                                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                }
                            </List>
                            <Button margin={"0px 5px 0px 0px"} onClick={this.onClick.bind(this)} primary>Crear</Button>
                            <Button onClick={this.onDelete.bind(this)} danger>Borrar</Button>
                        </div>
                        }
                        {this.state.rejected.length !== 0 && <div>
                            <h2>Recibos incorrectos, revise el formato sugerido
                            </h2>
                            <List height={'80px'}>
                                {
                                    this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                }
                            </List>
                            <Button onClick={this.onDeleteRejected.bind(this)} danger>Borrar</Button>
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