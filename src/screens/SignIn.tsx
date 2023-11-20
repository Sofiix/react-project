import { Input } from "@/components/ui/input";
const SignIn = () => {
  return (
    <div>    
      <center><h1 className='text-2xl font-bold'>Unete a nuestro equipo</h1></center>
      <br></br>
      <center><p>Somos una compañía especializada 
en el outsourcing de servicio de TI y ventas
enfocada en el talento humano 
<p> 
para minimizar el impacto generado 
por el desarrollo de cualquiera de 
nuestros servicios.
</p>
</p></center>
<br></br>
      <section className='flex items-center justify-center h-full'> 
      <article className="block p-4 m-auto bg-white rounded-lg border-dashed border-2 border-gray-200">
            <h1 className="text-lg font-medium text-app-blue-dark">ingrese sus nombres</h1><Input />
            <h1 className="text-lg font-medium text-app-blue-dark">ingrese su email</h1><Input />
            <h1 className="text-lg font-medium text-app-blue-dark">ingrese su telefono</h1><Input />
            
              
              <small className="py-2 text-xs font-thin text-gray-700">
                pronto nos contactaremos contigo 
              </small>
              <article>
                <center>
              <button type="button" className="mt-10 py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              Enviar
            </button></center>
            </article>
            </article>  
    </section>
    </div>
  );
};

export default SignIn;
