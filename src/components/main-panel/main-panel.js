import './main-panel.css';
import edit from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/delete.png';
import { useEffect } from 'react';
import { useMainPanelHook } from './main-panel.hook';
import { useState } from 'react';
import { TableHeader } from '../table-header/table-header';

const MainPanel = () => {
    const { getUser, getAllUsers, createUser, editUser, deleteUser, user, users, isAddNewUserShown, setIsAddNewUserShown, isEditUserShown, setIsEditUserShown } = useMainPanelHook();
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hometown, setHometown] = useState('');

    const handleAddNewUserSubmit = (e) => {
        e.preventDefault();
        const newUser = { name, age, hometown };
        createUser(newUser);
        setIsAddNewUserShown(!isAddNewUserShown);
        setName('');
        setAge('');
        setHometown('');
    }
    const handleEditUserSubmit = (e) => {
        e.preventDefault();
        const editedUser = { name, age, hometown };
        const key = user.key;
        editUser(key, editedUser);
        setIsEditUserShown(false);
        setName('');
        setAge('');
        setHometown('');
    }
    const openAddNewUserForm = () => {
        setIsAddNewUserShown(true);
    }
    const openEditUserForm = (key) => {
        setIsEditUserShown(true);
        getUser(key);
    }
    
    return(
        isAddNewUserShown ? (
            <div className='form'>
                <h2>Add User</h2>
                <form onSubmit={handleAddNewUserSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Age:</label>
                    <input 
                        type="number" 
                        required 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <label>Hometown:</label>
                    <input 
                        type="text" 
                        required 
                        value={hometown}
                        onChange={(e) => setHometown(e.target.value)}
                    />
                    <button>Add User</button>
                    <button onClick={() => setIsAddNewUserShown(false)}>Close Form</button>
                </form>
          </div>
        ) : isEditUserShown ? (
        <div className='form'>
            <h2>Edit User</h2>
            <form onSubmit={handleEditUserSubmit}>
                <label>Name:</label>
                <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Age:</label>
                <input 
                type="number" 
                required 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                <label>Hometown:</label>
                <input 
                type="text" 
                required 
                value={hometown}
                onChange={(e) => setHometown(e.target.value)}
                />
                <button>Edit User</button>
                <button onClick={() => setIsEditUserShown(false)}>Close Form</button>
            </form>
        </div>
        ) : (
            <div className="main-panel">
                <div className='header-container'>
                    <p className='text'>Students List</p>
                    <div className='add-new-student-button' onClick={() => openAddNewUserForm()}>
                        <p className='button-text'>ADD NEW STUDENT</p>
                    </div>
                </div>
                <div className='horizontal-line'/>
                <TableHeader />
                {users.map((item, index) => {
                    return (
                        <div key={index} className='list-item'>
                            <div className='list-item-data'>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                <p>{item.hometown}</p>
                            </div>
                            <div className='icon-container'>
                                <img src={edit} alt="icon" className='edit'  onClick={() => openEditUserForm(item.key)}/>
                                <img src={deleteIcon} alt="icon" className='delete' onClick={() => deleteUser(item.key)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    )
}
export default MainPanel;