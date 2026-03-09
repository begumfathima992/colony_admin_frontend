// import { TableCell, TableRow } from "@mui/material"
// import { CustomTable } from "../../../components/customTable"
// import { Button } from "../../../components/button"
// import { FiEdit } from "react-icons/fi"
// import { getReservation } from "../../../service/reservationService"
// import { useEffect, useState } from "react"
// import CustomLoader from "../../../components/customLoader"
// import CustomSearch from "../../../components/customSearch"
// import { IoEye } from "react-icons/io5"

// const headers = [
//     {
//         id: 0,
//         label: "S. No."
//     },
//     {
//         id: 1,
//         label: "Customer"
//     },
//     {
//         id: 2,
//         label: "Phone"
//     },
//     {
//         id: 3,
//         label: "Booking Date"
//     },

//     {
//         id: 4,
//         label: "Booking Time"
//     },


//     {
//         id: 5,
//         label: "Party Size"
//     },

//     {
//         id: 6,
//         label: "Booking Status"
//     },
//     {
//         id: 7,
//         label: "View"
//     }
// ]

// const ReservationList = () => {
//     const [search, setSearch] = useState("")
//     const [data, setData] = useState([])
//     const [isLoader, setIsLoader] = useState(false)

//     const fetchReservationList = async () => {
//         setIsLoader(true)
//         try {
//             const response = await getReservation(search)
//             if (response?.statusCode == 200) {
//                 setData(response?.data || [])
//             } else {
//                 setData([])
//             }

//         } catch (error) {
//             setData([])
//         } finally {
//             setIsLoader(false)
//         }

//     }
//     useEffect(() => {
//         fetchReservationList()
//     }, [search])


//     return (
//         <>
//             <div>
//                 <div className=''><CustomSearch onChange={setSearch} value={search} /></div>

//                 <CustomTable headers={headers}>

//                     {
//                         isLoader ?
//                             <TableRow className="h-[70vh]">
//                                 <TableCell className=" !text-center" colSpan={8}>
//                                     <CustomLoader />
//                                 </TableCell>

//                             </TableRow>
//                             :
//                             data?.length == 0 ?
//                                 <TableRow className="h-[70vh]" >
//                                     <TableCell className=" !text-center" colSpan={8}>
//                                         <span className="text-red-600 text-lg font-medium">Not Found List !</span>
//                                     </TableCell>

//                                 </TableRow> :
//                                 data?.map((row, index) =>
//                                     <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
//                                         <TableCell>{index + 1}</TableCell>


//                                         <TableCell>{row?.name || "--"}</TableCell>
//                                         <TableCell>
//                                             <a href={`tel:${row?.phone}`} className='!text-blue-500'>{row?.phone || "--"}</a>
//                                         </TableCell>
//                                         <TableCell>{row?.date || "--"}</TableCell>
//                                         <TableCell>{row?.time || "--"}</TableCell>
//                                         <TableCell>{row?.partySize || "--"}</TableCell>







//                                         <TableCell align="left">
//                                             <Button variant={row?.status == "PENDING" ? "pending" : "success"}>{row?.status}</Button>
//                                         </TableCell>
//                                         <TableCell align="left">
//                                             <Button variant="blue">
//                                                 <IoEye />
//                                             </Button>
//                                         </TableCell>




//                                     </TableRow>
//                                 )
//                     }

//                 </CustomTable></div>
//         </>
//     )
// }

// export default ReservationList
/////////2


// import { TableCell, TableRow } from "@mui/material"
// import { CustomTable } from "../../../components/customTable"
// import { Button } from "../../../components/button"
// import { getReservation } from "../../../service/reservationService"
// import { useEffect, useState } from "react"
// import CustomLoader from "../../../components/customLoader"
// import CustomSearch from "../../../components/customSearch"
// import { IoEye } from "react-icons/io5"

// const headers = [
//     { id: 0, label: "S. No." },
//     { id: 1, label: "Customer" },
//     { id: 2, label: "Phone" },
//     { id: 3, label: "Booking Date" },
//     { id: 4, label: "Booking Time" },
//     { id: 5, label: "Party Size" },
//     { id: 6, label: "Dietary (User)" }, // New Column
//     { id: 7, label: "Dietary (Party)" }, // New Column
//     { id: 8, label: "Special Notes" },   // New Column
//     { id: 9, label: "Status" },
//     { id: 10, label: "View" }
// ]

// const ReservationList = () => {
//     const [search, setSearch] = useState("")
//     const [data, setData] = useState([])
//     const [isLoader, setIsLoader] = useState(false)

//     const fetchReservationList = async () => {
//         setIsLoader(true)
//         try {
//             const response = await getReservation(search)
//             if (response?.statusCode === 200) {
//                 setData(response?.data || [])
//             } else {
//                 setData([])
//             }
//         } catch (error) {
//             setData([])
//         } finally {
//             setIsLoader(false)
//         }
//     }

//     useEffect(() => {
//         fetchReservationList()
//     }, [search])

//     // Helper function to convert dietary objects {Vegan: true, Halal: false} into "Vegan"
//     const formatDietary = (dietaryObj) => {
//         if (!dietaryObj) return "--";
//         const selected = Object.keys(dietaryObj).filter(key => dietaryObj[key] === true && key !== "None");
//         return selected.length > 0 ? selected.join(", ") : "None";
//     }

//     return (
//         <>
//             <div>
//                 <div className='mb-4'><CustomSearch onChange={setSearch} value={search} /></div>

//                 <CustomTable headers={headers}>
//                     {isLoader ? (
//                         <TableRow className="h-[70vh]">
//                             <TableCell className=" !text-center" colSpan={11}>
//                                 <CustomLoader />
//                             </TableCell>
//                         </TableRow>
//                     ) : data?.length === 0 ? (
//                         <TableRow className="h-[70vh]" >
//                             <TableCell className=" !text-center" colSpan={11}>
//                                 <span className="text-red-600 text-lg font-medium">Not Found List !</span>
//                             </TableCell>
//                         </TableRow>
//                     ) : (
//                         data?.map((row, index) => (
//                             <TableRow key={row.id} className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative !border-gray-300'>
//                                 <TableCell>{index + 1}</TableCell>
//                                 <TableCell>{row?.name || "--"}</TableCell>
//                                 <TableCell>
//                                     <a href={`tel:${row?.phone}`} className='!text-blue-500 hover:underline'>{row?.phone || "--"}</a>
//                                 </TableCell>
//                                 <TableCell>{row?.date || "--"}</TableCell>
//                                 <TableCell>{row?.time || "--"}</TableCell>
//                                 <TableCell>{row?.partySize || "--"}</TableCell>

//                                 {/* New Dietary and Notes Cells */}
//                                 <TableCell>{formatDietary(row?.userDietary)}</TableCell>
//                                 <TableCell>{formatDietary(row?.userDietaryByParty)}</TableCell>
//                                 <TableCell>
//                                     <div className="max-w-[150px] truncate" title={row?.userNotes}>
//                                         {row?.userNotes || "--"}
//                                     </div>
//                                 </TableCell>

//                                 <TableCell align="left">
//                                     <Button variant={row?.status === "PENDING" ? "pending" : "success"}>
//                                         {row?.status}
//                                     </Button>
//                                 </TableCell>
//                                 <TableCell align="left">
//                                     <Button variant="blue">
//                                         <IoEye />
//                                     </Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     )}
//                 </CustomTable>
//             </div>
//         </>
//     )
// }

// export default ReservationList;


//////////3
import { TableCell, TableRow, Tabs, Tab, Box } from "@mui/material"
import { CustomTable } from "../../../components/customTable"
import { Button } from "../../../components/button"
import { getReservation, getCancelReservation } from "../../../service/reservationService"
import { useEffect, useState } from "react"
import CustomLoader from "../../../components/customLoader"
import CustomSearch from "../../../components/customSearch"
import { IoEye } from "react-icons/io5"

const headers = [
    { id: 0, label: "S. No." },
    { id: 1, label: "Customer" },
    { id: 2, label: "Phone" },
    { id: 3, label: "Booking Date" },
    { id: 4, label: "Booking Time" },
    { id: 5, label: "Party Size" },
    { id: 6, label: "Dietary (User)" },
    { id: 7, label: "Dietary (Party)" },
    { id: 8, label: "Special Notes" },
    { id: 9, label: "Status" },
    { id: 10, label: "View" }
]

const ReservationList = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    const [currentTab, setCurrentTab] = useState(0) // 0 for Active, 1 for Cancelled

    const fetchReservationList = async () => {
        setIsLoader(true)
        try {
            // Check which API to call based on the selected tab
            const response = currentTab === 0 
                ? await getReservation(search) 
                : await getCancelReservation(search);

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
        fetchReservationList()
    }, [search, currentTab]) // Re-fetch when tab changes

    const formatDietary = (dietaryObj) => {
        if (!dietaryObj) return "--";
        const selected = Object.keys(dietaryObj).filter(key => dietaryObj[key] === true && key !== "None");
        return selected.length > 0 ? selected.join(", ") : "None";
    }

    return (
        <>
            <div className="p-4">
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)}>
                        <Tab label="Active Reservations" />
                        <Tab label="Cancelled Reservations" />
                    </Tabs>
                </Box>

                <div className='mb-4'><CustomSearch onChange={setSearch} value={search} /></div>

                <CustomTable headers={headers}>
                    {isLoader ? (
                        <TableRow className="h-[70vh]">
                            <TableCell className=" !text-center" colSpan={11}>
                                <CustomLoader />
                            </TableCell>
                        </TableRow>
                    ) : data?.length === 0 ? (
                        <TableRow className="h-[70vh]" >
                            <TableCell className=" !text-center" colSpan={11}>
                                <span className="text-red-600 text-lg font-medium">No Reservations Found!</span>
                            </TableCell>
                        </TableRow>
                    ) : (
                        data?.map((row, index) => (
                            <TableRow 
                                key={row.id} 
                                className={`!border-l-2 !mb-2 !relative !border-gray-300 ${currentTab === 1 ? '!bg-red-50' : '!bg-[#EBE9FD]'}`}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row?.name || "--"}</TableCell>
                                <TableCell>
                                    <a href={`tel:${row?.phone}`} className='!text-blue-500 hover:underline'>{row?.phone || "--"}</a>
                                </TableCell>
                                <TableCell>{row?.date || "--"}</TableCell>
                                <TableCell>{row?.time || "--"}</TableCell>
                                <TableCell>{row?.partySize || "--"}</TableCell>

                                <TableCell>{formatDietary(row?.userDietary)}</TableCell>
                                <TableCell>{formatDietary(row?.userDietaryByParty)}</TableCell>
                                <TableCell>
                                    <div className="max-w-[150px] truncate" title={row?.userNotes}>
                                        {row?.userNotes || "--"}
                                    </div>
                                </TableCell>

                                <TableCell align="left">
                                    {/* If on Cancelled tab, always show CANCELLED badge */}
                                    {currentTab === 1 || row?.reservationCancel ? (
                                        <Button className="!bg-red-600 !text-white !cursor-default">CANCELLED</Button>
                                    ) : (
                                        <Button variant={row?.status === "PENDING" ? "pending" : "success"}>
                                            {row?.status}
                                        </Button>
                                    )}
                                </TableCell>
                                
                                <TableCell align="left">
                                    <Button variant="blue">
                                        <IoEye />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </CustomTable>
            </div>
        </>
    )
}

export default ReservationList;