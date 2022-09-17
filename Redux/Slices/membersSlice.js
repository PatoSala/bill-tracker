import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const membersSlice = createSlice({
  name: 'membersSlice',
  initialState,
  reducers: {
    addMember: (state, object) => {
        state.value = [...state.value, object.payload];
    },
    cleanAllMembers: (state, object) => {
      state.value = []
    },
    editMemberAmount: (state, data) => {
      state.value.map(member => {
        if (member.id === data.payload.id) {
          member.amount = member.amount + data.payload.newAmount
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addMember, cleanAllMembers, editMemberAmount } = membersSlice.actions

export default membersSlice.reducer