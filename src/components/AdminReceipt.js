import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class AdminReceipt extends Component {

    constructor(props) {
        super(props);
        this.state ={files: []}
        this.onDrop = this.onDrop.bind(this);

    }

    onDrop(files) {

    }
    render() {
        return (
            <section>
                <div className="Dropzone">
                    <Dropzone onDrop={this.onDrop}>
                        <p>
                            Suelte los recibos aquí
                </p>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Dropped files</h2>
                    <ul>
                        {
                            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        )
    }
}

export default AdminReceipt;