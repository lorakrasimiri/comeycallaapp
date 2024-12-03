// src/components/TableRow.js
import React from "react";

function TableRow({ row }) {
    return (
        <tr>
            {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
        </tr>
    );
}

export default TableRow;
