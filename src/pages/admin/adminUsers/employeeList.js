import { RiHandCoinFill } from 'react-icons/ri'
import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import { FiEdit } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
function EmployeeList() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "Enrol. Id"
        },
        {
            id: 3,
            label: "Name"
        },

        {
            id: 4,
            label: "Email"
        },
        {
            id: 5,
            label: "Contact"
        },

        {
            id: 6,
            label: "City"
        },
        {
            id: 7,
            label: "District"
        },
        {
            id: 8,
            label: "R/W No."
        },
        {
            id: 9,
            label: "Balance"
        },

        {
            id: 10,
            label: "Refno"
        },
        {
            id: 11,
            label: "Status"
        },
        

    ]
    return (
        <div>
            <CustomTable isFilter headers={headers}>

                {
                    [1, 2, 3, 4, 5, 6]?.map((row, index) =>
                        <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>ram</TableCell>

                            <TableCell>ram@gmail.com</TableCell>
                            <TableCell align="left">123</TableCell>



                            <TableCell align="left">23</TableCell>
                            <TableCell align="left">2342 </TableCell>
                            <TableCell align="left">Hello sir</TableCell>
                            <TableCell align="left">Hello sir</TableCell>
                            <TableCell align="left">Hello sir</TableCell>
                            <TableCell align="left">
                                <Button variant="blue">Pending</Button>
                            </TableCell>
                           
                            <TableCell align="left">
                                active
                            </TableCell>
                            
                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default EmployeeList
