import React, { useState, useEffect } from 'react';
import { Student } from '../../pages/api/students/getStudents';

interface StudentTableProps {
  students: Student[];
  onAccessUpdate: () => void;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, onAccessUpdate }) => {
  // const [courses, setCourses] = useState<Course[]>([]);
  // const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedEbooks, setSelectedEbooks] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    // const fetchData = async () => {
    //   const [coursesResponse, ebooksResponse] = await Promise.all([
    //     getCourses(),
    //     getEbooks()
    //   ]);
      
    //   if (coursesResponse.data) setCourses(coursesResponse.data);
    //   if (ebooksResponse.data) setEbooks(ebooksResponse.data);
    // };
    
    // fetchData();
  }, []);

  const openModal = (student: Student) => {
    setSelectedStudent(student);
    // setSelectedCourses(student.course_access || []);
    // setSelectedEbooks(student.ebook_access || []);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    setSelectedCourses([]);
    setSelectedEbooks([]);
    setUpdateMessage({ type: '', text: '' });
  };

  // const handleSaveAccess = async () => {
  //   if (!selectedStudent) return;
    
  //   setUpdating(true);
  //   setUpdateMessage({ type: '', text: '' });
    
  //   try {
  //     const { error } = await updateStudentAccess(
  //       selectedStudent.id,
  //       selectedCourses,
  //       selectedEbooks
  //     );
      
  //     if (error) throw error;
      
  //     setUpdateMessage({ 
  //       type: 'success', 
  //       text: 'Access updated successfully!' 
  //     });
      
  //     // Notify parent component to refresh student data
  //     onAccessUpdate();
      
  //     // Close modal after a short delay
  //     setTimeout(() => {
  //       closeModal();
  //     }, 1500);
  //   } catch (err) {
  //     setUpdateMessage({ 
  //       type: 'error', 
  //       text: 'Failed to update access. Please try again.' 
  //     });
  //   } finally {
  //     setUpdating(false);
  //   }
  // };

  // Toggle course selection
  const toggleCourse = (courseId: string) => {
    setSelectedCourses(prev => 
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  // Toggle ebook selection
  const toggleEbook = (ebookId: string) => {
    setSelectedEbooks(prev => 
      prev.includes(ebookId)
        ? prev.filter(id => id !== ebookId)
        : [...prev, ebookId]
    );
  };

  if (students.length === 0) {
    return (
      <div className="p-6 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">No students found</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre y Apellido
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Accesos
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">
                  {student.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{student.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button 
                  onClick={() => openModal(student)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-accent-700 bg-accent-100 hover:bg-accent-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Access Management Modal */}
      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeModal}></div>

            <div className="relative inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Configuración de accesos para: <span className='font-bold text-secondary'>{selectedStudent.name}</span>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {selectedStudent.email}
              </p>

              {updateMessage.text && (
                <div className={`mt-4 p-3 rounded-md ${updateMessage.type === 'success' ? 'bg-success-100 text-success-800' : 'bg-error-100 text-error-800'}`}>
                  {updateMessage.text}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Accesos</h4>
                  <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
                    {selectedStudent.content_access && selectedStudent.content_access.length > 0 ? (
                      selectedStudent.content_access.map((c) => (
                        <div key={c.content.id} className="flex items-center">
                          <input
                            id={`course-${c.content.id}`}
                            type="checkbox"
                            className="w-4 h-4 text-accent-600 border-gray-300 rounded focus:ring-accent-500"
                            checked={selectedCourses.includes(c.content.id)}
                            onChange={() => toggleCourse(c.content.id)}
                          />
                          <label htmlFor={`course-${c.content.id}`} className="ml-2 text-sm text-gray-700">
                            {c.content.title}
                          </label>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">Sin accesos</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  disabled={updating}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:opacity-50"
                  // onClick={handleSaveAccess}
                >
                  {updating ? 'Guardando' : 'Guardar Cambios'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;