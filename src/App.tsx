import { useEffect, useState } from 'react'
import s from './App.module.scss'
import x from './images/X.png'
import o from './images/O.png'
import useStore from './store'
import WinModal from './components/winModal/winModal'

function App() {
  
  const ground = useStore(state => state.ground) // Поле
  const turn = useStore(state => state.turn) // Чья очередь
  const result = useStore(state => state.result) // Результат
  const changeGroundItem = useStore(state => state.changeGroundItem) // Смена блока
  const addCount = useStore( state => state.addCount) // Смена результатов
  const restart = useStore(state => state.restart) // Очистка поля
  const [res, setRes] = useState('') // Ограничение ходов после победы

  const restartGround = () => {
    restart()
    setRes('')
  }

  const changeRes = (data:boolean) => {
    data ? addCount(0): addCount(1)
     data ? setRes('x') : setRes('o')  
  }

  // Выйгрышные ситуации
  useEffect(() => {
    ground[0] !== '' ? 
    ground[0] === ground[1] && ground[0] === ground[2] ? changeRes(ground[0]) :
    ground[0] === ground[3] && ground[0] === ground[6] ? changeRes(ground[0]) :
    ground[0] === ground[4] && ground[0] === ground[8] ? changeRes(ground[0]) : null : null

    ground[1] !== '' ? 
    ground[1] === ground[4] && ground[1] === ground[7] ? changeRes(ground[1]) :
    null : null

    ground[3] !== '' ? 
    ground[3] === ground[4] && ground[3] === ground[5] ? changeRes(ground[3]) :
    null : null

    ground[8] !== '' ? 
    ground[8] === ground[7] && ground[8] === ground[6] ? changeRes(ground[8]) :
    null : null

    ground[2] !== '' ? 
    ground[2] === ground[4] && ground[2] === ground[6] ? changeRes(ground[2]) :
    ground[2] === ground[5] && ground[2] === ground[8] ? changeRes(ground[2]) : null : null

    let i = 0 
    ground.map((e:any) => e === '' ? i+=1 : null)
    i === 0 ? restartGround() : null

  }, [ground])

  return (
    <>
    <div className={s.App}>
      <div className={s.res}>
        <img src={x} alt="" />
        <h3>{result[0]}</h3>
      </div>
      <div className={s.Game}>
        <div className={s.Header}>
        <div className={s.resMobile}>
          <img src={x} alt="" />
          <h3>{result[0]}</h3>
        </div>
        <div className={s.turn}>
          <img src={turn ? x : o} />
          <h3>turn</h3>
        </div>
        <div className={s.resMobile}>
        <img src={o} alt="" />
        <h3>{result[1]}</h3>
        </div>
        </div>
        <div className={s.ticTacToe}>
          {ground.map((e:any, index:number) => (
            <div key={index} className={e === '' ? s.ticTacToe_card : s.ticTacToe_card_active} onClick={() => {e === '' && res === '' ? changeGroundItem(e, index, turn) : null}}>
              <img src={e !== '' ? e ? x : o : ''}/>
            </div>
          ))}
        </div>
        <p onClick={() => restartGround()}>clear the field</p>
      </div>
      <div className={s.res}>
        <img src={o} alt="" />
        <h3>{result[1]}</h3>
      </div>
    </div>
    <WinModal winner={res} restart={restartGround}/>
    </>
  )
}

export default App
