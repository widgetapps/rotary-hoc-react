import React, { Component } from 'react';
import DataFaq from '../data/DataFaq';

class Faq extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-sm-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="panel-body">
                            <p>{this.props.description}</p>
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                {
                                    DataFaq.all().filter(g => g.type === this.props.type).map(f => (

                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id={'heading-' + f.id}>
                                                <h4 className="panel-title">
                                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href={'#collapse-' + f.id} aria-expanded="false" aria-controls={'collapse-' + f.id}>
                                                        {f.question}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id={'collapse-' + f.id} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={'heading-' + f.id}>
                                                <div className="panel-body">
                                                    {f.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Faq;
