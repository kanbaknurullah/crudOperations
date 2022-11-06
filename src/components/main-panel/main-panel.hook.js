import { useState } from 'react';
import axiosInstance from '../../axios/axios-instance';

export const useMainPanelHook = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [isAddNewUserShown, setIsAddNewUserShown] = useState(false);
    const [isEditUserShown, setIsEditUserShown] = useState(false);
  
    const getUser = async (id) => {
        try {
            await axiosInstance({
                url: `/users/${id}`,
                method: "GET",
            }).then((res) => {
                setUser(res.data);
            });
        } catch (e) {
        console.error(e);
        }
    }

    const getAllUsers = async () => {
        try {
            await axiosInstance({
                url: "/users",
                method: "GET",
            }).then((res) => {
                setUsers(res.data);
            });
        } catch (e) {
        console.error(e);
        }
    }

    const editUser = async (id, data) => {
        try {
            await axiosInstance({
                url: `/users/${id}`,
                method: "PATCH",
                data: data
            }).then(getAllUsers());
        } catch (e) {
        console.error(e);
        }
    }

    const deleteUser = async (id) => {
        try {
            await axiosInstance({
                url: `/users/${id}`,
                method: "DELETE",
            }).then(getAllUsers());
        } catch (e) {
        console.error(e);
        }
    }

    const createUser = async (data) => {
        try {
            await axiosInstance({
                url: `/users`,
                method: "POST",
                data: data
            }).then(getAllUsers());
        } catch (e) {
        console.error(e);
        }
    }

    return {
        getUser,
        getAllUsers,
        editUser,
        deleteUser,
        createUser,
        users,
        user,
        isAddNewUserShown,
        setIsAddNewUserShown,
        isEditUserShown,
        setIsEditUserShown
    }
}