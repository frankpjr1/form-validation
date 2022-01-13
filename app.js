
  const myForm = document.getElementById('project-form');

  // const clientName = document.getElementById('name');
  // const clientPhone = document.getElementById('phone');

    const submit = document.getElementById(('submit'))
  const clientName = document.getElementById('name');
  const clientPhone = document.getElementById('phone');
  const clientEmail = document.getElementById('email');
  const clientServices = document.getElementById('services');
  const clientMessages = document.getElementById('client_message');
  const clientTerms = document.getElementById('terms-conditions');

  const error = []
  submit.addEventListener('click',(e)=>{
      e.preventDefault()

        if (clientName.value === "" || clientName.value === null){
            prompt("enter name")
        }

        if (clientPhone.value === "" || clientPhone.value === null){
            prompt("enter a phone number")
        }

        if (clientEmail.value === "" || clientEmail.value === null){
          prompt("enter your email")
        }

        if (clientMessages.value === "" || clientMessages.value === null){
          prompt("please write us a short note")
        }

        if (clientTerms.value === null){
            prompt("check our terms")
        }
        else{

        }


  })







