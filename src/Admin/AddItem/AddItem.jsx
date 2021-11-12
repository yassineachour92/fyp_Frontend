import React from 'react'
import { Input } from 'antd';

function AddItem({setSelectedClientDocuments,selectedClientDocuments}) {
    return (
        <div className="addItem">
            <Input placeholder="name of Document"  value={selectedClientDocuments.name}
                onChange={e => setSelectedClientDocuments({ ...selectedClientDocuments, name: e.target.value })}
            />
              <Input placeholder="Link of Document" value={selectedClientDocuments.link}
                onChange={e => setSelectedClientDocuments({ ...selectedClientDocuments, link: e.target.value })}
            />
        </div>
    )
}

export default AddItem
