# Day 3 – Role-Based Access Control (RBAC)

## Project: IT Operations Access Control Dashboard

A role-based access management application built using HTML, CSS, JavaScript, Node.js, and Express.js.

The application provides different access levels for three user roles:

- Admin
- Supervisor
- Technician

---

## 1. Concepts Learned

### Role-Based Access Control (RBAC)

A security method that assigns permissions to users according to their roles.

### Roles

Roles define the responsibility level of users.

Examples:

- Admin
- Supervisor
- Technician

### Permissions

Permissions define which actions a user can perform.

Examples:

- view_dashboard
- view_users
- manage_users
- assign_tasks
- update_tasks
- delete_tasks

### Role and Permission Mapping

Connects roles with their assigned permissions.

### Frontend Permission Checking

Displays or hides UI elements according to the user's permissions.

### Server-Side Authorization

The backend checks user permissions before allowing access to protected APIs.

### Never Trust the Client

Frontend data cannot be trusted for security decisions. The backend must independently verify user permissions.

### HTTP Status Codes

- 401 Unauthorized: Authentication is required or invalid.
- 403 Forbidden: User is authenticated but lacks permission.

---

## 2. Permission Matrix

| Permission     | Admin | Supervisor | Technician |
| -------------- | ----- | ---------- | ---------- |
| View Dashboard | Yes   | Yes        | Yes        |
| View Users     | Yes   | Yes        | No         |
| Manage Users   | Yes   | No         | No         |
| Assign Tasks   | Yes   | Yes        | No         |
| Update Tasks   | Yes   | Yes        | Yes        |
| Delete Tasks   | Yes   | No         | No         |

---

## 3. Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Express Session

---

## 4. Project Structure

```text
RBAC-Dashboard/
│
├── server.js
├── index.html
└── README.md
```
