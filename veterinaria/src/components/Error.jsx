

const Error = ({mensaje}) => {
  return (
    <div>
        <div className="bg-red-800 text-center text-white rounded-md uppercase font-bold mb-3 p-3">
                        <p>{mensaje}</p>
        </div>
    </div>
  )
}

export default Error