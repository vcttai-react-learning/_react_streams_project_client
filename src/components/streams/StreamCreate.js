import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component
{
    renderInput(formProps) {
        // alternative syntax
        // return <input
        //     onChange={formProps.input.onChange}
        //     value={formProps.input.value}
        // />;
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        );
    }

    onSubmit( formValues ) {
        console.log( formValues );
    }

    render() {
        return (
            <div className="ui container">
                <h3>Create a new stream</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field 
                        name="title" 
                        component={this.renderInput} 
                        label="Title:" 
                    />

                    <Field 
                        name="description" 
                        component={this.renderInput} 
                        label="Description:" 
                    />

                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);