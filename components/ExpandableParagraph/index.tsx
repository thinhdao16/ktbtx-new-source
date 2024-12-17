import React, { useState } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const ExpandableParagraph = ({
    text,
    rows,
    className = '',
    copyable = false
}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Paragraph
            className={`${className}`}
            ellipsis={{
                rows: rows,
                expandable: 'collapsible',
                expanded,
                onExpand: (_, info) => setExpanded(info.expanded),
                symbol: expanded ? 'Ẩn' : 'Xem thêm',
            }}
            copyable={copyable}
        >
            {text}
        </Paragraph>
    );
};

export default ExpandableParagraph;
