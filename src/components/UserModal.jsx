import { calculateAge } from "../utils/calculateAge";

function UserModal({ user, close }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50">

      {/* Backdrop */}
      <div
        onClick={close}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div
        className="
          absolute right-0 top-0
          h-full w-full sm:w-[420px]
          bg-white
          shadow-2xl
          flex flex-col
          animate-slideIn
        "
      >

        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            User Profile
          </h2>

          <button
            onClick={close}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto">

          {/* Avatar Section */}
          <div className="flex flex-col items-center text-center">
            <img
              src={user.image}
              alt={user.fullName}
              className="
                w-28 h-28
                rounded-full
                object-cover
                ring-4 ring-blue-100
              "
            />

            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {user.fullName}
            </h3>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>

          {/* Info Grid */}
          <div className="mt-6 space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-500">Phone</span>
              <span className="text-gray-800">{user.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Age</span>
              <span className="text-gray-800">
                {calculateAge(user.dob)} yrs
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Gender</span>
              <span className="text-gray-800">{user.gender}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Country</span>
              <span className="text-gray-800">{user.country}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Skills
            </h4>

            <div className="flex flex-wrap gap-2">
              {user.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    bg-blue-50
                    text-blue-600
                    text-xs
                    rounded-full
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              About
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              {user.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;