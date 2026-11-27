type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange
} : PaginationProps){
  const pages = [];
  for(let i = 1; i <= totalPages; i++){
    pages.push(i)
  }

  if (totalPages <= 1) return null;

  return(
    <nav>
      <ul>
        <li>
          <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        </li>
          {
            pages.map((p) => (
              <li>
                <button>{p}</button>
              </li>
            ))
          }
        <li>
          <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  )
}

