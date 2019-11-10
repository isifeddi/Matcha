import axios from 'axios'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000)
    .then(async () => {
      const error = {}
      const er = await axios.post('http://localhost:5000/register', values)
      if (er.data.username === 'Username already exists')
      {
        error.username = er.data.username
      }
      if (er.data.email === 'Email already exists') 
      {
        error.email= er.data.email
      }
      if(error.username !== 'undefined' && error.email !== 'undefined')
        throw error
    })
}

export default asyncValidate