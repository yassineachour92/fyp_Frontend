import React, { useState } from 'react'
import { Table, Button, Space, Modal } from 'antd';
import './clientInfo.scss'
import axios from "axios";
import AddItem from '../AddItem/AddItem';

const columnsClient = [
    {
        title: 'Nom du fichier',
        dataIndex: 'name',
        key: 'name',
        render: text => text,
    },
    {
        title: 'Lien du fichier',
        dataIndex: 'link',
        key: 'link',
        render: text => <a>{text}</a>,
    },
];


function ClientInfo({ userType, userDetails, selectedClientInformation, setSelectedClientInformation, setSelectedClientDocuments, selectedClientDocuments, setCurrentClient, currentClient }) {
    const [isModalVisibleSelectedClient, setIsModalVisibleSelectedClient] = useState(false);
    const [modalName, setModalName] = useState("")
    const [documentId, setDocumentId] = useState()
    const showModalAddDocument = (e) => {
        setModalName(e)
        // eslint-disable-next-line no-lone-blocks
        {
            e === "add" &&
                setSelectedClientDocuments({
                    name: '',
                    link: '',
                });
        }
        setIsModalVisibleSelectedClient(true);

    }
    const handleOk = async () => {
        setIsModalVisibleSelectedClient(false);
        if (modalName === 'Modifier') {
            updateItem(documentId)
            // setCurrentClient(documentId)
            console.log("currentClient", currentClient)

        }
        if (modalName === "add") {
            console.log("setSelectedClientDocuments", selectedClientDocuments.name)

        }

    }
    const handleCancel = () => {
        setIsModalVisibleSelectedClient(false);
    };


    const columns = [
        {
            title: 'Nom du fichier',
            dataIndex: 'name',
            key: 'name',
            render: text => text,
        },
        {
            title: 'Lien du fichier',
            dataIndex: 'link',
            key: 'link',
            render: text => <a>{text}</a>,

        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <div className="clientInfo__link" onClick={() => {
                        showModalAddDocument('Modifier')
                        setDocumentId(record._id)
                        setSelectedClientDocuments({
                            name: record.name,
                            link: record.link,
                        });
                    }}>Modifier</div>

                    <div onClick={() => deleteItem(record._id)} className="clientInfo__link" >Supprimer</div>
                </Space>
            ),
        },

    ];
    const deleteItem = async (e) => {
        try {
            await axios.patch('http://localhost:5000/users/' + e,

            ).then(res => {
                // error
                setSelectedClientInformation(res.data)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const AddLink = async (e) => {
        console.log("add", currentClient)
        try {
            await axios.post('http://localhost:5000/users/' + currentClient,
                selectedClientDocuments).then(res => {
                    console.log(res.data)
                    setSelectedClientInformation(res.data)

                })
        } catch (error) {
            console.log(error)
        }
    }
    const updateItem = async (e) => {
        console.log("id_document", e)
        try {
            await axios.patch('http://localhost:5000/users/document/update/' + e,
                selectedClientDocuments
            ).then(res => {
                
                setSelectedClientInformation(res.data)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const renderDataSource = () => {
        if (userDetails && userDetails.user) {
            if ((userDetails.user.userType === "client" || userDetails.user.userType === "Client")) {
                return userDetails.user.documents
            } else if (selectedClientInformation) {
                return selectedClientInformation.documents
            }
        }
        return []
    }
    return (
        <div className="clientInfo">
            <div className="clientInfo__button">
                {userType && (userType === "client" || userType === "Client") ?
                    "" :
                    <Button type="primary" shape="round" className="clientInfo__button" onClick={() => {
                        showModalAddDocument('add')
                        AddLink("r")
                    }}>
                        Ajouter Lien
                    </Button>
                }
                <Modal title={modalName === "add" ? "Ajouter Document" : "Modifier Document"}
                    visible={isModalVisibleSelectedClient} onOk={handleOk} onCancel={handleCancel}>
                    <AddItem setSelectedClientDocuments={setSelectedClientDocuments} selectedClientDocuments={selectedClientDocuments} />
                </Modal>
            </div >
            <Table columns={userType && (userType === "client" || userType === "Client") ? columnsClient : columns}
                dataSource={renderDataSource()}
                pagination={{ pageSize: 20 }} scroll={{ y: 540 }}
            />


        </div>
    )
}

export default ClientInfo
