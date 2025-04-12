// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Teacher = () => {
//   const navigate = useNavigate();
//   const [showEvents, setShowEvents] = useState(false);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("events") || "[]");
//     setEvents(saved);
//   }, []);

//   const dashboardCards = [
//     { label: "Attendance Record", path: "/attendance-record", color: "#007bff" },
//     { label: "Attendance Percentage", path: "/attendance-percentage", color: "#28a745" },
//     { label: "Assignments", path: "/assignments", color: "#ffc107" },
//     { label: "View Event Submissions", action: () => setShowEvents(!showEvents), color: "#17a2b8" },
//   ];

//   return (
//     <div
//       style={{
//         width: "90%",
//         margin: "40px auto",
//         textAlign: "center",
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//         color: "white",
//         padding: "40px",
//         borderRadius: "10px",
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       <h2 style={{ fontSize: "28px", marginBottom: "30px", fontWeight: "bold" }}>Teacher Dashboard</h2>

//       {/* Dashboard Cards */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         {dashboardCards.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               background: item.color,
//               color: "white",
//               padding: "20px",
//               borderRadius: "10px",
//               boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//               cursor: "pointer",
//               width: "220px",
//               textAlign: "center",
//               transition: "transform 0.3s ease, background 0.3s ease",
//             }}
//             onClick={() => (item.path ? navigate(item.path) : item.action())}
//             onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//             onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             <h5 style={{ fontSize: "18px", fontWeight: "600" }}>{item.label}</h5>
//           </div>
//         ))}
//       </div>

//       {/* Event Submissions Section (Card UI) */}
//       {showEvents && (
//         <div
//           style={{
//             marginTop: "40px",
//             background: "#ffffff",
//             color: "#333",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
//             overflowX: "auto",
//           }}
//         >
//           <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>📋 Submitted Events</h3>
//           {events.length === 0 ? (
//             <p>No events submitted yet.</p>
//           ) : (
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr style={{ background: "#eee", color: "#000" }}>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Event</th>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Organizer</th>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Place</th>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Level</th>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Type</th>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Dates</th>
//                   <th style={{ padding: "8px", border: "1px solid #ccc" }}>Academic Year</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.map((e, index) => (
//                   <tr key={index}>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.eventName}</td>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.organizerName}</td>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.eventPlace}</td>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.eventLevel}</td>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.eventType}</td>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.fromDate} - {e.toDate}</td>
//                     <td style={{ padding: "8px", border: "1px solid #ccc" }}>{e.academicYear}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Teacher;












import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const dashboardItems = [
    { label: "Attendance Record", path: "/attendance-record", color: "#007bff" },
    { label: "Attendance Percentage", path: "/attendance-percentage", color: "#28a745" },
    { label: "Assignments", path: "/assignments", color: "#ffc107" },
    { label: "View Event Submissions", path: "/view-event-submissions", color: "#17a2b8" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#f4f4f9",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        border: "2px solid #ccc",
      }}
    >
      <h2
        style={{
          color: "#333",
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        👩‍🏫 Teacher Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.path)}
            style={{
              backgroundColor: item.color,
              color: "#fff",
              padding: "25px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
