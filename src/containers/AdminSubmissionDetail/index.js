import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubmission, patchSubmission } from './action';
import {Box, Flex} from 'grid-styled';
import { withRouter } from 'react-router';
import MoneySubmission from '../../components/Submissions/MoneySubmission';
import VacationSubmission from '../../components/Submissions/VacationSubmission';

class AdminSubmissionDetail extends Component {

    constructor(props) {
        super(props)
        this.getComponent = this.getComponent.bind(this)
        this.onAccept = this.onAccept.bind(this);
    }

    componentDidMount() {
        const submissionId = this.props.match.params.submissionId;
        const tipo = this.props.match.params.tipo;
        this.props.onLoad(submissionId, tipo);
    }

    onAccept(event){
        let body
        if(event.target.name === "aprobar"){
            body = {estado: "A"};
        }
        else{
            body = {estado: "R"};
        }
        const tipo = this.props.match.params.tipo;
        this.props.onConfirm(tipo, this.props.submission.pk, body);
    }



    getComponent(tipo){
        switch(tipo){
            case 'Adelanto': 
              return <MoneySubmission
                    importe={this.props.submission.importe}
                    empleado={this.props.submission.empleado ? this.props.submission.empleado.nombre : ''}
                    motivo={this.props.submission.motivo}
                    fecha={this.props.submission.fecha_creacion}
                    onAccept={this.onAccept}
                >

                 </MoneySubmission>;
            case 'Vacaciones': 
              return <VacationSubmission
                    empleado={this.props.submission.empleado ? this.props.submission.empleado.nombre : ''}
                    fecha_inicio={this.props.submission.fecha_inicio}
                    fecha_fin={this.props.submission.fecha_fin}
                    antiguedad={this.props.submission.empleado ? this.props.submission.empleado.antiguedad : ''}
                    >

              </VacationSubmission>;
            default: 
              return <h1>Adelanto</h1>;
        }
    }

    render() {
        const tipo = this.props.match.params.tipo;
        return (
            <Flex align="center">
                <Box mt={'30px'} width={'1024px'}>
                   {this.getComponent(tipo)}
                </Box>
            </Flex>
        )
    }
}
const mapStateToProps = state => ({
    ...state.adminSubmissionDetailReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: (id, tipo) => dispatch(getSubmission(id, tipo)),
    onConfirm: (id, tipo,  data) => dispatch(patchSubmission(id,tipo, data)),
    dispatch
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (AdminSubmissionDetail));
