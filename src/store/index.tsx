import { create } from 'zustand'


interface MyState {
  ground: (string|boolean)[],
  turn: boolean,
  result: number[],
  changeGroundItem: (index: number, turn: boolean) => void,
  restart: () => void,
  addCount: (i: number) => void,
}


const useStore = create<MyState>((set) => ({
    ground: ['','','','','','','','',''],
    turn: true,
    result: [0, 0],
    changeGroundItem: (index:number, turn:boolean) =>
    set((state:any) => ({
     ground: state.ground.map((e:any,i:number) => 
        i === index ? turn : e
      ),
      turn: !state.turn
    })),
    restart: () => set((state) => ({ground: ['','','','','','','','',''], turn: state.turn, result: state.result})),
    addCount: (i:number) => set((state:MyState) => ({ground: state.ground, turn: state.turn, result: state.result.map((el:number,index:number) => index === i ? el+=1 : el), changeGroundItem: state.changeGroundItem, restart: state.restart, addCount: state.addCount})),
  }))

  export default useStore