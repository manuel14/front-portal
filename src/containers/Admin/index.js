import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import Dropzone from 'react-dropzone';
import { postReceipt } from './action';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { Button } from '../../components/index';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        this.setState({
            files
        })

    }

    onClick() {
        const receipts = this.state.files.map(r => {
            let emp = r.name.split("-")[0];
            let periodo = r.name.split("-")[1].split(".")[0];
            let periodoDate = moment();
            periodoDate.month(periodo.substring(0, 2));
            periodoDate.year(periodo.substring(2, 6));
            return { empleado: emp, periodo: periodoDate.format('YYYY-MM-DD') };

        })
        this.props.onUpload(receipts);
    }
    onDelete() {
        this.setState({
            files: []
        })
    }

    render() {
        const name = localStorage.username;
        return (
            <div className="admin">
                <Flex align="center">
                    <Box mx="auto" mt="20px" >
                        <h1>Bienvenido {name}</h1>
                        <div className="Dropzone">
                            <Dropzone onDrop={this.onDrop}>
                                <p>
                                    Suelte los recibos aquí.
                                    </p>
                                <p>Recuerde que cada archivo debe respetar el formato legajo-período por ejemplo
                                    <br />
                                    67-012018.pdf</p>
                            </Dropzone>
                        </div>
                        {this.state.files.length !== 0 && <div>
                            <h2>Recibos a crear</h2>
                            <ul>
                                {
                                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                }
                            </ul>
                            <Button margin={"0px 5px 0px 0px"} onClick={this.onClick.bind(this)} primary>Crear</Button>
                            <Button onClick={this.onDelete.bind(this)} danger>Borrar</Button>
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
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);