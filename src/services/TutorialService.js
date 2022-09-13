import http from "../http-common";

const create = (data) =>{
  return http.post("tutorial",data);
}
const TutorialService = {
    create
}

export default TutorialService;