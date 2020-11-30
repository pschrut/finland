export function openRightMenu() { return { type: 'OPEN_RIGHT_MENU' } }
export function closeRightMenu() { return { type: 'CLOSE_RIGHT_MENU' } }
export function addOutcomeRecord(payload) { return { type: 'ADD_OUTCOME_RECORD', payload } }
export function addIncomeRecord(payload) { return { type: 'ADD_INCOME_RECORD', payload } }