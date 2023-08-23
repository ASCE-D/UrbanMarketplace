import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer( 
    {
        user: {},
    },
    {
        REGISTER_USER_REQUEST:(state, action) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LOAD_USER_REQUEST:(state, action) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LOGIN_REQUEST:(state, action) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        REGISTER_USER_SUCCESS:(state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        LOAD_USER_SUCCESS:(state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        LOGIN_SUCCESS:(state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        LOGOUT_SUCCESS:(state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },
        REGISTER_USER_FAIL:(state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        LOGIN_FAIL:(state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        LOAD_USER_FAIL:(state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        LOGOUT_FAIL:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        CLEAR_ERRORS:(state, action) => {
            state.error = null;
        }
    }
    
);