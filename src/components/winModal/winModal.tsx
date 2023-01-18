import useStore from "../../store";
import s from './winModal.module.scss'
import x from '../../images/X.png'
import o from '../../images/O.png'

const WinModal = ({winner, restart} : {winner: string, restart: () => void} ) => {
    return(
        <div className={s.screenModal} style={{display: winner !== '' ? 'flex' : 'none'}}>
            <div className={s.screenModal_info}>
                <img src={winner !== '' ? winner === 'x' ? x : o : ''}/>
                <h1>win</h1>
                <button onClick={() => restart()}>confirm</button>
            </div>
        </div>
    )
}

export default WinModal