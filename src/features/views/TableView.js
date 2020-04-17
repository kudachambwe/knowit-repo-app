import React from 'react'; 
import '../../assets/styles/main.scss'; 

import {
    _formatNameCell,
    _formatCreatedCell,
    _formatTextIconCell,
    _formatURLCell,
    parseLargeNumber
} from '../../utils';


export const TableView = ({ data, headerLabels }) => {

    const renderTableHeader = () => {
        return headerLabels.map((item, index) => {
            return (
                <th key={index}>
                    {item}
                </th>
            )
        })
    }; 

    const renderTableData = () => {
        return data.map((item, index) => {
            const { name, full_name, owner, created_at, stargazers_count, forks, watchers_count, size, license = '', html_url } = item; 
                return (
                    <tr key={index}>
                        <td>{_formatNameCell(owner['avatar_url'], name, full_name)}</td>
                        <td>{_formatCreatedCell(created_at)}</td>
                        <td>{_formatTextIconCell(parseLargeNumber(stargazers_count), "star")}</td>
                        <td>{parseLargeNumber(forks)}</td>
                        <td>{_formatTextIconCell(parseLargeNumber(watchers_count), "eye")}</td>
                        <td>{parseLargeNumber(size)}</td>
                        <td>{license ? license['name'] : "N/A"}</td>
                        <td>{_formatURLCell(html_url)}</td>
                    </tr>
                )
            })
    }; 

    return (
        <div className='center large-pd overflow-auto'>
            <table className='box-shadow'>
                <tbody>
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
                </tbody>
            </table>
        </div>
    ); 
}

export default TableView; 