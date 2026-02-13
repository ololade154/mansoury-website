const CopyRight = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="blue-color flex justify-center p-3">
      <p className="text-white montserrat text-[14px]">
        &copy; All Rights Reserved for Mansoury. {currentYear}
      </p>
    </div>
  );
};
export default CopyRight;
