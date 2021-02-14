import logger from 'loglevel'
import {startServer} from './start'

const isTest = process.env.NODE_ENV === 'test'
const loglevel = process.env.LOG_LEVEL || (isTest ? 'warn' : 'info')

logger.setLevel(logLevel)

startServer()
