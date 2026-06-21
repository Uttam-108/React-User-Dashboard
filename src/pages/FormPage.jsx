import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { userSchema } from "../schema/userSchema";
import { UserContext } from "../context/UserContext";

import { CustomInput, ProfileImageUploader } from "../components/utils";
import { COUNTRIES } from "../constants/GeoPlaces";

const countries = COUNTRIES;

const skillsList = ["React", "Node.js", "Java", "Python", "AWS"];

function FormPage() {
  const navigate = useNavigate();

  const { addUser } = useContext(UserContext);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {

    const imageFile = data.profileImage[0];

    if (imageFile && !["image/jpeg", "image/png"].includes(imageFile.type)) {
      alert("Only JPG/PNG files allowed");
      return;
    }

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = () => {
        addUser({
          ...data,
          image: reader.result,
          submittedAt: new Date().toISOString(),
        });

        navigate("/dashboard");
      };

      reader.readAsDataURL(imageFile);
    } else {
      addUser({
        ...data,
        image: "",
        submittedAt: new Date().toISOString(),
      });

      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            User Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Create your profile and join our dashboard
          </p>
        </div>

        {/* Main Card */}

        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-white p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Left Section */}

            <div>
              <ProfileImageUploader register={register} setValue={setValue} />
            </div>

            {/* Right Section */}

            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <CustomInput
                  label="Full Name"
                  name="fullName"
                  placeholder="John Doe"
                  register={register}
                  error={errors.fullName}
                />

                <CustomInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  register={register}
                  error={errors.email}
                />

                <CustomInput
                  label="Phone Number"
                  name="phone"
                  placeholder="9876543210"
                  register={register}
                  error={errors.phone}
                />

                <CustomInput
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  register={register}
                  error={errors.dob}
                />
              </div>

              {/* Gender */}

              <div>
                <label className="font-medium text-gray-700">Gender</label>

                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" value="Male" {...register("gender")} />
                    Male
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender")}
                    />
                    Female
                  </label>
                </div>
              </div>

              {/* Country */}

              <div>
                <label className="font-medium text-gray-700">Country</label>

                <select
                  {...register("country")}
                  className="
                    mt-2
                    w-full
                    px-4
                    py-3
                    border
                    border-gray-300
                    rounded-xl
                    focus:border-blue-500
                    outline-none
                  "
                >
                  <option value="">Select Country</option>

                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Skills */}

              <div>
                <label className="font-medium text-gray-700">Skills</label>

                <div className="flex flex-wrap gap-3 mt-3">
                  {skillsList.map((skill) => (
                    <label
                      key={skill}
                      className="
                        px-4
                        py-2
                        bg-gray-100
                        rounded-lg
                        cursor-pointer
                        hover:bg-blue-50
                      "
                    >
                      <input
                        type="checkbox"
                        value={skill}
                        {...register("skills")}
                        className="mr-2"
                      />

                      {skill}
                    </label>
                  ))}
                </div>
              </div>

              {/* Bio */}

              <div>
                <label className="font-medium text-gray-700">Short Bio</label>

                <textarea
                  rows="4"
                  {...register("bio")}
                  placeholder="Tell us about yourself..."
                  className="
                    mt-2
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    resize-none
                    focus:border-blue-500
                    outline-none
                  "
                />

                {errors.bio && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.bio.message}
                  </p>
                )}
              </div>

              {/* Terms */}

              <label className="flex items-center gap-3">
                <input type="checkbox" {...register("terms")} />

                <span className="text-gray-700">
                  I agree to the Terms & Conditions
                </span>
              </label>

              {/* Submit */}

              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-blue-600
                  text-white
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
