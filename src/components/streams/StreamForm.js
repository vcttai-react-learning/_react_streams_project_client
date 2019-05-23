import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component
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
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            // this.props.handleSubmit is a method of redux-form
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

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);