import React from 'react'
import 'antd/dist/antd.css';
 import './search.scss';
import { Input, Space } from 'antd';
function SearchClient({ data, setData, setDataCopy, dataCopy }) {
    const { Search } = Input;



    const onSearch = (value) => {
        console.log(value.target.value);
        const b = data;
        const a = dataCopy.filter((e) => {
            return e.firstName.includes(value.target.value)
        }

        )
        console.log(a)
        return setData(a)

    }
    return (
        <div className="search">
            <Space >
                <Input placeholder="input search text" className="search__input" onChange={onSearch} />

            </Space>
            <img src="search.png" alt="" className="search__photo"/>

        </div>
    )
}

export default SearchClient
