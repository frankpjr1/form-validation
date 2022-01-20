
  const myForm = document.getElementById('project-form');
  const submit = document.getElementById('submit');
  const clientName = document.getElementById('name');
  const clientPhone = document.getElementById('phone');
  const clientEmail = document.getElementById('email');
  const clientServices = document.getElementById('select_default');
  const clientMessages = document.getElementById('client_message');
  const clientTerms = document.getElementById("myCheck");

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
            errorMessage.innerHTML= `<p style="background-color: #008ae6;width:100%;border-radius: 5px;padding: .1em 0 .5em .1em;text-align: center;margin-top: .5em;font-size:1.5em;color: cornsilk;">name is required</p>`;
            errorName.appendChild(errorMessage);

        }

        if (clientEmail.value === "" || clientEmail.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= `<p style="background-color: #008ae6;width:100%;border-radius: 5px;padding: .1em 0 .5em .1em;text-align: center;margin-top: .5em;font-size:1.5em;color: cornsilk;">valid email is required</p>`;
          errorEmail.appendChild(errorMessage);

        }

        if (clientPhone.value === "" || clientPhone.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= `<p style="background-color: #008ae6;width:100%;border-radius: 5px;padding: .1em 0 .5em .1em;text-align: center;font-size:1.5em;margin-top: .5em;color: cornsilk;">phone number required</p>`;
          errorPhone.appendChild(errorMessage);

        }

      if (clientServices.value === "home" || clientServices.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= `<p style="background-color: #008ae6;width:100%;border-radius: 5px;padding: .1em 0 .5em .1em;text-align: center;font-size:1.5em;margin-top: .5em;color: cornsilk;">service selection required</p>`;
          errorService.appendChild(errorMessage);

      }



        if (clientMessages.value === "" || clientMessages.value === null){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= `<p style="background-color: #008ae6;width:50%;border-radius: 5px;padding: .1em 0 .5em .1em;text-align: center;font-size:1.5em;color: cornsilk;">a short note is required</p>'`;
          errorNote.appendChild(errorMessage);

        }

        if (clientTerms.checked === false){
          const  errorMessage = document.createElement('div')
          errorMessage.innerHTML= '<p style="background-color: #008ae6;width:50%;border-radius: 5px;padding: .1em 0 .5em .1em;font-size:1.5em;text-align: center;color: cornsilk;">terms must be selected</p>';
          errorSelect.appendChild(errorMessage);

        }







  })







