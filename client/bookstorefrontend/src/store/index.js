import { configureStore } from '@reduxjs/toolkit'
import checkAuthentication from './log-slice'

export default configureStore({
  reducer: {
    authentication: checkAuthentication,
  },
})


