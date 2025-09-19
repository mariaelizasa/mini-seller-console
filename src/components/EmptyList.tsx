type EmptyListProps = {
  message?: string;
};

const EmptyList = ({ message = "No items found." }: EmptyListProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-64 text-center">
      <img src="../public/error-image.png" className="h-60 mt-20"></img>
      <span className="text-gray-700 font-medium mt-8 text-lg">{message}</span>
    </div>
  );
};

export default EmptyList;
