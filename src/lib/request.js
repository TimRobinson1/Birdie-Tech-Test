// @flow
import axios from 'axios'

async function request (url: string): fetchedData {
  const result: Promise<Object> = await axios({ method: 'get', url })

  return result.data
}

export default request
