import React, { useEffect, useState } from 'react'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomButton from "../../../components/customButton"
import { Button } from '../../../components/button'
import { IoEye } from 'react-icons/io5'
import { getUsers } from '../../../service/reservationService'
import CustomLoader from '../../../components/customLoader'
import CustomSearch from '../../../components/customSearch'
const headers = [
  {
    id: 0,
    label: "S. No."
  },
  {
    id: 1,
    label: "Name"
  },
  {
    id: 2,
    label: "Birthday Date"
  },
  {
    id: 3,
    label: "Anniversary Date"
  },
  {
    id: 4,
    label: "Phone No."
  },
  {
    id: 5,
    label: "Membership No."
  },
  // {
  //   id: 6,
  //   label: "View"
  // },
]
function UserList() {

  const [search,setSearch] = useState("")
  const [data, setData] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  const fetchUsersList = async () => {
    setIsLoader(true)
    try {
      const response = await getUsers(search)
      if (response?.statusCode === 200) {
        setData(response?.data || [])
      } else {
        setData([])
      }

    } catch (error) {
      setData([])
    } finally {
      setIsLoader(false)
    }

  }
  useEffect(() => {
    fetchUsersList()
  }, [search])


  return (

    <div>
      <div className=''><CustomSearch onChange={setSearch} value={search} /></div>
      <CustomTable headers={headers}>

        {
          isLoader ?
            <TableRow className="h-[70vh]">
              <TableCell className=" !text-center" colSpan={5}>
                <CustomLoader />
              </TableCell>

            </TableRow>
            :
            data?.length === 0 ?
              <TableRow className="h-[70vh]" >
                <TableCell className=" !text-center" colSpan={5}>
                  <span className="text-red-600 text-lg font-medium">Not Found List !</span>
                </TableCell>

              </TableRow> :
              data?.map((row, index) =>
                <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row?.name || "--"}</TableCell>
                  <TableCell>{row?.birthday_date || "--"}</TableCell>
                  <TableCell>{row?.anniversary_date || "--"}</TableCell>
                  <TableCell>
                    <a href={`tel:${row?.phone}`} className='!text-blue-500'>{row?.phone || "--"}</a>
                  </TableCell>
                  <TableCell>{row?.membership_number || "--"}</TableCell>


                  {/* <TableCell align="left">
                    <Button variant="blue">
                      <IoEye />
                    </Button>
                  </TableCell> */}
                </TableRow>
              )
        }

      </CustomTable>
    </div>
  )
}

export default UserList
