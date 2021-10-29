import React from 'react'
//@ts-ignore
import Pagination from 'office-ui-fabric-react-pagination';


interface Props {
    totalCount: number
    postPerPage: number
    currentPage:number
    changePage: (n: number) => void
    loading:boolean
  }

const BasePagination:React.FC<Props>=({totalCount,postPerPage,currentPage,changePage,loading}:Props) =>{

    const totalPage=Math.ceil(totalCount/postPerPage);

    if (loading) {
        return <h2>Loading...</h2>;
      }

    return (
        <Pagination
        currentPage={currentPage}
        totalPages={totalPage}
        onChange={(page:number) => changePage(page)}
    />
    )
}

export default BasePagination
