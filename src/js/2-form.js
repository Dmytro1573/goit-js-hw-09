const formFeedback = document.querySelector('.feedback-form');
const email = formFeedback.elements.email;
const message = formFeedback.elements.message;

const dataForm = JSON.parse(localStorage.getItem('feedback-form-state'));

if (dataForm === null) {
  email.value = '';
  message.value = '';
} else {
  email.value = dataForm.email;
  message.value = dataForm.message;
}

function handleSaveData(item) {
  const saveData = item.currentTarget;
  const localData = {
    email: saveData.elements.email.value.trim(),
    message: saveData.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(localData));
}

formFeedback.addEventListener('input', handleSaveData);

function handleSubmitData(event) {
  event.preventDefault();

  if (event.value === '' || message.value === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    formFeedback.reset();
  }
}

formFeedback.addEventListener('submit', handleSubmitData);
