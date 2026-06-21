import { calculateAge } from "../utils/calculateAge";

function UserCard({ user, openModal }) {
  return (
    <div
      onClick={() => openModal(user)}
      className="
        group
        bg-white/80
        backdrop-blur-md
        border
        border-gray-100
        rounded-2xl
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        cursor-pointer
        overflow-hidden
      "
    >
      {/* Top Section */}
      <div className="p-5 flex flex-col items-center text-center">
        
        {/* Avatar */}
        <div className="relative">
          <img
            src={
              user.image ||
              "https://via.placeholder.com/150"
            }
            alt={user.fullName}
            className="
              h-24 w-24
              rounded-full
              object-cover
              ring-4 ring-blue-100
              group-hover:ring-blue-300
              transition
            "
          />
        </div>

        {/* Name */}
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {user.fullName}
        </h3>

        {/* Email */}
        <p className="text-sm text-gray-500 truncate w-full">
          {user.email}
        </p>

        {/* Meta Info */}
        <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
          <span className="px-2 py-1 bg-gray-100 rounded-full">
            {calculateAge(user.dob)} yrs
          </span>

          <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
            {user.gender}
          </span>
        </div>

        {/* Country */}
        <p className="mt-2 text-xs text-gray-400">
          {user.country}
        </p>
      </div>

      {/* Hover Footer */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

export default UserCard;