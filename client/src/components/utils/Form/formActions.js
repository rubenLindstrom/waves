export const validate = (el, data = []) => {
  let error = [true, ""];

  if (el.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(el.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = [valid, message];
  }

  if (el.validation.required) {
    const valid = el.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

export const update = (el, formData, formName) => {
  const newFormData = { ...formData };
  const newEl = {
    ...newFormData[el.id]
  };

  newEl.value = el.event.target.value;

  if (el.blur) {
    const validData = validate(newEl, formData);
    newEl.valid = validData[0];
    newEl.validationMessage = validData[1];
  }

  newEl.touched = el.blur;
  newFormData[el.id] = newEl;

  return newFormData;
};

export const generateData = (data, name) => {
  let returnData = {};

  for (let key in data) {
    returnData[key] = data[key].value;
  }

  return returnData;
};

export const validateForm = (data, name) => {
  for (let key in data) {
    console.log(data[key]);
    if (!data[key].valid) {
      return false;
    }
  }
  return true;
};
