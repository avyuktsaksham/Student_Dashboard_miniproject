import React from 'react';

function StudentList({ students, onLoadStudents, onAddStudent, onEditStudent, onDeleteStudent, onViewDetails }) {
  
  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      onDeleteStudent(id);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Result Management</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={onLoadStudents} style={buttonStyle}>
          Load Students
        </button>
        <button onClick={onAddStudent} style={buttonStyle}>
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <p>No students found. Click "Load Students" to fetch data.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Section</th>
              <th style={thStyle}>Marks</th>
              <th style={thStyle}>Grade</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={tdStyle}>{student.id}</td>
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.section}</td>
                <td style={tdStyle}>{student.marks}</td>
                <td style={tdStyle}>{student.grade}</td>
                <td style={tdStyle}>
                  <button onClick={() => onViewDetails(student)} style={actionButtonStyle}>
                    View
                  </button>
                  <button onClick={() => onEditStudent(student)} style={actionButtonStyle}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(student.id, student.name)} style={deleteButtonStyle}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Simple inline styles
const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};

const actionButtonStyle = {
  padding: '5px 10px',
  margin: '2px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
};

const deleteButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: '#f44336',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '12px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

export default StudentList;
