

const Error = ({children}) => {
  return (
    <div>
        <div className="bg-red-800 text-center text-white rounded-md uppercase font-bold mb-3 p-3">
                        {children}
        </div>
    </div>
  )
}

export default Error