"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: FaChartBar },
    { id: "users", name: "User Management", icon: FaUsers },
    { id: "events", name: "Event Management", icon: FaCalendarAlt },
    { id: "settings", name: "Settings", icon: FaCog },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div data-theme="light" className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-white shadow-lg"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`flex items-center w-full p-4 text-left ${
                activeTab === tab.id
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-600 hover:bg-purple-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="mr-3" />
              {tab.name}
            </motion.button>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "users" && <UserManagement />}
          {activeTab === "events" && <EventManagement />}
          {activeTab === "settings" && <Settings />}
        </motion.div>
      </div>
    </div>
  );
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent: React.FC = () => {
  const stats = [
    { name: "Total Users", value: "1,234", change: "+5.2%" },
    { name: "Active Events", value: "56", change: "+2.8%" },
    { name: "Total Revenue", value: "$12,345", change: "+10.5%" },
    { name: "New Registrations", value: "78", change: "+7.1%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const monthlyUserData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Users",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const eventCategoryData = {
    labels: ["Academic", "Cultural", "Sports", "Technology"],
    datasets: [
      {
        label: "Number of Events",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-lg p-6 text-white"
          >
            <h3 className="text-lg font-semibold mb-2">{stat.name}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p
              className={`text-sm ${
                stat.change.startsWith("+") ? "text-green-300" : "text-red-300"
              }`}
            >
              {stat.change} from last month
            </p>
          </motion.div>
        ))}
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Monthly New Users</h3>
          <Line data={monthlyUserData} />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Events by Category</h3>
          <Doughnut data={eventCategoryData} />
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h3 className="text-xl font-semibold mb-4">Monthly Revenue</h3>
        <Bar data={revenueData} />
      </motion.div>

      {/* Recent Events Table */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h3 className="text-xl font-semibold mb-4">Recent Events</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Attendees</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tech Conference 2024</td>
                <td>2024-07-15</td>
                <td>250</td>
                <td>
                  <span className="badge badge-success">Upcoming</span>
                </td>
              </tr>
              <tr>
                <td>Summer Music Festival</td>
                <td>2024-08-05</td>
                <td>1000</td>
                <td>
                  <span className="badge badge-warning">Planning</span>
                </td>
              </tr>
              <tr>
                <td>Career Fair</td>
                <td>2024-09-10</td>
                <td>500</td>
                <td>
                  <span className="badge badge-info">Registration Open</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Faculty" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Admin" },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">User Management</h2>
      <div className="mb-4">
        <button className="btn btn-primary">
          <FaPlus className="mr-2" /> Add New User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-sm btn-ghost">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-ghost text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const EventManagement: React.FC = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "2024-07-15",
      location: "Main Auditorium",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Campus Music Festival",
      date: "2024-08-05",
      location: "University Grounds",
      status: "Planning",
    },
    {
      id: 3,
      title: "Career Fair 2024",
      date: "2024-09-10",
      location: "Student Center",
      status: "Approved",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Event Management</h2>
      <div className="mb-4">
        <button className="btn btn-primary">
          <FaPlus className="mr-2" /> Create New Event
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                  <span
                    className={`badge ${
                      event.status === "Upcoming"
                        ? "badge-success"
                        : event.status === "Planning"
                        ? "badge-warning"
                        : "badge-info"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-ghost">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-ghost text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: "Campus Event Hub",
    adminEmail: "admin@campuseventhub.com",
    maxEventsPerDay: 5,
    allowUserRegistration: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <form className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Site Name</span>
          </label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Admin Email</span>
          </label>
          <input
            type="email"
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Max Events Per Day</span>
          </label>
          <input
            type="number"
            name="maxEventsPerDay"
            value={settings.maxEventsPerDay}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Allow User Registration</span>
            <input
              type="checkbox"
              name="allowUserRegistration"
              checked={settings.allowUserRegistration}
              onChange={handleChange}
              className="toggle toggle-primary"
            />
          </label>
        </div>
        <div className="mt-6 space-x-3">
          <button type="submit" className="btn btn-primary">
            Save Settings
          </button>
          <a href="/" className="btn btn-outline btn-secondary">Logout</a>
        </div>
      </form>
    </motion.div>
  );
};

export default AdminPanel;
