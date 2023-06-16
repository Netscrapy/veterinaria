function Pacientes({paciente}) {
  const {nombre, propietario, email, fecha, sintomas} = paciente
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de Mascota: {''}
            <span className="font-normal normal-case">{nombre}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Email Propietario: {''}
            <span className="font-normal normal-case">{email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
          </p>
          <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10
             bg-indigo-600 font-bold uppercase text-white rounded-lg hover:bg-indigo-500">Editar</button>
            <button type="button" className="py-2 px-10
             bg-red-600 font-bold uppercase text-white rounded-lg hover:bg-red-400">Eliminar</button>
          </div>
        </div>
  )
}

export default Pacientes