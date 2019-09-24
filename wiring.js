import Dispatch from './dispatch'
import Provider from './provider'
import Connect from './connect'
import Events from './events'
import assert from './assert'

export default (React,state={},reducers={}) => {
  assert(React,'requires react library')
  const Context = React.createContext()
  const events = Events()
  const connect = Connect(React,Context)

  const dispatch =  Dispatch(state,reducers,events.emit)
  const provider = Provider(React,state,dispatch,Context,events)

  return {
    Provider:provider,
    dispatch,
    connect,
    events
  }

}
