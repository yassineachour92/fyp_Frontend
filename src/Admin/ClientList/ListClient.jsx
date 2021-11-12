import React, { useState, useEffect, useContext } from 'react'
import ClientInfo from '../ClientInfo/ClientInfo'
import './listClient.scss'
import { Table, Button, Space, Modal } from 'antd';
import axios from "axios";
import SignUpForm from '../SignUpForm/SignUpForm';
import SearchClient from '../Search/Search';
import { useParams } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';

function ListClient() {
    const [userDetails, setUserDetails] = useState('')
    const [data, setData] = useState([])
    const [dataCopy, setDataCopy] = useState([])
    const [selectedClientInformation, setSelectedClientInformation] = useState([])
    const [currentClient, setCurrentClient] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [password, setPassword] = useState();
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        email: '',
        phone: '',
        password: '',
    })
    const showModal = () => {
        setIsModalVisible(true);
        setUserInfo({
            firstName: '',
            email: '',
            phone: '',
            password: '',
        });
        setPasswordConfirmed('')
    };
    const [selectedClientDocuments, setSelectedClientDocuments] = useState({
        name: '',
        link: ''
    })



    const handleOk = async () => {
        try {
            if (password === passwordConfirmed) {
                setIsModalVisible(false);
                console.log("userInfo", userInfo)
                axios.post('http://localhost:5000/users/',
                    userInfo
                ).then(res => {
                    setData([...data, res.data])
                    setDataCopy([...data, res.data])
                });
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const LookingByUser = async (e) => {
        setCurrentClient(e._id);
        console.log("currentClient 123", currentClient)
        try {
            await axios.get('http://localhost:5000/users/' + e._id,

            ).then(res => {
                setSelectedClientInformation(res.data)
            });
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/users`)
            .then(res => {
                console.log("data", res.data)
                setData(res.data);
                setDataCopy(res.data)

            })
        axios.get(`http://localhost:5000/users/me`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setUserDetails(res.data);
            })
    }, [])

    const renderElement = () => {
        if (Object.entries(userDetails).length === 0) {
            return ('')
        }
        if (userDetails && userDetails.user && (userDetails.user.userType === "admin" || userDetails.user.userType === "Admin")) {
            return (
                <>
                    <div className="listClient__clientName">
                        <div className="addClient">
                            <SearchClient data={data} setData={setData} setDataCopy={setDataCopy} dataCopy={dataCopy} />
                            <Button type="primary" shape="round" className="listClient__button" onClick={showModal}>
                                +
                            </Button>
                        </div>
                        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <SignUpForm setUserInfo={setUserInfo} userInfo={userInfo} password={password} passwordConfirmed={passwordConfirmed} setPassword={setPassword} setPasswordConfirmed={setPasswordConfirmed} />
                        </Modal>
                        <div className="listClient__allClientName">
                            {data.map((e) =>
                                <div onClick={() => LookingByUser(e)} className="listClient__firstName" className={currentClient == e._id && "currentClient"}>{e.firstName} </div>
                            )}
                        </div>



                    </div>
                    <div className="listClient__clientInfo">
                        <h1>
                            <ClientInfo userType={'admin'} userDetails={userDetails} selectedClientInformation={selectedClientInformation} setSelectedClientInformation={setSelectedClientInformation} setSelectedClientDocuments={setSelectedClientDocuments} selectedClientDocuments={selectedClientDocuments} setCurrentClient={setCurrentClient} currentClient={currentClient} />
                        </h1>
                    </div>
                </>
            )
        }
        if (userDetails && userDetails && (userDetails.userType === "client" || userDetails.userType === "Client")) {
            return <div className="listClient__clientInfo">
                <h1>
                    <ClientInfo userType={'client'} userDetails={userDetails} selectedClientInformation={selectedClientInformation} setSelectedClientDocuments={setSelectedClientDocuments} selectedClientDocuments />
                </h1>
            </div>
        }
    }


    return (
        <div className="listClient">
            {renderElement()}
        </div>
    )
}

export default ListClient
