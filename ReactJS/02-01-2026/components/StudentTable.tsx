import type { Student } from "@/lib/types";

type SortField = "name" | "email" | "gender" | "city";

type StudentTableProps = {
  students: Student[];
  startIndex: number;
  sortField: SortField;
  sortOrder: "asc" | "desc";
  onSort: (field: SortField) => void;
  onEdit?: (student: Student) => void;
  onDelete?: (id: string) => void;
};

export default function StudentTable({
  students,
  startIndex,
  sortField,
  sortOrder,
  onSort,
  onEdit,
  onDelete,
}: StudentTableProps) {
  const showActions = onEdit !== undefined || onDelete !== undefined;

  // Show an arrow next to the column that is currently sorted
  function arrow(field: SortField) {
    if (sortField !== field) return "";
    return sortOrder === "asc" ? " ▲" : " ▼";
  }

  const headStyle = { cursor: "pointer", userSelect: "none" } as const;

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle bg-white">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th style={headStyle} onClick={() => onSort("name")}>Name{arrow("name")}</th>
            <th style={headStyle} onClick={() => onSort("email")}>Email{arrow("email")}</th>
            <th>Phone</th>
            <th style={headStyle} onClick={() => onSort("gender")}>Gender{arrow("gender")}</th>
            <th>Hobbies</th>
            <th style={headStyle} onClick={() => onSort("city")}>City{arrow("city")}</th>
            {showActions && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={showActions ? 8 : 7} className="text-center text-muted py-4">
                No students found.
              </td>
            </tr>
          ) : (
            students.map((s, index) => (
              <tr key={s.id}>
                <td>{startIndex + index + 1}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.phone}</td>
                <td>{s.gender}</td>
                <td>{s.hobbies.join(", ")}</td>
                <td>{s.city}</td>
                {showActions && (
                  <td>
                    {onEdit && (
                      <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(s)}>
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button className="btn btn-sm btn-danger" onClick={() => onDelete(s.id)}>
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
