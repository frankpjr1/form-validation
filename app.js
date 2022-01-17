
  const myForm = document.getElementById('project-form');
  const submit = document.getElementById('submit');
  const clientName = document.getElementById('name');
  const clientPhone = document.getElementById('phone');
  const clientEmail = document.getElementById('email');
  const clientServices = document.getElementById('select_default').value;


  const clientMessages = document.getElementById('client_message');
  const clientTerms = document.getElementById('terms-conditions');
  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorPhone = document.getElementById('error-phone');
  const errorService = document.getElementById('error-services');
  const errorNote = document.getElementById('note');
  const errorSelect = document.getElementById('error-terms');


  // const error = []
  myForm.addEventListener('submit',(e)=>{
        e.preventDefault()


        if (clientName.value === "" || clientName.value === null ){
            const  errorMessage = document.createElement('div')
            errorMessage.innerHTML= "your name is required";
            errorName.appendChild(errorMessage);

        }

        if (clientEmail.value === "" || clientEmail.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= "a valid email must be entered";
          errorEmail.appendChild(errorMessage);

        }

        if (clientPhone.value === "" || clientPhone.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= "a phone number must be entered";
          errorPhone.appendChild(errorMessage);

        }



        if (clientMessages.value === "" || clientMessages.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= "a short note is required";
          errorNote.appendChild(errorMessage);

        }

        if (clientTerms.checked === false){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= "terms must be selected";
          errorSelect.appendChild(errorMessage);

        }







  })







