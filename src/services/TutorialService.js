import http from "../http-common";

const create = (data) =>{
  return http.post("tutorial",data);

}

const geAll = ()=>{
  return http.get("tutorial")
}

const findByTitle = (title)=>{
  console.log(title);
  return http.get(`tutorial?query=${title}`)
}

const TutorialService = {
    create,
    geAll,
    findByTitle
}

export default TutorialService;