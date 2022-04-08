import React from 'react';
import {List} from "antd";
import {AiOutlineSafetyCertificate} from "react-icons/all";

function CustomList({data}) {
    return (
        <List
            size={'small'}
            bordered={false}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        // avatar={<AiOutlineSafetyCertificate/>}
                        title={item.title}
                        // description={item.date}
                    />
                </List.Item>
            )}
        />
    );
}

export default CustomList;
