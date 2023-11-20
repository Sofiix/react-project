const Marketplace = () => {
  return (
    <center>
      <div>
    <h1 className='text-2xl font-bold'>Tienda</h1>
    <section className='flex items-center justify-center h-full'>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Encuentra tu equipo al mejor precio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos partners oficiales de:</p><br></br> <p>   HP, LENOVO, ASUS, LEXMARK, OKIDATA, EPSON Y otros 
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    
              <div className="flex items-center gap-x-6">
                <img className="h-50 w-50 rounded-full"
                src="https://raw.githubusercontent.com/Sofiix/react-project/main/prnter.PNG" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">impresora</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Lexmark  antes 2'008-079</p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <img className="h-50 w-50 rounded-full"
                src="https://raw.githubusercontent.com/Sofiix/react-project/main/equipo2.PNG" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Portatil</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Asus corei3antes 2'008-079</p>
                </div>
              </div>
                    
        </ul>
      </div>
    </div>
      
    </section>
    </div>
    </center>
  );
};

export default Marketplace;
