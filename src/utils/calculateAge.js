export const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const diff = Date.now() - birthDate.getTime();

  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};