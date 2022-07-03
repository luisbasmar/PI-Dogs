/** @format */

export function validate(input) {
  const hasSpecialCharRegEx = new RegExp(/^[a-zA-Z\s]*$/g);
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is Required!!';
  } else if (!hasSpecialCharRegEx.test(input.name)) {
    errors.name = 'Name should not have numbers or special characters';
  } else if (input.name && !input.heightMin) {
    errors.heightMin = 'Minimum height is required!!';
  } else if (isNaN(parseInt(input.heightMin))) {
    errors.heightMin = 'Height Min should be a number';
  } else if (input.heightMin <= 0) {
    errors.heightMin = 'Height Min should be greater than 0';
  } else if (!input.heightMax) {
    errors.heightMax = 'Height Max is required!!';
  } else if (isNaN(parseInt(input.heightMax))) {
    errors.heightMax = 'Height Max should be a number';
  } else if (parseInt(input.heightMin) >= parseInt(input.heightMax)) {
    errors.heightMax = 'Height Max should be greater than Height Min';
  } else if (!input.weightMin) {
    errors.weightMin = 'Weight Min is required!!';
  } else if (isNaN(parseInt(input.weightMin))) {
    errors.weightMin = 'Weight Min should be a number';
  } else if (input.weightMin <= 0) {
    errors.weightMin = 'Weight Min should be greater than 0';
  } else if (!input.weightMax) {
    errors.weightMax = 'Weight Max is required!!';
  } else if (isNaN(parseInt(input.weightMax))) {
    errors.weightMax = 'Weight Max should be a number';
  } else if (parseInt(input.weightMax) <= parseInt(input.weightMin)) {
    errors.weightMax = 'Weight Max should be higher than Weight Min';
  } else if (!input.weightMin) {
    errors.weightMin = 'Weight Min is required!!';
  } else if (isNaN(parseInt(input.yearsMin)) && input.yearsMin !== '') {
    errors.yearsMin = 'Life Span Min should be a number';
  } else if (isNaN(parseInt(input.yearsMax)) && input.yearsMax !== '') {
    errors.yearsMax = 'Life Span Max should be a number';
  } else if (input.yearsMin <= 0 && input.yearsMin !== '') {
    errors.yearsMin = 'Life Span Min should be greater than 0';
  } else if (input.yearsMax <= 0 && input.yearsMax !== '') {
    errors.yearsMax = 'Life Span Max should be greater than 0';
  } else if (parseInt(input.yearsMax) <= parseInt(input.yearsMin)) {
    errors.yearsMax = 'Life Span Max should be greater than Life Span Min';
  }
  return errors;
}

export function setDogName(name) {
  return name
    .toLowerCase()
    .split(' ')
    .map(e => e[0].toUpperCase().concat(e.substring(1)))
    .join(' ');
}
