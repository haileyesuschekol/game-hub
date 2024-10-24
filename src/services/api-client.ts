import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a2b658b5a764af1bb7ee7a1c6f13232",
  },
})
