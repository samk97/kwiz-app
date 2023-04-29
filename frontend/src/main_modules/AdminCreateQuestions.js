import QuestionForm from "../components/QuestionForm";

function AdminCreateQuestions(props) {
  return (
    <>
      <div className="flex mt-10 sm:mt-0">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "sm:ml-72" : "sm:ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2 mb-3">
            <h1 className="text-xl font-bold text-gray-800">
              Create Questions
            </h1>
          </div>

          <QuestionForm open={props.open} />
        </div>
      </div>
    </>
  );
}

export default AdminCreateQuestions;
