// src/components/TableHeader.js
import React from "react";

function TableHeader({ headers, onSort }) {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index} onClick={() => onSort(header.field)}>
                        {header.label} {header.isSorted && "🔼"}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
