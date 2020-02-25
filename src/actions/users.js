import axios from "axios"

export function addUser(user) {
  return new Promise((resolve, reject) => {
    axios.post("./users", user).then(resp => {
      resolve()
    })
  })
}
