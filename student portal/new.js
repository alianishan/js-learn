function addData(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;
    var Name = document.getElementById('name').value;


    localStorage.setItem('userEmail',email);
    localStorage.setItem('userPwd',pass);
    localStorage.setItem('usern',Name);
}
