import express from 'express'
import {getTestRoutes} from './test'


function getRoutes() {
  
  const router = express.Router()
  router.use('/test', getTestRoutes())
  
  return router
}
export {getRoutes}