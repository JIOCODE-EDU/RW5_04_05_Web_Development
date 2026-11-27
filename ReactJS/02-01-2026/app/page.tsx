"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import StudentForm from "@/components/StudentForm";
import StudentTable from "@/components/StudentTable";
import { isStudent, type Student } from "@/lib/types";

type SortField = "name" | "email" | "gender" | "city";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const loadStudents = useCallback(async () => {
    setLoadError("");
    try {
      const response = await fetch("/api/students", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Could not load students.");
      }

      const data: unknown = await response.json();
      if (!Array.isArray(data) || !data.every(isStudent)) {
        throw new Error("The students response was invalid.");
      }

      setStudents(data);
    } catch (error) {
      setLoadError(
        error instanceof Error ? error.message : "Could not load students.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStudents();
  }, [loadStudents]);

  const visibleStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return students
      .filter((student) =>
        [
          student.name,
          student.email,
          student.phone,
          student.gender,
          student.city,
          student.hobbies.join(" "),
        ].some((value) => value.toLowerCase().includes(query)),
      )
      .sort((a, b) => {
        const comparison = a[sortField].localeCompare(b[sortField]);
        return sortOrder === "asc" ? comparison : -comparison;
      });
  }, [search, sortField, sortOrder, students]);

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortOrder((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }
    setSortField(field);
    setSortOrder("asc");
  }

  return (
    <main className="container py-5">
      <h1 className="text-center mb-4">Student Dashboard</h1>
      <div className="row g-4">
        <section className="col-lg-4" aria-labelledby="add-student-heading">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 id="add-student-heading" className="h4 mb-4">Add a Student</h2>
              <StudentForm onStudentAdded={loadStudents} />
            </div>
          </div>
        </section>

        <section className="col-lg-8" aria-labelledby="students-heading">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h2 id="students-heading" className="h4 mb-0">
              Students <span className="badge text-bg-secondary">{students.length}</span>
            </h2>
            <input
              type="search"
              className="form-control"
              style={{ maxWidth: "320px" }}
              aria-label="Search students"
              placeholder="Search students..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          {loadError && (
            <div className="alert alert-danger" role="alert">
              {loadError}{" "}
              <button type="button" className="btn btn-sm btn-outline-danger ms-2" onClick={() => void loadStudents()}>
                Try again
              </button>
            </div>
          )}

          {loading ? (
            <p role="status">Loading students...</p>
          ) : (
            <>
              <StudentTable
                students={visibleStudents}
                startIndex={0}
                sortField={sortField}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
              <p className="text-muted small mb-0">
                Showing {visibleStudents.length} of {students.length} student(s).
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
