const Profile = () => {
  return (
    
      <main className="grid grid-cols-1 gap-2 px-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
        <section className="grid bg-white shadow-lg rounded-lg">
          <article className="py-2 px-2">
            <img src="/src/assets/img/BannerADMINUCC.png" className="object-cover rounded-lg" alt="" />
          </article>

          <article className="flex flex-col items-center justify-center md:-mt-56 lg:-mt-32">
            <img alt="profil" src="/src/assets/img/persona1.jpg" className="mx-auto object-cover rounded-full h-16 w-16  border-4 border-white" />
            <h2 className="text-lg font-semibold text-app-blue-dark py-6">
              Adela Parkson
            </h2>
            <p className="text-app-gray-500 text-sm">
              Product Designer
            </p>
            <ul className="flex gap-4 text-center mt-4">
              <li>
                <h1 className="text-lg font-medium text-app-blue-dark" >17</h1>
                <p className="text-app-gray-500 text-sm">Posts</p>
              </li>
              <li>
                <h1 className="text-lg font-medium text-app-blue-dark" >9.7k</h1>
                <p className="text-app-gray-500 text-sm">Followers</p>
              </li>
              <li>
                <h1 className="text-lg font-medium text-app-blue-dark" >274</h1>
                <p className="text-app-gray-500 text-sm">Projects</p>
              </li>
            </ul>
          </article>
        </section>
        <section className="grid bg-white shadow-lg rounded-lg">
          <article className="flex flex-col text-center py-2">
            <img src="/src/assets/img/cloud.svg" className="mx-auto object-cover rounded-full h-24 w-24" alt="" />

            <h1 className="text-lg font-medium text-app-blue-dark">
              Your storage
            </h1>
            <p className="text-app-gray-500 text-sm mt-4">
              Supervise you drive space in the eaiest way
            </p>
            <div className="block p-4 m-auto w-56">
              <article className="flex justify-between">
                <p className="text-app-gray-500 text-sm">25.6 Gb</p>
                <p className="text-app-gray-500 text-sm">50 Gb</p>
              </article>
              <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                <div className="w-3/4 h-full text-center text-xs text-white bg-app-primary rounded-full">
                  75%
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="flex md:col-span-2 lg:col-span-2 bg-white shadow-lg rounded-lg">
          <article className="lg:col-span-1 w-1/2 px-4 py-6 text-center">
            <article className="block p-4 m-auto bg-app-background-main rounded-lg border-dashed border-2 border-gray-200">
              <img src="/src/assets/img/upload.svg" className="mx-auto object-cover h-24 w-24" alt="" />
              <h1 className="text-lg font-medium text-app-primary">
                Upload files
              </h1>
              <small className="py-2 text-xs font-thin text-gray-700">
                PNG, JPG and GIF fiels are allowed
              </small>
            </article>
          </article>

          <article className="lg:col-span-1 px-4 py-6 w-1/2">
            <h1 className="text-lg font-medium text-app-blue-dark">Complete your profile</h1>
            <p className="text-app-gray-500 text-sm mt-4">
              Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss
            </p>
            <button type="button" className="mt-10 py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              Publish now
            </button>
          </article>

        </section>
      </main>

  );
};

export default Profile;
