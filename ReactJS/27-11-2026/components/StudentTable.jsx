import type { Student } from "@/lib/types";

type SortField = "name" | "email" | "gender" | "city";

type StudentTableProps = {
  students:Student[];
  startIndex:number;
  sortField:SortField;
  sortOrder:"asc" | "desc";
  onSort:(field:SortField) => void;
  onEdit?:(student:Student) => void;
  onDelete?:(id:string) => void;
}

export default function StudentTable({
  students,
  startIndex,
  sortField,
  sortOrder,
  onSort,
  onEdit,
  onDelete
}:StudentTableProps){
  const showActions = onEdit !== undefined || onDelete !== undefined;

  function arrow(field:SortField){
    if(sortField !== field) return "";
    return sortOrder === "asc" ? "🔼" : "🔽";
  }

  const headStyle = {cursor:"pointer" , UserSelect:"none"} as const;

  return(
    <div>
      
    </div>
  )
}