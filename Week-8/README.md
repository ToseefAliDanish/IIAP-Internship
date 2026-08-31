# Airport Issue Management System (IIAP IMS) — Detailed Technical Report

## 1. Executive Summary & Core Concepts

The Airport Issue Management System (IIAP IMS) is a robust, role-based platform built for Islamabad International Airport to manage operational issues, maintenance tickets, and staff workflows from a single interface[cite: 1].

- **Role-Based Access Control (RBAC):** Restricts system permissions based on user roles, including System Admins, Management, Department Supervisors, and Staff members[cite: 1].
- **Dual-View Dashboards:** Adapts to user privileges, showing a global overview of all airport issues for admins and managers, while locking supervisors into department-specific views[cite: 1].
- **Issue Tracking Lifecycle:** Tracks tickets from creation (`new`), through staff assignment and processing (`in_progress`), to final verification and resolution (`fixed`/`closed`)[cite: 1].
- **SLA & Background Monitoring:** Uses automated cron routines in the background to monitor resolution deadlines and flag service-level agreement breaches[cite: 1].

---

## 2. Tech Stack, Frameworks & Libraries Used

### Languages & Backend Runtime

- **JavaScript (ES6+)**[cite: 1] — Handles both frontend interactivity and backend server logic.
- **Node.js**[cite: 1] — Serves as the asynchronous runtime environment executing server-side API routes and background cron jobs.

### Frameworks & Architecture

- **Next.js (Pages Router)**[cite: 1] — Full-stack React framework providing file-system routing, built-in API endpoints, and server-side rendering (`getServerSideProps`).
- **React.js**[cite: 1] — Component-driven library used to build the responsive user interface.

### UI, Styling & Data Visualization

- **Tailwind CSS**[cite: 1] — Utility-first framework providing clean, responsive styling across all pages.
- **Recharts**[cite: 1] — Charting library powering the dynamic visual analytics, displaying side-by-side comparative bars for reported versus resolved issues[cite: 1].

### Authentication, Security & Database

- **jsonwebtoken (JWT)**[cite: 1] — Manages secure, stateless token authentication stored via browser cookies.
- **mysql2/promise**[cite: 1] — Asynchronous promise-based connector for executing database queries.
- **MySQL Database**[cite: 1] — Relational database storing all departments, users, issues, comments, and role structures.
- **WampServer / Node HTTP Server**[cite: 1] — Local environment hosting the application and database during runtime.
