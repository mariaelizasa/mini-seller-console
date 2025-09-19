const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-pink-500"></div>
      <span className="mt-2 text-gray-700 font-medium">Loading...</span>
    </div>
  );
};

export default Loading;
