export class UserAccount {

    user_id: number;
    email:String;
    username:String;
    password:String;
    first_name:String; 
    last_name:String;
    roles:String;

    constructor(id:number, email: String, username:String, password:String, fname:String, lname:String, roles:String){
        this.user_id=id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.first_name = fname;
        this.last_name = lname;
        this.roles = roles;
    }

}