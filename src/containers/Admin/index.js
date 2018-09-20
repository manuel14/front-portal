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
            rejected: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount() {
        this.props.onLoad()
    }

    onDrop(accepted, rejected) {
        let files = [];
        let denied = Array.from(rejected);
        for (let r of accepted) {
            let emp;
            let periodo;
            try {
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
                    periodo = r.name.split("-")[1].split(".")[0];
                    files.push({ name: r.name, size: r.size, employee: employee });
                }
            }
            catch (err) {
                denied.push(r);
            }
        };
        this.setState(
            {
                files,
                rejected: denied
            })

    }

    onClick() {
        const receipts = this.state.files.map(r => {
            let emp = r.employee.id;
            let periodo = r.name.split("-")[1].split(".")[0];
            let periodoDate = moment();
            periodoDate.month(periodo.substring(0, 2) - 1);
            periodoDate.year(periodo.substring(2, 6));
            return { empleado: emp, periodo: periodoDate.format('YYYY-MM-DD') };

        })
        this.props.onUpload(receipts);
        this.setState({
            files: [],
            rejected: []
        })
    }
    onDelete() {
        this.setState({ files: [], rejected: [] })
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
    onUpload: (receipts) => dispatch(postReceipt(receipts)),
    onFormatError: (not) => dispatch(error(not)),
    onSuccessDrop: (files) => dispatch(receiptsResponse(files)),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);