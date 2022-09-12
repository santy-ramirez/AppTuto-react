import http from "../http-common";

const create = (data) =>{
  return http.post("tutorials",data);
}
const TutorialService = {
    create
}

export default TutorialService;