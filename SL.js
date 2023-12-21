 const form =document.getElementById('form');
 const username =document.getElementById('username');
 const email =document.getElementById('email');
 const passsword =document.getElementById('password');
 const passsword2 =document.getElementById('password2');


 form.addEventListener('submit' ,e => {
    e.preventDefault();

    validateInputs();
 });

 const setError = (element,message)=> {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText =message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
 }
 
 const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ="";
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
 }

 const isValidEmail = email => {
   const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   return re.test(String(email).toLowerCase());  
 }


 const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passswordValue = passsword.value.trim();
    const passsword2Value = passsword2.value.trim();

    if(usernameValue ===''){
        setError(username,'username is requird');   
    }
    else{
      setSucess(username);
    }

    if(emailValue ===''){
      setError(email,'hhhhhhhhhhhh');
    }else if(!isValidEmail(emailValue)) {
      setError(email ,'kkkkkkkkkkkk')
    } else {
      setSucess(email)
    }

    if(passswordValue ===''){
      setError(passsword,'jjjjjjjjj')
    }
    else if(passswordValue.length <8){
      setError(passsword,'ppppppp')
    }

 };

