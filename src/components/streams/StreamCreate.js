import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component
{
    renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>    
            );
        }
    }

    renderInput = (formProps) => {
        // alternative syntax
        // return <input
        //     onChange={formProps.input.onChange}
        //     value={formProps.input.value}
        // />;

        const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    onSubmit = ( formValues ) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div className="ui container">
                <h3>Create a new stream</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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

const validate = (formValues) => {
    let errors = {};

    if (!formValues.title) {
        // the name "title" is the same with <Field name="title" /> in the Form above
        errors.title = 'You must enter the title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter the description';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(
    null,
    {
        createStream
    }
)(formWrapped);