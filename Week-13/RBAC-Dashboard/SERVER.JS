const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "replace-this-with-a-long-random-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    }
  })
);

// Demo users
const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "supervisor", password: "super123", role: "supervisor" },
  { id: 3, username: "technician", password: "tech123", role: "technician" }
];

// Permissions
const permissions = {
  admin: [
    "view_dashboard",
    "view_users",
    "manage_users",
    "assign_tasks",
    "update_tasks",
    "delete_tasks"
  ],

  supervisor: [
    "view_dashboard",
    "view_users",
    "assign_tasks",
    "update_tasks"
  ],

  technician: [
    "view_dashboard",
    "update_tasks"
  ]
};

// Demo tasks
const tasks = [
  { id: 1, title: "Network Troubleshooting", status: "Pending" },
  { id: 2, title: "Printer Maintenance", status: "Completed" },
  { id: 3, title: "System Installation", status: "Pending" }
];

// Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password"
    });
  }

  req.session.user = {
    id: user.id,
    username: user.username,
    role: user.role
  };

  res.json({
    message: "Login successful"
  });
});

// Authentication middleware
function authenticate(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({
      message: "Please login first"
    });
  }

  next();
}

// Authorization middleware
function authorize(permission) {
  return (req, res, next) => {
    const role = req.session.user.role;

    if (!permissions[role]?.includes(permission)) {
      return res.status(403).json({
        message: "Access denied. Permission not allowed."
      });
    }

    next();
  };
}

// Get logged-in user
app.get("/api/me", authenticate, (req, res) => {
  const user = req.session.user;

  res.json({
    username: user.username,
    role: user.role,
    permissions: permissions[user.role]
  });
});

// Dashboard
app.get(
  "/api/dashboard",
  authenticate,
  authorize("view_dashboard"),
  (req, res) => {
    res.json({
      message: "Dashboard data loaded successfully",
      totalTasks: tasks.length
    });
  }
);

// View users
app.get(
  "/api/users",
  authenticate,
  authorize("view_users"),
  (req, res) => {
    res.json(
      users.map(({ password, ...user }) => user)
    );
  }
);

// Manage users (Admin only)
app.post(
  "/api/users",
  authenticate,
  authorize("manage_users"),
  (req, res) => {
    res.json({
      message: "User management permission verified"
    });
  }
);

// Assign tasks
app.post(
  "/api/tasks/assign",
  authenticate,
  authorize("assign_tasks"),
  (req, res) => {
    res.json({
      message: "Task assigned successfully"
    });
  }
);

// Update task
app.patch(
  "/api/tasks/:id",
  authenticate,
  authorize("update_tasks"),
  (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.status = req.body.status;

    res.json({
      message: "Task updated successfully",
      task
    });
  }
);

// Delete task
app.delete(
  "/api/tasks/:id",
  authenticate,
  authorize("delete_tasks"),
  (req, res) => {
    res.json({
      message: "Task deleted successfully"
    });
  }
);

// Logout
app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully" });
  });
});

// Frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});