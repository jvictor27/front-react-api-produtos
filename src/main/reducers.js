import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({sumario: {totalInvestido: 2000, totalVendido: 5000, totalLucro: 3000}})
})

export default rootReducer