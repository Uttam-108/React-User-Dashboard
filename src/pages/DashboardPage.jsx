import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

import UserCard from "../components/UserCard";
import UserModal from "../components/UserModal";
import SearchFilterBar from "../components/SearchFilterBar";

function DashboardPage() {
  const { users } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [sort, setSort] = useState("");

  let filtered = [...users];

  filtered = filtered.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (gender) {
    filtered = filtered.filter((user) => user.gender === gender);
  }

  if (country) {
    filtered = filtered.filter((user) => user.country === country);
  }

  if (sort === "name") {
    filtered.sort((a, b) =>
      a.fullName.localeCompare(b.fullName)
    );
  }

  if (sort === "date") {
    filtered.sort(
      (a, b) => new Date(b.submittedAt) - new Date(a.submittedAt)
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          User Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage, search and explore registered users
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto">

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-md border border-white shadow-sm rounded-2xl p-4">
          <SearchFilterBar
            search={search}
            setSearch={setSearch}
            gender={gender}
            setGender={setGender}
            country={country}
            setCountry={setCountry}
            sort={sort}
            setSort={setSort}
          />
        </div>

        {/* Stats Bar (NEW UX IMPROVEMENT) */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filtered.length}
            </span>{" "}
            users
          </p>
        </div>

        {/* Grid */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((user, index) => (
              <div
                key={index}
                className="transform hover:-translate-y-1 transition duration-200"
              >
                <UserCard user={user} openModal={setSelectedUser} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">
                No users found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <UserModal
        user={selectedUser}
        close={() => setSelectedUser(null)}
      />
    </div>
  );
}

export default DashboardPage;