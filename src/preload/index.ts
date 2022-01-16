import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  doAthing: () => console.log('hello'),
  doBthing: () => console.log('hi')
})