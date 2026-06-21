import React, { useState } from "react";

const ProfileImageUploader = ({ register }) => {
  const [preview, setPreview] = useState(null);

  const profileImageField = register("profileImage");

  return (
    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-4">Profile Photo</h3>

      <label
        htmlFor="profileImage"
        className="
          h-64
          border-2
          border-dashed
          border-gray-300
          rounded-2xl
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          bg-white
          hover:border-blue-500
          transition-all
        "
      >
        {preview ? (
          <div className="h-64 w-full rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
    <img
      src={preview}
      alt="Preview"
      className="max-h-full max-w-full object-contain"
    />
  </div>
        ) : (
          <>
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.9A5 5 0 0115.9 6H16a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Upload Profile Image
            </p>

            <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
          </>
        )}
      </label>

      <input
        id="profileImage"
        type="file"
        accept="image/*"
        className="hidden"
        {...profileImageField}
        onChange={(e) => {
          profileImageField.onChange(e);

          const file = e.target.files?.[0];

          if (file) {
            setPreview(URL.createObjectURL(file));
          }
        }}
      />
    </div>
  );
};

export default ProfileImageUploader;
