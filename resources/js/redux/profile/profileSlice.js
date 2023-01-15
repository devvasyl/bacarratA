import { login } from "../auth/auth-slice";
import { profileFunctions } from "./profileApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMe = createAsyncThunk("me", async () => {
    const response = await profileFunctions.getMe();
    return response;
});

export const changeUsername = createAsyncThunk(
    "change-username",
    async (username) => {
        const response = await profileFunctions.changeUsername(username);
        return response;
    }
);

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null,
        profileColor: "#64A2FF",
        nicknameModalState: {
            open: false,
        },
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        changeNicknameModalState: (state, action) => {
            state.nicknameModalState = action.payload;
        },
        setProfileColorStore: (state, action) => {
            state.profileColor = action.payload;
        },
    },
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.profile = action.payload.data;
            }
        },
        [login.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.profile = action?.payload?.data?.user;
            }
        },
        [changeUsername.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.profile.username = action.payload?.data?.user?.username;
            }
        },
    },
});

export const { setProfile, changeNicknameModalState, setProfileColorStore } =
    profileSlice.actions;
export const ProfileState = profileSlice.reducer;
