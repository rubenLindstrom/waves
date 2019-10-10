import React from "react";

const formfield = ({ formData, onChange, id }) => {
  const showError = () => {
    let errorMessage = "";

    if (formData.validation && !formData.valid) {
      errorMessage = (
        <div className="error_label">{formData.validationMessage}</div>
      );
    }

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = "";

    switch (formData.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            <input
              {...formData.config}
              value={formData.value}
              onBlur={event => {
                event.persist();
                onChange({ event, id, blur: true });
              }}
              onChange={event => {
                event.persist();
                onChange({ event, id });
              }}
            />
            {showError()}
          </div>
        );
        break;
      default:
        return formTemplate;
    }

    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default formfield;
