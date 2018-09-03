import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import Dropzone from 'react-dropzone';
import { postReceipt, receiptsResponse } from './action';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { Button } from '../../components';
import { error } from 'react-notification-system-redux';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        for(let r of files){
            let file_ext
            let emp;
            let periodo;
            let notificationOpts = {
                // uid: 'once-please', // you can specify your own uid if required
                title: 'Aviso',
                message: `El formato del recibo ${r.name} no es el adecuado debe ser pdf con el formato debe ser legajo-período \n 67-012018`,
                position: 'tr',
                autoDismiss: 0
            };
            try {
                file_ext = r.name.split(".")[1];
                emp = r.name.split("-")[0];
                periodo = r.name.split("-")[1].split(".")[0];

            }
            catch(err){
                this.props.onFormatError(notificationOpts)
                return
            }
            if (file_ext !== "pdf"){
                this.props.onFormatError(notificationOpts)
            }
        }
        this.props.onSuccessDrop(files);
    }

    onClick() {
        const receipts = this.props.files.map(r => {
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
        return (
            <div className="admin">
                <Flex align="center">
                    <Box mx="auto" mt="20px" >
                        <h1>Administración de recibos</h1>
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
                        {this.props.files.length !== 0 && <div>
                            <h2>Recibos a crear</h2>
                            <ul>
                                {
                                    this.props.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
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
    onFormatError: (not) => dispatch(error(not)),
    onSuccessDrop: (files) => dispatch(receiptsResponse(files)),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);