import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import StudentTable from './StudentTable';
import Pagination from './Pagination';
import { Student } from '../../pages/api/students/getStudents';
import { getStudents } from '../../lib/apiClient/students';

const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalStudents, setTotalStudents] = useState(0);
  const studentsPerPage = 10;

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error, count } = await getStudents(
        currentPage,
        studentsPerPage,
        searchQuery
      );
      console.log('dataaaaa', data)
      
      if (error) throw new Error(error.message);
      
      setStudents(data || []);
      setTotalStudents(count || 0);
      setTotalPages(Math.ceil((count || 0) / studentsPerPage));
    } catch (err) {
      setError('Failed to load students. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch and when dependencies change
  useEffect(() => {
    fetchStudents();
  }, [currentPage, searchQuery]);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6 px-12 mt-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-primary-900">Estudiantes</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-600"></div>
          </div>
        ) : error ? (
          <div className="p-4 text-error-700 bg-error-50 rounded-md">
            {error}
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Mostrando {students.length} de {totalStudents} alumnos
              </p>
            </div>
            
            <StudentTable students={students} onAccessUpdate={fetchStudents} />
            
            <div className="mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;