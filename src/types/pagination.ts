//Sayfalama için kullanacağım Model
interface PaginationModel{
    currentPage:number;
    postPerPage:number;
    indexOfLastPost:number;
    indexOfFirstPost:number;
}

export default PaginationModel;