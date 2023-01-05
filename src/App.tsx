import { useEffect, useState } from 'react'
import s from './App.module.scss'
import x from './images/X.png'
import o from './images/O.png'

function App() {
  const [state, setState]:any = useState(['','','','','','','','',''])
  const [turn, setTurn] = useState(true)
  const [res, setRes] = useState('')
  const [countX, setCountX] = useState(0)
  const [countO, setCountO] = useState(0)

  const changeCardState = (e:any, index:number) => {
    let newState:any = state.map((e:any,i:number) => {
      return i === index ? turn : e
    })
    setTurn(!turn)
    setState(newState)
  }

  const changeRes = (data:boolean) => {
    data ? setCountX(countX+1) : setCountO(countO+1)  
     data ? setRes('x') : setRes('o')  
  }

  const restart = () => {setState(['','','','','','','','','']), setRes('')}

  useEffect(() => {
    console.log(state)
    state[0] !== '' ? 
    state[0] === state[1] && state[0] === state[2] ? changeRes(state[0]) :
    state[0] === state[3] && state[0] === state[6] ? changeRes(state[0]) :
    state[0] === state[4] && state[0] === state[8] ? changeRes(state[0]) : null : null

    state[1] !== '' ? 
    state[1] === state[4] && state[1] === state[7] ? changeRes(state[1]) :
    null : null

    state[3] !== '' ? 
    state[3] === state[4] && state[3] === state[5] ? changeRes(state[3]) :
    null : null

    state[8] !== '' ? 
    state[8] === state[7] && state[8] === state[6] ? changeRes(state[8]) :
    null : null

    state[2] !== '' ? 
    state[2] === state[4] && state[2] === state[6] ? changeRes(state[2]) :
    state[2] === state[5] && state[2] === state[8] ? changeRes(state[2]) : null : null

  }, [state])

  return (
    <div className={s.App}>
      <div className={s.res}>
        <img src={x} alt="" />
        <h3>{countX}</h3>
      </div>
      <div className={s.Game}>
        <div className={s.turn}>
          <img src={turn ? x : o} />
          <h3>turn</h3>
        </div>
        <div className={s.ticTacToe}>
          {state.map((e:any, index:number) => (
            <div className={e === '' ? s.ticTacToe_card : s.ticTacToe_card_active} onClick={() => {e === '' && res === '' ? changeCardState(e, index) : null}}>
              <img src={e !== '' ? e ? x : o : ''}/>
            </div>
          ))}
        </div>
        <p onClick={() => restart()}>restart</p>
        
      </div>
      <div className={s.res}>
        <img src={o} alt="" />
        <h3>{countO}</h3>
      </div>
    </div>
  )
}

export default App
