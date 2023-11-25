import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false,
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.status = true; 
            console.log("Status: ", state.status);
            state.user = action.payload.user;
        },
        register: (state, action) => {
            let { name, email, pass } = action.payload;
            state.status = true
            state.user = {
                name: name,
                role: 'customer',
                email: email,
                pass: pass
            }
        },
        logout: (state) => {
            console.log("user slice logouta gelindi");
            state.status = false
            state.user = { }
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer