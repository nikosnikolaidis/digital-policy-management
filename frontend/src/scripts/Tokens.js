import jwt_decode from "jwt-decode";

function isAuthenticated(){
    var token = localStorage.getItem("accessToken");
    var valid = false;
    if(token!=="" && token!==null){
      var decoded = jwt_decode(token);
      if (Date.now() >= decoded.exp * 1000) {
          valid=false;
      }
      else{
        valid=true;
      }
    }
    console.log("valid: "+valid);
    return valid;
}

function refreshToken(){
    var token = localStorage.getItem("refreshToken");
    //toDo
    //
}

export default isAuthenticated;