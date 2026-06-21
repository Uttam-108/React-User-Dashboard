function SearchFilterBar({
  search,
  setSearch,
  gender,
  setGender,
  country,
  setCountry,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full">

      {/* Search Input */}
      <div className="flex-1">
        <input
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-gray-200
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            transition
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">

        {/* Gender */}
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="
            px-3
            py-2
            rounded-xl
            border
            border-gray-200
            bg-white
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
          "
        >
          <option value="">All Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Country */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="
            px-3
            py-2
            rounded-xl
            border
            border-gray-200
            bg-white
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
          "
        >
          <option value="">All Countries</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            px-3
            py-2
            rounded-xl
            border
            border-gray-200
            bg-white
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
          "
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="date">Newest First</option>
        </select>

        {/* Clear Button (NEW UX UPGRADE) */}
        {(search || gender || country || sort) && (
          <button
            onClick={() => {
              setSearch("");
              setGender("");
              setCountry("");
              setSort("");
            }}
            className="
              px-4 py-2
              rounded-xl
              bg-red-50
              text-red-600
              text-sm
              hover:bg-red-100
              transition
            "
          >
            Clear
          </button>
        )}

      </div>
    </div>
  );
}

export default SearchFilterBar;