import { create } from 'zustand'


interface MyState {
  ground: any,
  turn: boolean,
  result: any,
  changeGroundItem: any,
  restart: any,
  addCount: any,
  pushResult: any,
}


const useStore = create<MyState>((set) => ({
    ground: ['','','','','','','','',''],
    turn: true,
    result: [0, 0],
    changeGroundItem: (item:any, index:number, turn:boolean) =>
    set((state:any) => ({
     ground: state.ground.map((e:any,i:number) => 
        i === index ? turn : e
      ),
      turn: !state.turn
    })),
    restart: () => set((state:any) => ({ground: ['','','','','','','','',''], turn: state.turn, result: state.result})),
    addCount: (i:number) => set(state => ({ground: state.ground, turn: state.turn, result: state.result.map((el:any,index:number) => index === i ? el+=1 : el)})),
    pushResult: (data:any) => set(state => ({ground: state.ground, turn: state.turn, result: data}))
  }))

  export default useStore